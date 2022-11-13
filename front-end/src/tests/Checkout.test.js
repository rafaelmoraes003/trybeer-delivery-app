import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import cartMock from './mocks/cartMock';
import saleMock from './mocks/saleMock';
import sellersMock from './mocks/sellersMock';
import userFetchMock from './mocks/userFetchMock';
import renderWithRouter from './RenderWithRouter';

const dropdownTestId = 'customer_checkout__select-seller';
const addressInputTestId = 'customer_checkout__input-address';
const numberInputTestId = 'customer_checkout__input-address-number';
const finishOrderBtnTestId = 'customer_checkout__button-submit-order';

const setLocalStorage = () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
  localStorage.setItem('cart', JSON.stringify(cartMock));
};

const mockFetchSeller = () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(sellersMock),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
};

describe('Testa o componente Checkout', () => {
  setLocalStorage();
  mockFetchSeller();
  test('Verifica se a rota é /customer/checkout', async () => {
    await waitFor(() => {
      const { history } = renderWithRouter(`/${userFetchMock.role}/checkout`);
      expect(history.location.pathname).toBe(`/${userFetchMock.role}/checkout`);
    });
  });
});

describe('Testa a renderização dos elementos do carrinho', () => {
  setLocalStorage();
  mockFetchSeller();

  test('Verifica se os produtos do carrinho são renderizados corretamente', async () => {
    await waitFor(() => {
      renderWithRouter(`/${userFetchMock.role}/checkout`);
    });
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    for (let i = 0; i < cartMock.length; i += 1) {
      expect(
        screen.getByTestId(`customer_checkout__element-order-table-item-number-${i}`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`customer_checkout__element-order-table-name-${i}`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`customer_checkout__element-order-table-quantity-${i}`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`customer_checkout__element-order-table-unit-price-${i}`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`customer_checkout__element-order-table-unit-price-${i}`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`customer_checkout__element-order-table-sub-total-${i}`),
      ).toBeInTheDocument();
      expect(
        screen.getByTestId(`customer_checkout__element-order-table-remove-${i}`),
      ).toBeInTheDocument();
    }

    const totalPriceText = screen
      .getByTestId('customer_checkout__element-order-total-price');
    expect(totalPriceText).toHaveTextContent('29,10');
  });
});

describe('Testa remover um produto do carrinho', () => {
  setLocalStorage();
  mockFetchSeller();

  test('Verifica se produto é excluído da tela', async () => {
    await waitFor(() => {
      renderWithRouter(`/${userFetchMock.role}/checkout`);
    });

    const cartItemsButtonsBfr = screen.getAllByRole('button', { name: 'Remover' });
    expect(cartItemsButtonsBfr).toHaveLength(2);

    userEvent.click(cartItemsButtonsBfr[0]);

    const cartItemsButtonsAft = screen.getAllByRole('button', { name: 'Remover' });
    expect(cartItemsButtonsAft).toHaveLength(1);
  });
});

describe('Testa o formulário de venda', () => {
  setLocalStorage();
  mockFetchSeller();

  test('Verifica se o formulário de venda é renderizado', async () => {
    await waitFor(() => {
      renderWithRouter(`/${userFetchMock.role}/checkout`);
    });

    const sellerDropdown = screen.getByTestId(dropdownTestId);
    const addressInput = screen.getByTestId(addressInputTestId);
    const numberInput = screen.getByTestId(numberInputTestId);
    const finishOrderBtn = screen.getByTestId(finishOrderBtnTestId);

    await waitFor(() => {
      expect(sellerDropdown).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
      expect(numberInput).toBeInTheDocument();
      expect(finishOrderBtn).toBeInTheDocument();
    });
  });
});

describe('Testa fazer venda com dados inválidos', () => {
  setLocalStorage();

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn()
        .mockResolvedValueOnce(sellersMock)
        .mockResolvedValueOnce({ error: 'Some error' }),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica se uma mensagem de erro é mostrada', async () => {
    await waitFor(() => {
      renderWithRouter(`/${userFetchMock.role}/checkout`);
    });

    const finishOrderBtn = await screen.findByTestId(finishOrderBtnTestId);

    act(() => {
      userEvent.click(finishOrderBtn);
    });

    const errorMessage = await screen.findByTestId('customer_checkout__error-message');
    expect(errorMessage).toBeInTheDocument();
  });
});

describe('Testa fazer venda com dados válidos', () => {
  setLocalStorage();

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn()
        .mockResolvedValueOnce(sellersMock)
        .mockResolvedValueOnce(saleMock),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica redireciona para página de detalhes do pedido', async () => {
    const { history } = renderWithRouter('/customer/checkout');

    const addressInput = await screen.findByTestId(addressInputTestId);
    const numberInput = await screen.findByTestId(numberInputTestId);
    const finishOrderBtn = await screen.findByTestId(finishOrderBtnTestId);

    act(() => {
      userEvent.type(addressInput, 'Rua X');
      userEvent.type(numberInput, '99');
      userEvent.click(finishOrderBtn);
    });

    await waitFor(() => {
      expect(history.location.pathname)
        .toBe(`/${userFetchMock.role}/orders/${saleMock.id}`);
    });
  });
});

describe('Testa selecionar um vendedor', () => {
  setLocalStorage();
  mockFetchSeller();

  test('Verifica se muda de vendedor', async () => {
    await waitFor(() => {
      renderWithRouter(`/${userFetchMock.role}/checkout`);
    });

    const dropdownSeller = await screen.findByTestId('customer_checkout__select-seller');
    expect(dropdownSeller).toHaveValue('2');

    userEvent.selectOptions(dropdownSeller, ['3']);
    expect(dropdownSeller).toHaveValue('3');
  });
});
