import React from "react";

function Register({isVisible, onRegisterUser}) {
  return (
    <div className={`authorization ${isVisible && "authorization_visible"}`}>
      <h2 className="authorization__title">Регистрация</h2>
      <form>
          <input className="authorization__input" placeholder="Email" />
          <input className="authorization__input" placeholder="Пароль" />
          <button className="authorization__button" onClick={onRegisterUser}>Зарегистрироваться</button>
      </form>
      <a href="#" className="authorization__subtitle link">Уже зарегистрированы? Войти</a>
    </div>
  );
}

export default Register;
