import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #828282;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 60vw;
  max-width: 500px;
  height: 80vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  opacity: 1;
  left: 50vw;
  transform: translateX(-50%);
  > svg {
    margin-top: 5%;
    margin-left: 90%;
    :hover {
      cursor: pointer;
    }
  }
`;

export const PoductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: 80vh;
  :last-child {
    margin-bottom: 10px;
  }
`;
