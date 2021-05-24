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
            likes: item.likes.length,
            id: item._id,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="content">
      <section className="profile page__profile">
        <div
          style={{
            backgroundImage: `url(${currentUser.avatar})`,
            backgroundColor: "red",
          }}
          className="avatar-container"
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
          {initialCards.map(({ id, ...card }) => (
            <Card key={id} {...card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Main;
