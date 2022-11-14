import styled from 'styled-components';

export const Container = styled.main`
  margin: 4%;  
`;

export const Form = styled.form`
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  justify-content: space-between;
  padding: 32px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  width: 26%;
`;

export const Select = styled.select`
  border-radius: 8px;
  margin-top: 4px;
  padding: 10px;
`;

export const InputAdddres = styled.div`
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  height: 100px;
  width: 480px;
`;

export const InputNumber = styled.div`
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  height: 100px;
`;

export const Button = styled.button`
  align-items: center;
  justify-content: center;
  background: #036B52;
  border: none;
  border-radius: 8px;
  color: #F2FFFC;
  display: flex;
  font-weight: bold;
  font-size: 18px;
  margin-top: 24px;
  margin: 20px auto;
  padding: 16px 64px;
  width: 400px;
`;
