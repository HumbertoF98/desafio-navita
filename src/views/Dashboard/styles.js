import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  h1 {
    color: #5a5c69;
    font-weight: 600;
  }

  button {
  }
  button:disabled,
  button[disabled] {
    border: none;
    background-color: #4e73df;
  }
`;

export const ContainerTable = styled.div`
  border: 1px solid #e3e6f0;
  box-shadow: 3px 3px 5px rgba(58, 59, 69, 0.15);
  background: #fff;
  width: 100%;
  margin-top: 30px;
  border-radius: 5px;
  button:focus {
    p {
      color: #1cc88a;
    }
  }
  /*
css for tables
 */
  table {
    padding: 30px 20px 20px 20px;
    width: 100%;
    tr:nth-child(n + 2) {
      border-top: 1px solid #e3e6f0;
    }
    tr:hover {
      background: #f5f5f5;
    }
    th {
      border-top: 1px solid #e3e6f0;
      border-bottom: 2px solid #e3e6f0;
      padding: 15px 15px 15px 10px;
      color: #5a5c69;
      font-weight: bold;
      text-align: left;
      flex: 1;
    }
    tr {
      align-items: center;
      display: flex;
      flex-direction: row;
    }
    td {
      width: 100%;
      padding: 10px;
      color: #5a5c69;
      font-weight: 600;
      text-align: left;
      flex: 1;
      opacity: 0.9;
      height: 70px;
      align-items: center;
      display: flex;
    }
  }
`;

export const HeaderContainerTable = styled.div`
  background: #f8f9fc;
  width: 100%;
  height: 60px;
  padding: 20px;
  border: 1px solid #e3e6f0;

  h4 {
    color: #4e73df;
  }
`;
