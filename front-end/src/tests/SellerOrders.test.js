import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import salesBySellerMock from './mocks/salesBySellerMock';
import sellerFetchMock from './mocks/sellerFetchMock';
import renderWithRouter from './RenderWithRouter';

const sellerOrdersRoute = '/seller/orders';

const setLocalStorage = () => {
  localStorage.setItem('user', JSON.stringify(sellerFetchMock));
};

const mockFetch = () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(salesBySellerMock),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
};

describe('Testa o componente SellerOrders', () => {
  setLocalStorage();
  mockFetch();
  test('Verifica se a rota é /seller/orders', async () => {
    await waitFor(() => {
      const { history } = renderWithRouter(sellerOrdersRoute);
      expect(history.location.pathname).toBe(sellerOrdersRoute);
    });
  });
});

describe('Testa a NavBar em SellerOrders', () => {
  setLocalStorage();
  mockFetch();
  test('Verifica se botão de pedidos é renderizado', async () => {
    await waitFor(() => renderWithRouter(sellerOrdersRoute));
    const ordersBtn = screen.getByRole('button', { name: 'PEDIDOS' });
    expect(ordersBtn).toBeInTheDocument();
  });
});

describe('Testa se os cards dos pedidos são renderizados', () => {
  setLocalStorage();
  mockFetch();

  test('Verifica se é possível encontrar data-testids dos cards', async () => {
    await waitFor(() => renderWithRouter(sellerOrdersRoute));

    for (let i = 0; i < salesBySellerMock.length; i += 1) {
      const cardId = salesBySellerMock[i].id;
      expect(screen.getByTestId(`seller_orders__element-order-id-${cardId}`))
        .toBeInTheDocument();
      expect(screen.getByTestId(`seller_orders__element-order-date-${cardId}`))
        .toBeInTheDocument();
      expect(screen.getByTestId(`seller_orders__element-delivery-status-${cardId}`))
        .toBeInTheDocument();
      expect(screen.getByTestId(`seller_orders__element-card-price-${cardId}`))
        .toBeInTheDocument();
    }
  });
});

describe('Testa se os muda de rota ao clicar em card', () => {
  setLocalStorage();
  mockFetch();

  test('Verifica a rota é mudada para /seller/orders/1', async () => {
    const { history } = renderWithRouter(sellerOrdersRoute);

    const cardOrderNumber = await screen
      .findByTestId(`seller_orders__element-order-id-${salesBySellerMock[0].id}`);

    userEvent.click(cardOrderNumber);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/seller/orders/1');
    });
  });
});
