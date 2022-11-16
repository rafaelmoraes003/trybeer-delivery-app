import styled from 'styled-components';

export const Main = styled.main`
  margin: 4%;
`;

export const Table = styled.table`
  border: 1px solid #B1C2BE;
  border-radius: 8px;
  padding: 32px;
  margin: auto;
  width: 100%;
`;

export const TableRow = styled.tr`
  height: 28px;

th:nth-child(1) {
  font-weight: bold;
  font-size: 14px;
  width: 26px;
}

th:nth-child(2) {
  font-weight: bold;
  font-size: 14px;
  width: 68%;
}

th:nth-child(3) {
  font-weight: bold;
  font-size: 14px;
  width: 10%;
}

th:nth-child(4) {
  font-weight: bold;
  font-size: 14px;
  width: 10%;
}

th:nth-child(5) {
  font-weight: bold;
  width: 10%;
}

td:nth-child(1) {
  background: #2FC18C;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
}

td:nth-child(2) {
  background: #B1C2BE;
}

td:nth-child(3) {
  background: #036B52;
  color: #F2FFFC;
  font-weight: bold;
  text-align: center;
}

td:nth-child(4) {
  background: #421981;
  color: #F2FFFC;
  font-weight: bold;
  text-align: center;
}

td:nth-child(5) {
  background: #056CF9;
  color: #F2FFFC;
  font-weight: bold;
  text-align: center;
}
`;

export const PriceTotal = styled.p`
  background: #036B52;
  border-radius: 8px;
  box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.71);
  color: #F2FFFC;
  font-weight: bold;
  font-size: 26px;
  padding: 8px 26px;
  margin: 10px 0;
  margin-left: 65%;
  width: 250px;
  text-align: center;
`;
