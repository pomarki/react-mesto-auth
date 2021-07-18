import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import * as auth from "../utils/auth";
import { useHistory } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [isRegisterDone, setRegisterDone] = useState(false);
  const [isInfoTooltipopen, setInfoTooltipopen] = useState(false);

  function handleCloseInfoTooltip() {
    const status = isRegisterDone;
    handleHistory(status);
    setInfoTooltipopen(false);
  }

  function openInfoTooltip(status) {
    setInfoTooltipopen(true);
    setRegisterDone(status);
  }

  function handleHistory(status) {
    status ? history.push("/sing-in") : history.push("/sing-up");
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    auth
      .register(password, email)
      .then((response) => {
        if (response) {
          openInfoTooltip(true);
        } else {
          openInfoTooltip(false);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Header userStatus={true} />
      <div className="authorization authorization_type_visible">
        <h2 className="authorization__title">Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            value={email}
            onChange={handleChangeEmail}
            className="authorization__input"
            placeholder="Email"
          />
          <input
            required
            type="password"
            value={password}
            onChange={handleChangePassword}
            className="authorization__input"
            placeholder="Пароль"
          />
          <button className="authorization__button" onClick={handleSubmit}>
            Зарегистрироваться
          </button>
        </form>
        <Link to="sing-in" className="authorization__subtitle link">
          Уже зарегистрированы? Войти
        </Link>
      </div>
      <InfoTooltip
        isOpen={isInfoTooltipopen}
        isLogged={isRegisterDone}
        onClose={handleCloseInfoTooltip}
      />
    </>
  );
}

export default Register;
