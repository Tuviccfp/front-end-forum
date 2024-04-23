import * as React from "react";
import styled from "styled-components";
import { Home } from "@phosphor-icons/react";

const ContainerStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding: 20px;
    background-color: #171412;
    & nav {
        width: 100%;
        height: 20%;
    }
`
export default function Container({children}) {
    return (
        <ContainerStyle>
            <nav>
                <Home size={40} />
            </nav>
            {children}    
        </ContainerStyle>
    )
}