import React from 'react';
import { Link } from 'react-router-dom';

function Header({userStatus}) {

  const statusButtonName = userStatus ? "Войти" : "Регистрация";
  const statusUserLink = userStatus ? "sing-in" : "sing-up"
    return(
        <header className="header page__header">
        <div className="header__logo"></div>
        <Link to={statusUserLink} className="header__user-status link">{statusButtonName}</Link>
      </header>
    )
}
export default Header;