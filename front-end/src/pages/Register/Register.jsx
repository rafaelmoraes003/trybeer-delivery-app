import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  RiAccountCircleLine,
  RiMailLine,
  RiGitRepositoryPrivateLine }
  from 'react-icons/ri';
import * as S from './styled';
import getToast from '../../utils/getToast';

function Register() {
  const navigateTo = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    const { email, password, name } = data;
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const minLengthPassword = 6;
    const minLengthName = 12;

    if (emailRegex.test(email) && password.length >= minLengthPassword
    && name.length >= minLengthName) {
      setBtnDisabled(false);
    }

    if (!emailRegex.test(email) || password.length < minLengthPassword
      || name.length < minLengthName) {
      setBtnDisabled(true);
    }
  }, [data]);

  const createUser = async () => {
    const { name, email, password } = data;
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const body = await response.json();
    delete body.password;

    if (body.error) {
      getToast('error', 'Usuário já existente.');
    } else {
      localStorage.setItem('user', JSON.stringify(body));
      navigateTo(`/${body.role}/products`);
    }
  };

  function handleChange({ target: { name, value } }) {
    setData((state) => ({ ...state, [name]: value }));
  }

  return (
    <S.Wrapper>
      <S.Title>Cadastro</S.Title>
      <S.Forms>
        <S.InputContainer>
          <RiAccountCircleLine className="icon" />
          <S.Label htmlFor="input-name">
            <S.Input
              type="text"
              id="input-name"
              name="name"
              value={ data.name }
              onChange={ ({ target }) => handleChange({ target }) }
              placeholder="Seu nome"
              data-testid="common_register__input-name"
            />
          </S.Label>
        </S.InputContainer>
        <S.InputContainer>
          <RiMailLine className="icon" />
          <S.Label htmlFor="input-email">
            <S.Input
              type="email"
              id="input-email"
              name="email"
              value={ data.email }
              onChange={ ({ target }) => handleChange({ target }) }
              placeholder="seu-email@site.com.br"
              data-testid="common_register__input-email"
            />
          </S.Label>
        </S.InputContainer>
        <S.InputContainer>
          <RiGitRepositoryPrivateLine className="icon" />
          <S.Label htmlFor="input-password">
            <S.Input
              type="password"
              id="input-password"
              name="password"
              value={ data.password }
              onChange={ ({ target }) => handleChange({ target }) }
              placeholder="Sua-senha"
              data-testid="common_register__input-password"
            />
          </S.Label>
        </S.InputContainer>
        <S.Button
          type="button"
          disabled={ btnDisabled }
          data-testid="common_register__button-register"
          onClick={ createUser }
        >
          CADASTRAR
        </S.Button>
      </S.Forms>
      <div data-testid="common_register__element-invalid_register">
        <ToastContainer />
      </div>

    </S.Wrapper>
  );
}

export default Register;
