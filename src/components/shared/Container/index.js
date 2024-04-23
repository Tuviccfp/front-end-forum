import * as React from "react";
import styled from "styled-components";
import { House } from "@phosphor-icons/react";
import Nav from "./Nav";

const ContainerStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #171412;
  & .nav-home {
    background-color: tomato;
    width: 100%;
    height: 20%;
  }
`;



export default function Container({ children }) {
  return (
    <>
      <Nav />
      <ContainerStyle>{children}</ContainerStyle>
    </>
  );
}
