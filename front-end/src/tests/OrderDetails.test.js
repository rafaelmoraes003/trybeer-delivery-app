import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import userFetchMock from './mocks/userFetchMock';
import orderDetailsMock from './mocks/orderDetailsMock';
import renderWithRouter from './RenderWithRouter';

const customerOrderDetailsRoute = '/customer/orders/1';
const deliveryBtnTestId = 'customer_order_details__button-delivery-check';

const setLocalStorage = () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
};

const mockFetch = (saleStatus) => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(orderDetailsMock(saleStatus)),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
};

describe('Testa o componente OrderDetails', () => {
  setLocalStorage();
  mockFetch('Pendente');
  test('Verifica se a rota é /customer/orders/1', async () => {
    await waitFor(() => {
      const { history } = renderWithRouter(customerOrderDetailsRoute);
      expect(history.location.pathname).toBe(customerOrderDetailsRoute);
    });
  });
});

describe('Testa se elementos do pedido são renderizados', () => {
  setLocalStorage();
  mockFetch('Pendente');
  test('Verifica se é possível encontrar data-testids com dados do pedido', async () => {
    renderWithRouter(customerOrderDetailsRoute);

    await waitFor(() => {
      expect(screen
        .getByTestId('customer_order_details__element-order-details-label-order-id'))
        .toBeInTheDocument();
      expect(screen
        .getByTestId('customer_order_details__element-order-details-label-seller-name'))
        .toBeInTheDocument();
      expect(screen
        .getByTestId('customer_order_details__element-order-details-label-order-date'))
        .toBeInTheDocument();
      expect(screen
        .getByTestId(
          'customer_order_details__element-order-details-label-delivery-status1',
        ))
        .toBeInTheDocument();
      expect(screen
        .getByTestId(deliveryBtnTestId))
        .toBeInTheDocument();
    });
  });
});

describe('Testa se elementos dos produtos são renderizados', () => {
  setLocalStorage();
  mockFetch('Pendente');
  test('Verifica se é possível encontrar data-testids dos produtos', async () => {
    renderWithRouter(customerOrderDetailsRoute);

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
      expect(screen
        .getByTestId('customer_order_details__element-order-table-item-number-0'))
        .toBeInTheDocument();
      expect(screen
        .getByTestId('customer_order_details__element-order-table-name-0'))
        .toBeInTheDocument();
      expect(screen
        .getByTestId('customer_order_details__element-order-table-quantity-0'))
        .toBeInTheDocument();
      expect(screen
        .getByTestId(
          'customer_order_details__element-order-table-unit-price-0',
        ))
        .toBeInTheDocument();
      expect(screen
        .getByTestId('customer_order_details__element-order-table-sub-total-0'))
        .toBeInTheDocument();

      expect(screen
        .getByTestId('customer_order_details__element-order-total-price'))
        .toBeInTheDocument();
    });
  });
});

describe('Testa se botão de entrega com status pendente', () => {
  setLocalStorage();
  mockFetch('Pendente');
  test('Verifica se botão está desabilitado', async () => {
    renderWithRouter(customerOrderDetailsRoute);

    await waitFor(() => {
      expect(screen
        .getByTestId(deliveryBtnTestId))
        .toBeDisabled();
    });
  });
});

describe('Testa se botão de entrega com status em trânsito', () => {
  setLocalStorage();

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn()
        .mockResolvedValueOnce(orderDetailsMock('Em Trânsito'))
        .mockReturnValueOnce(Promise.resolve()),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica se botão está habilitado', async () => {
    act(() => {
      renderWithRouter(customerOrderDetailsRoute);
    });

    const deliveryBtn = await screen.findByTestId(deliveryBtnTestId);

    await waitFor(() => {
      expect(deliveryBtn).not.toBeDisabled();
    });

    userEvent.click(deliveryBtn);

    await waitFor(() => {
      expect(screen.getByText('Entregue')).toBeInTheDocument();
    });
  });
});
