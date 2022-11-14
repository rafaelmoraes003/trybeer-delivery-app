import styled from 'styled-components';

export const Container = styled.section`
  border: 3px solid #EAF1EF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 8px;
  width: 22%;

  img {
    max-width: 200px;
    max-height: 200px;
    width: auto;
    height: auto;
  }
`;

export const Price = styled.p`
  background: #EAF1EF;
  display: flex;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 18px; 
  position: absolute;
`;

export const Image = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const WrapperItem = styled.div`
  display: flex;
  justify-content: center;
  background: #EAF1EF;
  padding: 12px 0;
  width: 100%;
`;

export const IncrementButton = styled.button`
  background: #036B52;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 8px 16px;
`;

export const DecrementButton = styled.button`
  background: #036B52;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  padding: 8px 16px;
`;

export const Label = styled.label`
  align-items: center;
  display: flex;
  padding: 8px 0;
  width: 28px;
`;

export const Input = styled.input`
  border: none;
  font-weight: bold;
  font-size: 18px;
  height: 24px;
  text-align: center;
  width: 28px;
`;
