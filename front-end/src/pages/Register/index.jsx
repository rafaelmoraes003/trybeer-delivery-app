import React, { useEffect, useState } from 'react';

function Register() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loginFailed, setLoginFailed] = useState(false);

  useEffect(() => {
    const { email, password, name } = data;
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const minLengthPassword = 6;
    const minLengthName = 12;

    if (emailRegex.test(email) && password.length >= minLengthPassword
    && name.length >= minLengthName) {
      setBtnDisabled(false);
    }

    if (!emailRegex.test(email) || password.length < minLengthPassword || name.length < minLengthName) {
      setLoginFailed(true);
      setBtnDisabled(true);
    }

    if (email === '' || password === '' || name === '') setLoginFailed(false);
  }, [data]);

    function handleChange({ target: { name, value } }) {
      setData((state) => ({ ...state, [name]: value }));
    }


  return (
    <main>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="input-name">
          Nome
          <input
            type="text"
            id="input-name"
            name="name"
            value={ data.name }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="Seu nome"
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="input-email">
          Email
          <input
            type="email"
            id="input-email"
            name="email"
            value={ data.email }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
          />
        </label>
        <label htmlFor="input-password">
          Senha
          <input
            type="password"
            id="input-password"
            name="password"
            value={ data.password }
            onChange={ ({ target }) => handleChange({ target }) }
            placeholder="Sua-senha"
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="button"
          disabled={ btnDisabled  }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      {
        (loginFailed)
          && (
            <p data-testid="common_login__element-invalid_register">
              O nome, e-mail e senha incorretos.
            </p>
          )}
    </main>
  );
}

export default Register;
