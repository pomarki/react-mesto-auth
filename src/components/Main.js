import React, { useEffect, useState } from "react";
import Api from "../utils/Api.js";
import Card from "../components/Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setDescription] = useState("");
  const [userAvatar, setAvatar] = useState("");
  const [initialCards, setCards] = useState([]);

  useEffect(() => {
    Api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setDescription(data.about);
        setAvatar(data.avatar);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Api.getInitialCards()
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
            backgroundImage: `url(${userAvatar})`,
            backgroundColor: "red",
          }}
          className="avatar-container"
        ></div>
        <div
          onClick={onEditAvatar}
          className="profile__avatar-change-icon"
        ></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={onEditProfile}
            type="button"
            className="profile__edit-button link"
          ></button>
          <p className="profile__job">{userDescription}</p>
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
