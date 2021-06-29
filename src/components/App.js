import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import PopupWithForm from "../components/PopupWithForm";
import ImagePopup from "../components/ImagePopup";
import api from "../utils/api";
import EditProfilePopup from "../components/EditProfilePopup";
import EditAvatarPopup from "../components/EditAvatarPopup";
import AddPlacePopup from "../components/AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setStateProfile] = useState(false);
  const [isAddPlacePopupOpen, setStateAdd] = useState(false);
  const [isEditAvatarPopupOpen, setStateAvatar] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({});
  const [initialCards, setCards] = useState([]);
  const [cardToDelete, setCardToDelete] = useState(null);

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
    setDeletePopupOpen(false);
  }
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userDate, cardsDate]) => {
        setCurrentUser(userDate);
        setCards(
          cardsDate.map((card) => ({
            name: card.name,
            link: card.link,
            likes: card.likes,
            cardId: card._id,
            userId: card.owner._id,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser(data) {
    api
      .changeUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(data) {
    api
      .sendNewAvatar(data.avatar)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    api
      .changeLikeCardStatus(card._id, !card.isLiked)
      .then((updatedCard) => {
        const newCards = initialCards.map((card) => {
          return card.cardId !== updatedCard._id
            ? card
            : {
                name: updatedCard.name,
                link: updatedCard.link,
                likes: updatedCard.likes,
                cardId: updatedCard._id,
                userId: updatedCard.owner._id,
              };
        });
        setCards(newCards);
      })

      .catch((err) => console.log(err));
  }

  function handleCardDelete() {
    api
      .removeCard(cardToDelete)
      .then(
        setCards((state) =>
          state.filter((item) => item.cardId != cardToDelete)
        ),
        closeAllPopups()
      )
      .catch((err) => console.log(err));
  }

  function handleDeleteClick(cardId) {
    setDeletePopupOpen(true);
    setCardToDelete(cardId);
  }

  function handleAddPlace(card) {
    api
      .sendNewCard(card)
      .then((data) => {
        const newCard = {
          name: data.name,
          link: data.link,
          likes: data.likes,
          cardId: data._id,
          userId: data.owner._id,
        };
        setCards([newCard, ...initialCards]);
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
          cards={initialCards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteClick}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          onAddPlace={handleAddPlace}
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm
          title="Вы уверены?"
          name="confirm"
          buttonTitle="Да"
          onClose={closeAllPopups}
          isOpen={isDeletePopupOpen}
          onSubmit={handleCardDelete}
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
