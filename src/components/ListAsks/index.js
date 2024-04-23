import * as React from "react";
import styled from "styled-components";

export default function ListAsksComponent({data}) {
    return (
        <div>
            {data.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                )
            )}
        </div>
    )
}