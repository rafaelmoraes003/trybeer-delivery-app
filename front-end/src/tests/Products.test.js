import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import productsMock from './mocks/products';
import userFetchMock from './mocks/userFetchMock';
import renderWithRouter from './RenderWithRouter';

const navBarProductsBtnTestId = 'customer_products__element-navbar-link-products';
const navBarOrdersBtnTestId = 'customer_products__element-navbar-link-orders';
const navBarUserNameTestId = 'customer_products__element-navbar-user-full-name';
const navBarLogoutBtnTestId = 'customer_products__element-navbar-link-logout';
const navBarCheckoutBtnTestId = 'customer_products__checkout-bottom-value';
const navBarCartBtnTestId = 'customer_products__button-cart';

const mockFetchWithProducts = () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(productsMock),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
};

const renderProducts = (productId) => {
  expect(
    screen.getByTestId(`customer_products__img-card-bg-image-${productId}`),
  ).toBeInTheDocument();
  expect(
    screen.getByTestId(`customer_products__element-card-title-${productId}`),
  ).toBeInTheDocument();
  expect(
    screen.getByTestId(`customer_products__element-card-price-${productId}`),
  ).toBeInTheDocument();
  expect(
    screen.getByTestId(`customer_products__button-card-add-item-${productId}`),
  ).toBeInTheDocument();
  expect(
    screen.getByTestId(`customer_products__input-card-quantity-${productId}`),
  ).toBeInTheDocument();
  expect(
    screen.getByTestId(`customer_products__button-card-rm-item-${productId}`),
  ).toBeInTheDocument();
};

describe('Testa o componente Products', () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
  mockFetchWithProducts();

  test('Verifica se a rota é /customer/products', async () => {
    await waitFor(() => {
      const { history } = renderWithRouter(`/${userFetchMock.role}/products`);
      expect(history.location.pathname).toBe(`/${userFetchMock.role}/products`);
    });
  });
});

describe('Verifica a renderização dos produtos', () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
  mockFetchWithProducts();

  test(`Verifica se os produtos são renderizados 
com os data-testids corretos`, async () => {
    await waitFor(() => {
      renderWithRouter(`/${userFetchMock.role}/products`);
    });

    productsMock.forEach((product) => {
      renderProducts(product.id);
    });
  });
});

describe('Testa a NavBar', () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
  mockFetchWithProducts();

  test('Verifica se a NavBar tem os dados corretos', async () => {
    await waitFor(() => renderWithRouter(`/${userFetchMock.role}/products`));
    const navBarProductsBtn = screen.getByTestId(navBarProductsBtnTestId);
    const navBarOrdersBtn = screen.getByTestId(navBarOrdersBtnTestId);
    const navBarUserName = screen.getByTestId(navBarUserNameTestId);
    const navBarLogoutBtn = screen.getByTestId(navBarLogoutBtnTestId);
    const navBarCheckoutBtn = screen.getByTestId(navBarCheckoutBtnTestId);
    const navBarCartBtn = screen.getByTestId(navBarCartBtnTestId);

    expect(navBarProductsBtn).toBeInTheDocument();
    expect(navBarOrdersBtn).toBeInTheDocument();
    expect(navBarUserName).toBeInTheDocument();
    expect(navBarLogoutBtn).toBeInTheDocument();
    expect(navBarCheckoutBtn).toBeInTheDocument();
    expect(navBarCartBtn).toBeInTheDocument();
    expect(navBarCartBtn).toBeDisabled();
  });
});

describe('Testa a adição de quantidade de produtos', () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
  mockFetchWithProducts();

  test('Verifica se botões reagem ao incrementar qunatidade de produtos', async () => {
    const { history } = renderWithRouter(`/${userFetchMock.role}/products`);

    const incrementQtyBtn = await screen
      .findByTestId('customer_products__button-card-add-item-1');

    const qtyInput = await screen
      .findByTestId('customer_products__input-card-quantity-1');
    const navBarCartBtn = screen.getByTestId(navBarCartBtnTestId);

    const decrementBtn = await screen
      .findByTestId('customer_products__button-card-rm-item-1');

    userEvent.click(incrementQtyBtn);
    expect(qtyInput).toHaveValue('1');
    expect(navBarCartBtn).not.toBeDisabled();
    userEvent.click(decrementBtn);
    expect(qtyInput).toHaveValue('0');
    expect(navBarCartBtn).toBeDisabled();
    userEvent.click(incrementQtyBtn);
    const checkoutBtnAfterClick = screen.getByText('R$2,20');
    expect(checkoutBtnAfterClick).toBeInTheDocument();
    userEvent.type(qtyInput, '3');
    expect(qtyInput).toHaveDisplayValue('13');
    userEvent.click(navBarCartBtn);
    expect(history.location.pathname).toBe(`/${userFetchMock.role}/checkout`);
  });
});

describe('Testa ir para a página de pedidos', () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
  mockFetchWithProducts();

  test('Verifica se é redirecionado para /login e o local storage é limpo', async () => {
    const { history } = renderWithRouter(`/${userFetchMock.role}/products`);

    const navBarOrdersBtn = await screen.findByRole('button', { name: 'MEUS PEDIDOS' });

    act(() => {
      userEvent.click(navBarOrdersBtn);
    });

    expect(history.location.pathname).toBe(`/${userFetchMock.role}/orders`);
  });
});

describe('Testa ir para tela de produtos (botão)', () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
  mockFetchWithProducts();

  test('Verifica se ao clicar no botão, mantêm ná rota', async () => {
    const { history } = renderWithRouter(`/${userFetchMock.role}/products`);

    const navBarProductsBtn = await screen.findByTestId(navBarProductsBtnTestId);

    act(() => {
      userEvent.click(navBarProductsBtn);
    });

    expect(history.location.pathname).toBe(`/${userFetchMock.role}/products`);
  });
});

describe('Testa fazer logout', () => {
  localStorage.setItem('user', JSON.stringify(userFetchMock));
  mockFetchWithProducts();

  test('Verifica se é redirecionado para /login e o local storage é limpo', async () => {
    const { history } = renderWithRouter(`/${userFetchMock.role}/products`);

    const navBarLogoutBtn = await screen.findByTestId(navBarLogoutBtnTestId);

    userEvent.click(navBarLogoutBtn);

    expect(history.location.pathname).toBe('/login');
    expect(JSON.parse(localStorage.getItem('user'))).toBe(null);
  });
});
