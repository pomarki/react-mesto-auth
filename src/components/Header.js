import React from 'react';
function Header({userStatus}) {

  const statusButtonName = userStatus ? "Войти" : "Регистрация";
    return(
        <header className="header page__header">
        <div className="header__logo"></div>
        <p className="header__user-status">{statusButtonName}</p>
      </header>
    )
}
export default Header;