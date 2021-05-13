import React from 'react';
import "../index.css";
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />
      <section className="popup page__popup" id="popup-profile">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button link"
            aria-label="Закрыть окно"
          ></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            name="user-info"
            className="popup__form"
            autocomplete="off"
            novalidate
          >
            <div className="popup__section">
              <input
                required
                minlength="2"
                maxlength="40"
                className="popup__text-field"
                type="text"
                placeholder="Ваше имя"
                name="user-name"
                id="user-name"
              />
              <span className="popup__input-error" id="user-name-error"></span>
            </div>
            <div className="popup__section">
              <input
                required
                minlength="2"
                maxlength="200"
                className="popup__text-field"
                type="text"
                placeholder="Ваша профессия"
                name="user-job"
                id="user-job"
              />
              <span className="popup__input-error" id="user-job-error"></span>
            </div>
            <button
              type="submit"
              className="popup__save-button"
              id="profile-button"
            >
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <section className="popup page__popup" id="popup-add-picture">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button link"
            aria-label="Закрыть окно"
          ></button>
          <h2 className="popup__title">Новое место</h2>
          <form
            name="add-picture"
            className="popup__form"
            autocomplete="off"
            novalidate
          >
            <div className="popup__section">
              <input
                required
                minlength="2"
                maxlength="30"
                className="popup__text-field"
                type="text"
                placeholder="Название"
                name="picture-name"
                id="picture-name"
              />
              <span className="popup__input-error" id="picture-name-error"></span>
            </div>
            <div className="popup__section">
              <input
                required
                className="popup__text-field"
                type="url"
                placeholder="Ссылка на картинку"
                name="picture-link"
                id="picture-link"
              />
              <span className="popup__input-error" id="picture-link-error"></span>
            </div>
            <button
              type="submit"
              className="popup__save-button popup__save-button_type_disabled"
              id="picture-button"
            >
              Создать
            </button>
          </form>
        </div>
      </section>
      <section
        className="popup page__popup popup_theme_dark"
        id="popup-full-picture"
      >
        <figure className="popup__picture-container">
          <button type="button" className="popup__close-button link"></button>
          <img className="popup__picture-img" src="#" alt="#" />
          <figcaption className="popup__picture-subtitle"></figcaption>
        </figure>
      </section>
      <section className="popup page__popup" id="popup-confirm">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button link"
            aria-label="Закрыть окно"
          ></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <button
            type="button"
            className="popup__save-button"
            id="popup-confirm-button"
          >
            Да
          </button>
        </div>
      </section>
      <section className="popup page__popup" id="popup-avatar-form">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button link"
            aria-label="Закрыть окно"
          ></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            name="upg-avatar"
            className="popup__form"
            autocomplete="off"
            novalidate
          >
            <div className="popup__section">
              <input
                required
                className="popup__text-field"
                type="url"
                placeholder="Ссылка на картинку"
                name="avatar-link"
                id="avatar-link"
              />
              <span className="popup__input-error" id="avatar-link-error"></span>
            </div>
            <button
              type="submit"
              className="popup__save-button popup__save-button_type_disabled"
              id="avatar-buttom"
            >
              Сохранить
            </button>
          </form>
        </div>
      </section>
      <template id="template__element">
        <li className="elements__item">
          <div className="element">
            <button type="button" className="element__trash"></button>
            <img className="element__img" src="#" alt="#" />
            <div className="element__info">
              <h2 className="element__info-place"></h2>
              <div className="element__likes-container">
                <button
                  type="button"
                  className="element__info-heart element__info-heart_type_disabled"
                ></button>
                <span className="element__info-likes"></span>
              </div>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
