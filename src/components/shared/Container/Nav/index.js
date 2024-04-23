import { House } from "@phosphor-icons/react";
import styled from "styled-components";

const NavStyle = styled.nav`
  background-color: tomato;
  width: 100%;
  height: 5%;
  padding: 0.5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  & div {
    box-sizing: border-box;
    &  button {
        margin-left: 10px;
        box-sizing: border-box;
        border-radius: 5px;
        width: 100px;
        padding: 1%;
        background-color: snow;
        cursor: pointer;
      }
  }
`;

export default function Nav() {
    return (
      <NavStyle className="nav-home">
        <House size={30} />
        <div>
            <button>Entrar</button>
            <button>Cadastrar</button>
        </div>
      </NavStyle>
    );
}