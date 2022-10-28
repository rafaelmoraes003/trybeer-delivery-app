import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import StatusCodes from '../../utils/StatusCodes';

function Login() {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUserMessage, setInvalidUserMessage] = useState(false);

  const validateFields = () => {
    const MIN_PASSWORD_LENGTH = 6;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email) && password.length >= MIN_PASSWORD_LENGTH;
  };

  const getUser = async () => {
    const { status } = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (status === StatusCodes.NOT_FOUND) {
      setInvalidUserMessage(true);
    } else {
      navigateTo('/customer/products');
    }
  };

  return (
    <div>

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

      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ !validateFields() }
        onClick={ getUser }
      >
        Login
      </button>

      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>

      {invalidUserMessage && (
        <p
          data-testid="common_login__element-invalid-email"
        >
          Usuário inválido.
        </p>
      )}
    </div>
  );
}

export default Login;
