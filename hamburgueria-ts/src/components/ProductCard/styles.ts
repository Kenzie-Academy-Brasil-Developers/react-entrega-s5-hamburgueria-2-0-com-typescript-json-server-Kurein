import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  border: 2px solid #e0e0e0;
  border-radius: 15px;
  margin-top: 15px;
  padding: 10px;

  @media only screen and (min-width: 768px) {
    width: 40%;
  }
  @media only screen and (min-width: 1440px) {
    width: 25%;
  }
  @media only screen and (min-width: 2560px) {
    width: 20%;
  }

  :hover {
    border-color: #27ae60;
    > button {
      background-color: #27ae60;
    }
  }

  :last-child {
    margin-bottom: 10px;
  }

  > img {
    width: 100%;
  }

  > button {
    width: 60%;
    padding: 5px;
    border: none;
    background-color: #828282;
    color: #fff;
    :hover {
      cursor: pointer;
    }
    :active {
      opacity: 0.9;
    }
  }
`;
