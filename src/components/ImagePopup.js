import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <>
    {card && <section className="popup page__popup popup_theme_dark popup_opened">
      <figure className="popup__picture-container">
        <button
          type="button"
          className="popup__close-button link"
          onClick={onClose}
        ></button>
        <img className="popup__picture-img" src={card.link} />
        <figcaption className="popup__picture-subtitle">{card.name}</figcaption>
      </figure>
    </section>}
    </>
  );
}

export default ImagePopup;