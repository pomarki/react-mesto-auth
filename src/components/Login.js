import React from "react";
import Header from "./Header";

function Login() {
  return (
    <>
      <Header userStatus={false} />
      <div className="authorization authorization_type_visible">
        <h2 className="authorization__title">Вход</h2>
        <form>
          <input type="email" className="authorization__input" placeholder="Email" />
          <input /* type="password" */ className="authorization__input" placeholder="Пароль" />
          <button className="authorization__button">
            Войти
          </button>
        </form>
        
      </div>
    </>
  );
}

export default Login;