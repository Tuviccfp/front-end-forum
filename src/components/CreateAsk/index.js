import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../shared/Container";
import './formAsk.css';
export default function CreateAskComponent() {
    const navigation = useNavigate();
    const [formAsk, setFormAsk] = React.useState({
        title: "",
        description: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormAsk({...formAsk, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formAsk);
    };
    return (
        <Container>
            <form onSubmit={handleSubmit} className="form-ask">
                <fieldset>
                    <label htmlFor="title">
                        Título:
                        <input type="text" name="title" id="title" value={formAsk.title} onChange={handleChange}/>
                    </label>
                    <label htmlFor="description">
                        Descrição:
                        <textarea name="description" id="description" cols="30" rows="10" value={formAsk.description} onChange={handleChange}></textarea>
                    </label>
                    <button className="button-submit" type="submit">Enviar</button>
                </fieldset>
            </form>
        </Container>
    )
}