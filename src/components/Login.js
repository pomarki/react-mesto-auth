import React, { useState } from "react";
import Header from "./Header";
import * as auth from "../utils/auth";
import { useHistory } from "react-router-dom";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  function handleEnterEmail(e) {
    setEmail(e.target.value);
  }
  function handleEnterPassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    auth
      .authorize(password, email)
      .then((token) => {
        if (token) {
          setEmail("");
          setPassword("");
        }
        history.push("/");
        handleLogin();
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Header userStatus={false} />
      <div className="authorization authorization_type_visible">
        <h2 className="authorization__title">Вход</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="authorization__input"
            placeholder="Email"
            value={email}
            onChange={handleEnterEmail}
          />
          <input
            type="password"
            className="authorization__input"
            placeholder="Пароль"
            value={password}
            onChange={handleEnterPassword}
          />
          <button onClick={handleSubmit} className="authorization__button">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
