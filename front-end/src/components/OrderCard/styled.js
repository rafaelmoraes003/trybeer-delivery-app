import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #B1C2BE;
  border-radius: 5px;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.71);
  margin-bottom: 24px;
  padding: 6px 12px;
  width: 45%;
`;

export const ContainerLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #001813;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderNumber = styled.div`
  align-items: center;
  background: #F2FFFC;
  border-radius: 8px;
  display: flex;
  padding: 0 18px;
  width: 18%;  
`;

export const ButtonStatus = styled.button`
   border: none;
   border-radius: 8px;
   font-weight: bold;
   font-size: 26px;
   padding: 0 42px;
   width: 42%;
`;

export const DatePrice = styled.div``;

export const Date = styled.p`
  background: #EAF1EF;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px 16px;
`;

export const Price = styled.p`
  background: #EAF1EF;
  border-radius: 8px;
  font-weight: bold;
  padding: 8px 16px;
  text-align: center;
`;
