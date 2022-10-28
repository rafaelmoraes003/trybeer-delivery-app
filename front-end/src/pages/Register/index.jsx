import React from 'react';

function Register() {
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
            placeholder="Sua-senha"
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
    </main>
  );
}

export default Register;
