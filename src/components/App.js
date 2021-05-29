import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";
import api from "../utils/api";
import EditProfilePopup from "../components/EditProfilePopup";
import EditAvatarPopup from "../components/EditAvatarPopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setStateProfile] = useState(false);
  const [isAddPlacePopupOpen, setStateAdd] = useState(false);
  const [isEditAvatarPopupOpen, setStateAvatar] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({});

  function handleCardClick(chosenCard) {
    setSelectedCard(chosenCard);
  }

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
    setSelectedCard(undefined);
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser(data) {
    console.log(data);
    api
      .changeUserInfo(data.avatar)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar (data) {
    api.sendNewAvatar(data.avatar) 
    .then((newData) => {
      setCurrentUser(newData);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          title="Новое место"
          name="add-picture"
          buttonTitle="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <>
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
              <span
                className="popup__input-error"
                id="picture-name-error"
              ></span>
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
              <span
                className="popup__input-error"
                id="picture-link-error"
              ></span>
            </div>
          </>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm
          title="Вы уверены?"
          name="confirm"
          buttonTitle="Да"
          isOpen={false}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
