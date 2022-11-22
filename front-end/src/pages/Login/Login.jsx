import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../../components/InputLabel/InputWithLabel';
import loginRoutes from '../../utils/loginRoutes';
import logo from '../../images/Trybeer.png';
import getToast from '../../utils/getToast';

import * as S from './styled';

function Login() {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) navigateTo(loginRoutes[user.role]);
  }, [navigateTo]);

  const validateFields = () => {
    const MIN_PASSWORD_LENGTH = 6;
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return regex.test(email) && password.length >= MIN_PASSWORD_LENGTH;
  };

  const getUser = async () => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const body = await response.json();

    if (body.error) {
      getToast('error', 'Usuário inválido.');
    } else {
      localStorage.setItem('user', JSON.stringify(body));
      navigateTo(loginRoutes[body.role]);
    }
  };

  return (
    <S.Container>
      <S.Image>
        <img src={ logo } width={ 400 } alt="Logo do App Trybeer" />
      </S.Image>
      <S.Forms>
        <h1>Trybeer Delivery App</h1>
        <Input
          testId="common_login__input-email"
          type="text"
          labelText="Login"
          onChange={ setEmail }
        />

        <Input
          testId="common_login__input-password"
          type="password"
          labelText="Senha"
          onChange={ setPassword }
        />

        <S.ButtonLogin
          data-testid="common_login__button-login"
          type="button"
          disabled={ !validateFields() }
          onClick={ getUser }
        >
          Login
        </S.ButtonLogin>

        <S.ButtonRegister
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigateTo('/register') }
        >
          Ainda não tenho conta
        </S.ButtonRegister>
      </S.Forms>

      <div data-testid="common_login__element-invalid-email">
        <ToastContainer />
      </div>
    </S.Container>
  );
}

export default Login;
