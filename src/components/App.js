import React from "react";
import "../index.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setStateProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setStateAdd] = React.useState(false);
  const [isEditAvatarPopupOpen, setStateAvatar] = React.useState(false);

  function handleEditAvatarClick() {
    setStateAvatar(true);
  }
  function handleEditProfileClick() {
    setStateProfile(true);
  }
  function handleAddPlaceClick() {
    setStateAdd(true);
  }

  function closeAllPopups() {
    setStateAvatar(false);
    setStateProfile(false);
    setStateAdd(false);
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        buttonTitle="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <form
          name="user-info"
          className="popup__form"
          autoComplete="off"
          noValidate
        >
          <div className="popup__section">
            <input
              required
              minLength="2"
              maxLength="40"
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
              minLength="2"
              maxLength="200"
              className="popup__text-field"
              type="text"
              placeholder="Ваша профессия"
              name="user-job"
              id="user-job"
            />
            <span className="popup__input-error" id="user-job-error"></span>
          </div>
        </form>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add-picture"
        buttonTitle="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <form
          name="add-picture"
          className="popup__form"
          autoComplete="off"
          noValidate
        >
          <div className="popup__section">
            <input
              required
              minLength="2"
              maxLength="30"
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
        </form>
      </PopupWithForm>

      <ImagePopup isOpen={false} />

      <PopupWithForm
        title="Вы уверены?"
        name="confirm"
        buttonTitle="Да"
        isOpen={false}
      />

      <PopupWithForm
        title="Обновить аватар"
        name="vatar-form"
        buttonTitle="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        
      >
        <form
          name="upg-avatar"
          className="popup__form"
          autoComplete="off"
          noValidate
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
        </form>
      </PopupWithForm>

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
    </div>
  );
}

export default App;
