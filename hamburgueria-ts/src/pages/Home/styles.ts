import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  margin-top: 50px;
`;

export const NavBar = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 5px black;
  padding: 20px;
  > svg {
    :hover {
      cursor: pointer;
    }
  }
`;

export const Products = styled.div`
  width: 80%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 5px black;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 80vh;
`;
