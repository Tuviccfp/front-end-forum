import * as React from 'react';
import { WarningCircle } from "@phosphor-icons/react";
import Container from "./shared/Container";

export default function ErrorPage() {
    return (
        <Container>
            <main style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <WarningCircle color={"white"} size={30}/>
                <p style={{color: "white"}}>Erro ao carregar a página, parace que não há nada aqui ou você não tem permissão para estar aqui. Tente novamente estando conectado em sua conta.</p>
            </main>
        </Container>
    )
}