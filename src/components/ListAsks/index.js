import * as React from "react";
import styled from "styled-components";

const ModelListAsks = styled.div`
    background-color: snow;
    text-align: center;
    padding: 10px;
    margin: 10px 50px 50px 50px;
    width: auto;
    border-radius: 20px;
    box-sizing: border-box;
    transition: padding ease-in-out 1s, width ease-in-out 1000s;
    &:hover {
        padding: 40px;
        width: 650px;
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
