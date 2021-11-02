import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 2px solid #27ae60;
  border-radius: 5px;
  background-color: wheat;
  margin-top: 10px;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  > img {
    width: 40%;
  }
`;

export const SubContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > svg {
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  > svg {
    cursor: pointer;
  }
`;
