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
  width: 25%;
}

th:nth-child(3) {
  font-weight: bold;
  font-size: 14px;
  width: 25%;
}

th:nth-child(4) {
  font-weight: bold;
  font-size: 14px;
  width: 25%;
}

th:nth-child(5) {
  font-weight: bold;
  width: 25%;
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

export const Button = styled.button`
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`;
