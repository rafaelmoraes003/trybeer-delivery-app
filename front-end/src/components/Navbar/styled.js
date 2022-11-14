import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #036B52;
  height: 55px;
`;

export const ProductsButton = styled.button`
  background: #2FC18C;
  border: none;
  color: #001813;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  width: 332px;
  &:hover {
    background: #88A580;
  }
  
`;

export const OrdersButton = styled.button`
  background: #036B52;
  border: none;
  color: #F2FFFC;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  width: 332px;
  &:hover {
    background: #88A580;
  }
`;

export const User = styled.div`
  align-items: center;
  display: flex;
  background: #421981;
  color: #F2FFFC;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  margin-left: 30%;
  width: 732px;
`;

export const Logout = styled.button`
  background: #056CF9;
  border: none;
  color: #F2FFFC;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  width: 180px;
`;
