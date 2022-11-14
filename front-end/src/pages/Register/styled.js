import styled from 'styled-components';

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 5%;
  width: 50%;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Forms = styled.form`
  background: #E5E5E5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 425px;
  height: 444px;
  left: 750px;
  padding: 12px 24px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  width: 90%;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  background-color: #fff;
  border-radius: 8px;
  width: 90%;

  .icon {
    font-size: 30px;
    margin-left: 10px;
    color: grey;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 8px;
  padding: 16px;
  margin-top: 6px;
  outline-width: 0;
  width: 90%;
`;

export const Button = styled.button`
  background: #036B52;
  border-radius: 8px;
  color: white;
  display: flex;
  font-size: 18px;
  justify-content: center;
  margin: 50px auto;
  padding: 18px;
  width: 90%;
`;
