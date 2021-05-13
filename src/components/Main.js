import React from 'react';

function Main(props) {
    return(
        <main className="content">
        <section className="profile page__profile">
          <img className="profile__avatar" src="#" alt="фото пользователя" />
          <div className="profile__avatar-change-icon"></div>
          <div className="profile__info">
            <h1 className="profile__name"></h1>
            <button
              type="button"
              className="profile__edit-button link"
            ></button>
            <p className="profile__job"></p>
          </div>
          <button type="button" className="profile__add-button link"></button>
        </section>
        <section className="elements page__elements">
          <ul className="elements__list"></ul>
        </section>
      </main>
    )
}
export default Main;