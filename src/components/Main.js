import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "../components/Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [initialCards, setCards] = useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(
          data.map((item) => ({
            name: item.name,
            link: item.link,
            likes: item.likes,
            cardId: item._id,
            userId: item.owner._id,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    let isLiked = card.likes.some((item) => item._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
        isLiked = !isLiked;
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(cardId) {
    api
      .removeCard(cardId)
      .then(setCards((state) => state.filter((item) => item.cardId != cardId)))
      .catch((err) => console.log(err));
  }

  return (
    <div className="content">
      <section className="profile page__profile">
        <div
          style={{
            backgroundImage: `url(${currentUser.avatar})`,
            backgroundColor: "red",
          }}
          className="profile__avatar"
        ></div>
        <div
          onClick={onEditAvatar}
          className="profile__avatar-change-icon"
        ></div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            onClick={onEditProfile}
            type="button"
            className="profile__edit-button link"
          ></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button link"
        ></button>
      </section>
      <section className="elements page__elements">
        <ul className="elements__list">
          {initialCards.map(({ cardId, ...card }) => (
            <Card
              key={cardId}
              {...card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cardId={cardId}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Main;
