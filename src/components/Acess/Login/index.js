import * as React from "react";
import Container from "../../shared/Container";
import './login.css';
import { UseLogin } from "../../shared/hooks/useLogin";

export default function LoginComponent() {
    const [formLogin, setFormLogin] = React.useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormLogin((prevState) => ({
            ...prevState,
             [name]: value,
        }))
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        UseLogin(formLogin);
    };
    return (
        <Container>
            <form className="form-login" onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        Email:
                        <input type="email" placeholder="Email" value={formLogin.email} name="email" onChange={handleChange} />
                    </label>
                    <label>
                        Senha:
                        <input type="password" placeholder="" minLength={8} value={formLogin.password} name="password" onChange={handleChange} />
                    </label>
                    <button className="button-submit" type="submit">Login</button>
                </fieldset>
            </form>
        </Container>
    )
}