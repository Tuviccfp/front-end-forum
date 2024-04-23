import * as React from "react";
import Container from "../../shared/Container";
import "../Login/login.css";

export default function RegisterComponent() {
  const [formRegister, setFormRegister] = React.useState({
    email: "",
    password: "",
    terms: "",
    over18: "",
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormRegister({ ...formRegister, [name]: value });
  };
  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormRegister({ ...formRegister, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRegister);
  };

  return (
    <Container>
      <form className="form-login" onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Email:
            <input
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
              value={formRegister.email}
            />
          </label>
          <label>
            Senha:
            <input
              onChange={handleChange}
              type="password"
              placeholder=""
              name="password"
              value={formRegister.password}
              minLength={8}
            />
          </label>
          <label>
            Confirmar Senha:
            <input type="password" placeholder="" minLength={8} />
          </label>
          <span className="checkbox-box">
            <input
              onChange={handleChangeCheckbox}
              type="checkbox"
              placeholder=""
              name="terms"
              value={formRegister.terms}
            />
            <p>Concordo com os termos e condições</p>
          </span>
          <span className="checkbox-box">
            <input
              onChange={handleChangeCheckbox}
              type="checkbox"
              placeholder=""
              name="over18"
              value={formRegister.over18}
            />
            <p>Você confirma ter mais de 18 anos?</p>
          </span>
          <button className="button-submit" type="submit">
            Cadastrar
          </button>
        </fieldset>
      </form>
    </Container>
  );
}
