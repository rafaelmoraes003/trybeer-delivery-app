import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import sellerFetchMock from './mocks/sellerFetchMock';
import orderDetailsMock from './mocks/orderDetailsMock';
import renderWithRouter from './RenderWithRouter';

const sellerOrderDetailsRoute = '/seller/orders/1';
const preparingCheckBtnTestId = 'seller_order_details__button-preparing-check';
const dispatchCheckBtnTestId = 'seller_order_details__button-dispatch-check';

const setLocalStorage = () => {
  localStorage.setItem('user', JSON.stringify(sellerFetchMock));
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

describe('Testa o componente SellerOrderDetails', () => {
  setLocalStorage();
  mockFetch('Pendente');
  test('Verifica se a rota é /seller/orders/1', async () => {
    await waitFor(() => {
      const { history } = renderWithRouter(sellerOrderDetailsRoute);
      expect(history.location.pathname).toBe(sellerOrderDetailsRoute);
    });
  });
});

describe('Testa se elementos do pedido são renderizados', () => {
  setLocalStorage();
  mockFetch('Pendente');
  test('Verifica se é possível encontrar data-testids com dados do pedido', async () => {
    await waitFor(() => {
      renderWithRouter(sellerOrderDetailsRoute);
    });

    expect(screen
      .getByTestId('seller_order_details__element-order-details-label-order-id'))
      .toBeInTheDocument();
    expect(screen
      .getByTestId('seller_order_details__element-order-details-label-order-date'))
      .toBeInTheDocument();
    expect(screen
      .getByTestId('seller_order_details__element-order-details-label-delivery-status'))
      .toBeInTheDocument();
    expect(screen
      .getByTestId(preparingCheckBtnTestId))
      .toBeInTheDocument();
    expect(screen
      .getByTestId(dispatchCheckBtnTestId))
      .toBeInTheDocument();
  });
});

describe('Testa comportamento dos botões com status pendente', () => {
  setLocalStorage();
  mockFetch('Pendente');
  test('Verifica se botões se habilitam e desabilitam', async () => {
    await waitFor(() => {
      renderWithRouter(sellerOrderDetailsRoute);
    });

    const preparingCheckBtn = screen.getByTestId(preparingCheckBtnTestId);
    const dispatchCheckBtn = screen.getByTestId(dispatchCheckBtnTestId);

    expect(preparingCheckBtn).not.toBeDisabled();
    expect(dispatchCheckBtn).toBeDisabled();
  });
});

describe('Testa comportamento ao clicar em preparar pedido', () => {
  setLocalStorage();
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn()
        .mockResolvedValueOnce(orderDetailsMock('Pendente'))
        .mockReturnValueOnce(Promise.resolve())
        .mockReturnValueOnce(Promise.resolve()),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
  test('Verifica comportamento dos botões', async () => {
    await waitFor(() => {
      renderWithRouter(sellerOrderDetailsRoute);
    });

    const statusBfr = screen.getByText('Pendente');
    expect(statusBfr).toBeInTheDocument();

    act(() => {
      userEvent.click(screen.getByTestId(preparingCheckBtnTestId));
    });

    const dispatchCheckBtn = screen.getByTestId(dispatchCheckBtnTestId);
    expect(screen.getByText('Preparando')).toBeInTheDocument();
    expect(screen.getByTestId(preparingCheckBtnTestId)).toBeDisabled();
    expect(dispatchCheckBtn).not.toBeDisabled();

    act(() => {
      userEvent.click(dispatchCheckBtn);
    });

    expect(screen.getByText('Em Trânsito')).toBeInTheDocument();
    expect(screen.getByTestId(preparingCheckBtnTestId)).toBeDisabled();
    expect(dispatchCheckBtn).toBeDisabled();
  });
});

describe('Testa comportamento dos botões com status preparando', () => {
  setLocalStorage();
  mockFetch('Em Trânsito');
  test('Verifica se botões se habilitam e desabilitam', async () => {
    await waitFor(() => {
      renderWithRouter(sellerOrderDetailsRoute);
    });

    const preparingCheckBtn = screen.getByTestId(preparingCheckBtnTestId);
    const dispatchCheckBtn = screen.getByTestId(dispatchCheckBtnTestId);

    await waitFor(() => {
      expect(preparingCheckBtn).toBeDisabled();
      expect(dispatchCheckBtn).toBeDisabled();
    });
  });
});
