import { House } from "@phosphor-icons/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
        border: none;
        width: 100px;
        padding: 1%;
        background-color: snow;
        cursor: pointer;
      }
  }
`;

export default function Nav() {
  const navigation = useNavigate();
    return (
      <NavStyle className="nav-home">
        <House onClick={() => navigation("/")} size={30} style={{cursor: "pointer"}}/>
        <div>
            <button onClick={() => navigation("/login")}>Entrar</button>
            <button onClick={() => navigation("/register")}>Cadastrar</button>
        </div>
      </NavStyle>
    );
}