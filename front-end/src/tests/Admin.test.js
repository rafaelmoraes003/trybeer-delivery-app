import { screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import adminFetchMock from './mocks/adminFetchMock';
import allUsersMock from './mocks/allUsersMock';
import renderWithRouter from './RenderWithRouter';
import newUser from './mocks/newUser';

const adminRoute = '/admin/manage';

const nameInputTestId = 'admin_manage__input-name';
const emailInputTestId = 'admin_manage__input-email';
const passwordInputTestId = 'admin_manage__input-password';
const registerBtnTestId = 'admin_manage__button-register';
const dropdownTestId = 'admin_manage__select-role';

const setLocalStorage = () => {
  localStorage.setItem('user', JSON.stringify(adminFetchMock));
};

const mockFetch = () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(allUsersMock),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
};

describe('Testa o componente Admin', () => {
  setLocalStorage();
  mockFetch();

  test('Verifica se a rota é /admin/manage', async () => {
    await waitFor(() => {
      const { history } = renderWithRouter(adminRoute);
      expect(history.location.pathname).toBe(adminRoute);
    });
  });
});

describe('Testa renderização de tabela de usuários', () => {
  setLocalStorage();
  mockFetch();

  test('Verifica se usuários são renderizados', async () => {
    await waitFor(() => {
      renderWithRouter(adminRoute);
    });

    for (let i = 0; i < allUsersMock.length; i += 1) {
      expect(screen.getByTestId(`admin_manage__element-user-table-item-number-${i}`))
        .toBeInTheDocument();
      expect(screen.getByTestId(`admin_manage__element-user-table-name-${i}`))
        .toBeInTheDocument();
      expect(screen.getByTestId(`admin_manage__element-user-table-email-${i}`))
        .toBeInTheDocument();
      expect(screen.getByTestId(`admin_manage__element-user-table-role-${i}`))
        .toBeInTheDocument();
      const userRole = allUsersMock[i].role === 'customer'
        ? 'Cliente' : 'Pessoa Vendedora';
      expect(screen.getByText(userRole)).toBeInTheDocument();
      expect(screen.getByTestId(`admin_manage__element-user-table-remove-${i}`))
        .toBeInTheDocument();
    }
  });
});

describe('Testa formulário de criação de usuário', () => {
  setLocalStorage();
  mockFetch();

  test('Verifica comportamento do botão de registro com dados inválidos', async () => {
    await waitFor(() => {
      renderWithRouter(adminRoute);
    });

    const nameInput = screen.getByTestId(nameInputTestId);
    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const registerBtn = screen.getByTestId(registerBtnTestId);

    act(() => {
      userEvent.type(nameInput, 'rafael');
      userEvent.type(emailInput, 'email');
      userEvent.type(passwordInput, '12345');
    });

    expect(registerBtn).toBeDisabled();
  });

  test('Verifica comportamento do botão de registro com dados válidos', async () => {
    await waitFor(() => {
      renderWithRouter(adminRoute);
    });

    const nameInput = screen.getByTestId(nameInputTestId);
    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const roleDropdown = screen.getByTestId(dropdownTestId);
    const registerBtn = screen.getByTestId(registerBtnTestId);

    act(() => {
      userEvent.type(nameInput, 'rafael moraes');
      userEvent.type(emailInput, 'trybe2r@teste.com');
      userEvent.type(passwordInput, '123456');
      userEvent.selectOptions(roleDropdown, ['seller']);
    });
    expect(roleDropdown).toHaveValue('seller');
    expect(registerBtn).not.toBeDisabled();
  });
});

describe('Testa criação de novo usuário', () => {
  setLocalStorage();

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn()
        .mockReturnValueOnce(allUsersMock)
        .mockReturnValueOnce(newUser),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica adiciona novo usuário na lista', async () => {
    await waitFor(() => {
      renderWithRouter(adminRoute);
    });

    const nameInput = screen.getByTestId(nameInputTestId);
    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const registerBtn = screen.getByTestId(registerBtnTestId);

    const usersBfr = screen
      .getAllByTestId(/admin_manage__element-user-table-item-number/i);
    expect(usersBfr).toHaveLength(2);

    act(() => {
      userEvent.type(nameInput, 'klaus tryber');
      userEvent.type(emailInput, 'trybewr@teste.com');
      userEvent.type(passwordInput, '123456');
    });

    userEvent.click(registerBtn);

    await waitFor(() => {
      const usersAft = screen
        .getAllByTestId(/admin_manage__element-user-table-item-number/i);
      expect(usersAft).toHaveLength(2 + 1);
    });
  });
});

describe('Testa criação de novo usuário com erro', () => {
  setLocalStorage();

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn()
        .mockReturnValueOnce(allUsersMock)
        .mockReturnValueOnce({ error: 'User already exists.' }),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica se mostra mensagem de erro', async () => {
    await waitFor(() => {
      renderWithRouter(adminRoute);
    });

    const nameInput = screen.getByTestId(nameInputTestId);
    const emailInput = screen.getByTestId(emailInputTestId);
    const passwordInput = screen.getByTestId(passwordInputTestId);
    const registerBtn = screen.getByTestId(registerBtnTestId);

    const usersBfr = screen
      .getAllByTestId(/admin_manage__element-user-table-item-number/i);
    expect(usersBfr).toHaveLength(2);

    act(() => {
      userEvent.type(nameInput, 'klaus tryber 2');
      userEvent.type(emailInput, 'tryber@teste.com');
      userEvent.type(passwordInput, '123456');
    });

    userEvent.click(registerBtn);

    await waitFor(() => {
      const errorMessage = screen.getByTestId('admin_manage__element-invalid-register');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});

describe('Testa a remoção de usuário', () => {
  setLocalStorage();

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn()
        .mockReturnValueOnce([...allUsersMock, newUser])
        .mockReturnValueOnce(Promise.resolve()),
    });
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Verifica se remove usuário da lista', async () => {
    await waitFor(() => {
      renderWithRouter(adminRoute);
    });

    const usersBfr = screen
      .getAllByTestId(/admin_manage__element-user-table-item-number/i);
    expect(usersBfr).toHaveLength(2 + 1);

    const userRemoveBtn = screen.getAllByRole('button', { name: 'Excluir' })[0];

    userEvent.click(userRemoveBtn);

    await waitFor(() => {
      const usersAft = screen
        .getAllByTestId(/admin_manage__element-user-table-item-number/i);
      expect(usersAft).toHaveLength(2);
    });
  });
});
