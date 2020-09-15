import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  label {
    display: none;
  }
  @media (max-width: 700px) {
    padding-bottom: 30px;
  }
  select {
    @media (max-width: 700px) {
      width: 284px;
    }
  }
  h2 {
    text-align: center;
    font-weight: 600;
    margin-top: 10px;
    max-width: 600px;
    @media (max-width: 700px) {
      margin-top: 30px;
    }
  }
  h4 {
    text-align: center;
    font-weight: normal;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 600px;
    text-align: justify;
    margin: 20px;
  }
  h5 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 600px;
    text-align: justify;
    margin: 10px;
    @media (max-width: 700px) {
      margin-bottom: 0;
      margin-top: 5px;
      margin: 10px;
    }
  }
  input {
    margin-top: 10px;
    @media (max-width: 700px) {
      margin-top: 20px;
    }
  }
  button {
    margin-top: 10px;
    @media (max-width: 700px) {
      width: 284px;
      margin-top: 20px;
    }
  }
  button:disabled,
  button[disabled] {
    border: none;
    background-color: #4e73df;
  }
`;
