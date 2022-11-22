import { useState, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import UsersContext from '../../Context/UsersContext';
import getToast from '../../utils/getToast';
import InputWithLabel from '../InputLabel/InputWithLabel';
import 'react-toastify/dist/ReactToastify.css';

import * as S from './styled';

function AdminForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const availabeRoles = ['customer', 'seller'];
  const [role, setRole] = useState(availabeRoles[0]);
  const { addUser } = useContext(UsersContext);

  const validateFields = () => {
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORD_LENGTH = 6;
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    return name.length >= MIN_NAME_LENGTH
      && password.length >= MIN_PASSWORD_LENGTH
      && regex.test(email);
  };

  const createUser = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const response = await fetch('http://localhost:3001/users/admin', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
      body: JSON.stringify({ name, email, password, role }),
    });

    const body = await response.json();
    if (body.error) {
      getToast('error', 'Usuário já existente');
    } else {
      getToast('success', 'Usuário criado com sucesso!');
      delete body.password;
      delete body.token;
      addUser(body);
    }
  };

  return (
    <>
      <S.Text>Cadastrar novo usuário</S.Text>
      <S.Form>
        <InputWithLabel
          className="input"
          labelText="Nome"
          type="text"
          testId="admin_manage__input-name"
          onChange={ setName }
        />

        <InputWithLabel
          className="input"
          labelText="Email"
          type="email"
          testId="admin_manage__input-email"
          onChange={ setEmail }
        />

        <InputWithLabel
          className="input"
          labelText="Senha"
          type="password"
          testId="admin_manage__input-password"
          onChange={ setPassword }
        />

        <S.Label htmlFor="role">
          Tipo
          <S.Select
            id="role"
            data-testid="admin_manage__select-role"
            onChange={ (e) => setRole(e.target.value) }
          >
            {availabeRoles.map((mapRole) => (
              <option key={ mapRole } value={ mapRole }>{mapRole}</option>
            ))}
          </S.Select>

          <S.Button
            data-testid="admin_manage__button-register"
            type="button"
            disabled={ !validateFields() }
            onClick={ createUser }
          >
            Cadastrar
          </S.Button>
        </S.Label>

        <div data-testid="admin_manage__element-invalid-register">
          <ToastContainer />
        </div>

      </S.Form>
    </>
  );
}

export default AdminForm;
