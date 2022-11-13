import { screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import userFetchMock from './mocks/userFetchMock';
import renderWithRouter from './RenderWithRouter';

const nameInputTestId = 'common_register__input-name';
const emailInputTestId = 'common_register__input-email';
const passwordInputTestId = 'common_register__input-password';
const registerBtnTestId = 'common_register__button-register';
const errorMessageTestId = 'common_register__element-invalid_register';

describe('Testa o componente Register', () => {
  test('Verifica se a rota é /register', () => {
    const { history } = renderWithRouter('/register');
    expect(history.location.pathname).toBe('/register');
  });
});

describe('Testa botão com dados inválidos', () => {
  test('Verifica botão fica desabilitado', () => {
    renderWithRouter('/register');

    const nameInput = screen.getByTestId(nameInputTestId);
    const emailInput = screen.getByTestId(emailInputTestId);
    const passswordInput = screen.getByTestId(passwordInputTestId);
    const registerBtn = screen.getByTestId(registerBtnTestId);

    act(() => {
      userEvent.type(nameInput, 'rafael < 12');
      userEvent.type(emailInput, 'email');
      userEvent.type(passswordInput, '12345');
    });

    expect(registerBtn).toBeDisabled();
  });
});

describe('Testa botão com dados válidos', () => {
  test('Verifica botão fica habilitado', () => {
    renderWithRouter('/register');

    const nameInput = screen.getByTestId(nameInputTestId);
    const emailInput = screen.getByTestId(emailInputTestId);
    const passswordInput = screen.getByTestId(passwordInputTestId);
    const registerBtn = screen.getByTestId(registerBtnTestId);

    userEvent.type(nameInput, 'rafael moraes');
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(passswordInput, '123456');

    expect(registerBtn).not.toBeDisabled();
  });
});

describe('Testa criação com usuário já existente', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({ error: 'User already exists.' }),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica se mostra mensagem de erro', async () => {
    renderWithRouter('/register');

    const nameInput = screen.getByTestId(nameInputTestId);
    const emailInput = screen.getByTestId(emailInputTestId);
    const passswordInput = screen.getByTestId(passwordInputTestId);
    const registerBtn = screen.getByTestId(registerBtnTestId);

    userEvent.type(nameInput, 'rafael moraes');
    userEvent.type(emailInput, 'email@email.com');
    userEvent.type(passswordInput, '123456');
    userEvent.click(registerBtn);

    await waitFor(() => {
      const errorMessage = screen.getByTestId(errorMessageTestId);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});

describe('Testa criação de usuário com sucesso', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(userFetchMock),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica redireciona para rota /customer/products', async () => {
    const { history } = renderWithRouter('/register');

    const nameInput = screen.getByTestId(nameInputTestId);
    const emailInput = screen.getByTestId(emailInputTestId);
    const passswordInput = screen.getByTestId(passwordInputTestId);
    const registerBtn = screen.getByTestId(registerBtnTestId);

    userEvent.type(nameInput, 'klaus tryber');
    userEvent.type(emailInput, 'rafael@trybe.com');
    userEvent.type(passswordInput, '123456');
    userEvent.click(registerBtn);

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/${userFetchMock.role}/products`);
    });
  });
});
