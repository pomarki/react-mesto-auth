import React, { useEffect, useState } from "react";
import Api from "../utils/Api.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setDescription] = useState("");
  const [userAvatar, setAvatar] = useState("");
  useEffect(() => {
    Api.getUserInfo().then((data) => {
      setUserName(data.name);
      setDescription(data.about);
      setAvatar(data.avatar);
    });
  }, []);

  return (
    <div className="content">
      <section className="profile page__profile">
        <div style={{ backgroundImage: `url(${userAvatar})` }} className="avatar-container">
          {/* <img className="profile__avatar" src="#" alt="фото пользователя" /> */}
        </div>
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
        <ul className="elements__list"></ul>
      </section>
    </div>
  );
}

export default Main;
