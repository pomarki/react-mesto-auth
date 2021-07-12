import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";

function Register({ onRegisterUser }) {
const [email, setEmail] = useState('');
/* const [] */


  return (
    <>
      <Header userStatus={true}/>
      <div className="authorization authorization_type_visible">
        <h2 className="authorization__title">Регистрация</h2>
        <form>
          <input className="authorization__input" placeholder="Email" />
          <input className="authorization__input" placeholder="Пароль" />
          <button className="authorization__button" onClick={onRegisterUser}>
            Зарегистрироваться
          </button>
        </form>
        <a href="#" className="authorization__subtitle link">
          Уже зарегистрированы? Войти
        </a>
      </div>
    </>
  );
}

export default Register;
