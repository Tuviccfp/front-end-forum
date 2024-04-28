import styled from "styled-components"
import { useNavigate } from "react-router-dom"
const NavPrincipal = styled.nav`
    width: 40%;
    background-color: tomato;
    border-radius: 10px;
    border: none;
    box-sizing: border-box;
    & ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-inline-start: 0px;
        box-sizing: border-box;
        & li {
            gap: 10px;
            color: white;
            text-decoration: none;
            cursor: pointer;
        }
        & li:hover {
            color: #171412;
        }
    }
`
export default function NavPrincipalComponent() {
    const navigation = useNavigate();
    return (
        <NavPrincipal>
            <ul>
                <li onClick={() => navigation("/create-ask")}>Criar Pergunta</li>
                <li>Listar todas as perguntas</li>
                <li>Filtro</li>
                <li>Perfil</li>
            </ul>
        </NavPrincipal>
    )   
}