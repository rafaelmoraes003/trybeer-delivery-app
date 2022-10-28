import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateFields = () => {
    const MIN_PASSWORD_LENGTH = 6;
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email) && password.length >= MIN_PASSWORD_LENGTH;
  };

  const navigate = useNavigate();

  console.log(email, password);

  return (
    <div>

      <Input
        testId="common_login__input-email"
        type="email"
        labelText="Login"
        onChange={ setEmail }
      />

      <Input
        testId="common_login__input-password"
        type="text"
        labelText="Senha"
        onChange={ setPassword }
      />

      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ !validateFields() }
      >
        Login
      </button>

      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </button>

    </div>
  );
}

export default Login;
