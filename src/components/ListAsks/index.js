import * as React from "react";
import styled from "styled-components";

const ModelListAsks = styled.div`
    background-color: snow;
    text-align: center;
    width: 40%;
    padding: 10px;
    border-radius: 20px;
    box-sizing: border-box;
    &:hover {
        padding: 40px;
        transition: padding ease-in-out 1s;
    }
`
export default function ListAsksComponent({ data }) {
  return (
    <ModelListAsks>
      <div key={data.id}>
        <h2>Título</h2>
        <h3 style={{textTransform: "uppercase"}}>{data.title}</h3>
        <p style={{margin: 30}}>{data.bodyAsk}</p>
        <p>Publicado por: <br/>{data.nameUser} </p>
      </div>
    </ModelListAsks>
  );
}
