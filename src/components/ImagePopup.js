import React from "react";

function ImagePopup(props) {
    return(
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
    )
}

export default ImagePopup;