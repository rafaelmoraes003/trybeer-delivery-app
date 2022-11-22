import styled from 'styled-components';

export const Text = styled.h1`
  margin: 2% 4%;
`;

export const Form = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin: 0 4%;
  padding: 26px 18px;

  input {
    border: 1px solid #001813;
    margin: 0px 10px 0px 0px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 25%;
`;

export const Select = styled.select`
  border-radius: 5px;
  padding: 14px;
  margin-top: 4px;
`;

export const Button = styled.button`
align-items: center;
  background: green;
  border-radius: 5px;
  color: white;
  display: flex;
  font-size: 18px;
  height: 50px;
  justify-content: center;
  padding: 18px;
`;
