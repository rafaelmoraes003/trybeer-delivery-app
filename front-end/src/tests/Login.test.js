// import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import userFetchMock from './mocks/userFetchMock';
import renderWithRouter from './RenderWithRouter';
// import App from '../App';

const emailInputTestId = 'common_login__input-email';
const passwordInputTestId = 'common_login__input-password';
const loginBtnTestId = 'common_login__button-login';
const dontHaveAccountBtnTestId = 'common_login__button-register';
const errorMessageTestId = 'common_login__element-invalid-email';

describe('Testa o componente Login', () => {
  test('Verifica se página redireciona a rota / para a rota /login', () => {
    // renderWithRouter(<App />);
    const { history } = renderWithRouter('/');
    expect(history.location.pathname).toBe('/login');
  });

  test('Verifica se os elementos HTML estão em tela', () => {
    renderWithRouter('/login');

    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const loginBtn = screen.getByTestId(loginBtnTestId);
    const dontHaveAccountBtn = screen.getByTestId(dontHaveAccountBtnTestId);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
    expect(dontHaveAccountBtn).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();
  });

  test('Verifica se botão fica desabilitado com dados inválidos', () => {
    renderWithRouter('/login');

    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const loginBtn = screen.getByTestId(loginBtnTestId);

    userEvent.type(emailInput, 'formatoErradoDeEmail');
    userEvent.type(passwordInput, '12345');

    expect(loginBtn).toBeDisabled();
  });

  test('Verifica se botão fica habilitado com dados válidos', () => {
    renderWithRouter('/login');

    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const loginBtn = screen.getByTestId(loginBtnTestId);

    userEvent.type(emailInput, 'teste@tryber.com');
    userEvent.type(passwordInput, '123456');

    expect(loginBtn).not.toBeDisabled();
  });

  test('Verifica se botão de "Ainda não tenho conta" redireciona para /register', () => {
    const { history } = renderWithRouter('/login');

    const dontHaveAccountBtn = screen.getByTestId(dontHaveAccountBtnTestId);

    userEvent.click(dontHaveAccountBtn);

    expect(history.location.pathname).toBe('/register');
  });
});

describe('Testa login com usuário válido', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(userFetchMock),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test(`Verifica se redireciona para página de produtos
se dados de login forem válidos`, async () => {
    const { history } = renderWithRouter('/login');

    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const loginBtn = screen.getByTestId(loginBtnTestId);

    userEvent.type(emailInput, userFetchMock.email);
    userEvent.type(passwordInput, '123456');
    userEvent.click(loginBtn);

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/${userFetchMock.role}/products`);
    });
  });
});

describe('Testa login com usuário inválido', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({ error: 'User already exists' }),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica se mostra mensagem de erro ao criar usuário inválido', async () => {
    renderWithRouter('/login');

    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const loginBtn = screen.getByTestId(loginBtnTestId);

    userEvent.type(emailInput, 'teste@tryber.com');
    userEvent.type(passwordInput, '123456');
    userEvent.click(loginBtn);

    const errorMessage = await screen.findByTestId(errorMessageTestId);
    expect(errorMessage).toBeInTheDocument();
  });
});
