import styled from 'styled-components';

export const Container = styled.header`
  background: #F2FFFC;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const OrderNumber = styled.div`
  width: 10%;
  p {
      color: #001813;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
  }
`;

export const OrderName = styled.div`
  width: 25%;
  p {
      color: #001813;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
  }
`;

export const Date = styled.div`
  width: 10%;
  p {
      color: #001813;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
  }
`;

export const Status = styled.div`
  border-radius: 5px;
  height: 100%;
  width: 18%;
  p {
      align-items: center;
      border-radius: 5px;
      color: #001813;
      justify-content: center;
      display: flex;
      font-weight: bold;
      font-size: 20px;
      margin: auto;   
  }
`;

export const Button = styled.button`
  background: #036B52;
  border: none;
  border-radius: 5px;
  color: #F2FFFC;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  padding: 8px;
  margin-left: 12px;
  width: 20%;
`;
