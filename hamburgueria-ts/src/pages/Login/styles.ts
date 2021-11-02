import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 50vh;
  width: 50vw;
  position: absolute;
  transform: translate(25vw, 25vh);
  border-radius: 50px;
  box-shadow: 10px 10px black;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 25%;
    > input {
      width: 80%;
    }
    > button {
      width: 50%;
      border: none;
      background-color: #828282;
      color: white;
    }
  }
  > button {
    height: 10%;
    width: 60%;
    margin-top: 50px;
    border: none;
    background-color: #27ae60;
    color: #fff;
    border-radius: 15px;
    :hover {
      cursor: pointer;
    }
  }
`;
