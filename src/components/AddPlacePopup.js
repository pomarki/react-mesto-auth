import React, { useState } from "react";
import PopupWithForm from "../components/PopupWithForm";

function AddPlacePopup({ onClose, isOpen, onAddPlace }) {
  const [pictureLink, setPictureLink] = useState("");
  const [name, setPictureName] = useState("");

  function handlePictureLink(e) {
    setPictureLink(e.target.value);
  }
  function handlePiktureName(e) {
    setPictureName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link: pictureLink,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-picture"
      buttonTitle="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <>
        <div className="popup__section">
          <input
            required
            minLength="2"
            maxLength="30"
            className="popup__text-field"
            type="text"
            onChange={handlePiktureName}
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
            onChange={handlePictureLink}
            type="url"
            placeholder="Ссылка на картинку"
            name="picture-link"
            id="picture-link"
          />
          <span className="popup__input-error" id="picture-link-error"></span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;