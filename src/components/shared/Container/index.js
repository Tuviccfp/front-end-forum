import * as React from "react";
import styled from "styled-components";
import { House } from "@phosphor-icons/react";
import Nav from "./Nav";
import NavPrincipalComponent from "./NavPrincipal";

const ContainerStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 50px;
  height: 100vh;
  width: 100vw;
  background-color: #171412;
`;



export default function Container({ children }) {
  return (
    <>
      <Nav />
      <ContainerStyle>
        <NavPrincipalComponent />
        {children}
      </ContainerStyle>
    </>
  );
}
