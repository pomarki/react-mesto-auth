import React, { useState } from "react";
import Header from "./Header";
import * as Auth from "./Auth";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEnterEmail(e) {
    setEmail(e.target.value);
  }
  function handleEnterPassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let userDate = { password: password, email: email };
    Auth.login(password, email);
    
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
            type="password" className="authorization__input"
            placeholder="Пароль"
            value={password}
            onChange={handleEnterPassword}
          />
          <button onClick={handleSubmit} className="authorization__button">Войти</button>
        </form>
      </div>
    </>
  );
}

export default Login;
