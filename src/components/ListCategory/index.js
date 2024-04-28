import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ListCategoryComponent({props}) {
    const navigation = useNavigate()
    const[navigateId, setNavigateId] = React.useState('');
    
    const handleChange = (e) => {
        const {value} = e.target;
        setNavigateId(value);
    }
    
    const handleNavigate = (e) => {
        e.preventDefault();
        navigation(`/category/${navigateId}`);
    }

    return (
        <div>
            <select value={navigateId} onChange={handleChange}>
                {props.map(() => (
                    <option key={props.id} value={props.id}>{props.name}</option>
                ))}
            </select>
            <button type="submit" onClick={handleNavigate}>Enviar</button>
        </div>
    )
}