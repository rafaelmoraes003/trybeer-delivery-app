import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import userFetchMock from './mocks/userFetchMock';
import salesByUserMock from './mocks/salesByUserMock';
import renderWithRouter from './RenderWithRouter';

const customerOrdersRoute = '/customer/orders';

const setLocalStorage = () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
};

const mockFetch = () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(salesByUserMock),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
};

describe('Testa o componente Orders', () => {
  setLocalStorage();
  mockFetch();
  test('Verifica se a rota é /customer/orders', async () => {
    await waitFor(() => {
      const { history } = renderWithRouter(customerOrdersRoute);
      expect(history.location.pathname).toBe(customerOrdersRoute);
    });
  });
});

describe('Testa se os cards dos pedidos são renderizados', () => {
  setLocalStorage();
  mockFetch();

  test('Verifica se é possível encontrar data-testids dos cards', async () => {
    renderWithRouter(customerOrdersRoute);

    await waitFor(() => {
      for (let i = 0; i < salesByUserMock.length; i += 1) {
        const cardId = salesByUserMock[i].id;
        expect(screen.getByTestId(`customer_orders__element-order-id-${cardId}`))
          .toBeInTheDocument();
        expect(screen.getByTestId(`customer_orders__element-order-date-${cardId}`))
          .toBeInTheDocument();
        expect(screen.getByTestId(`customer_orders__element-delivery-status-${cardId}`))
          .toBeInTheDocument();
        expect(screen.getByTestId(`customer_orders__element-card-price-${cardId}`))
          .toBeInTheDocument();
      }
    });
  });
});

describe('Testa se os muda de rota ao clicar em card', () => {
  setLocalStorage();
  mockFetch();

  test('Verifica a rota é mudada para /customer/orders/1', async () => {
    const { history } = renderWithRouter(customerOrdersRoute);

    const cardOrderNumber = await screen
      .findByTestId(`customer_orders__element-order-id-${salesByUserMock[0].id}`);

    userEvent.click(cardOrderNumber);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/customer/orders/1');
    });
  });
});
