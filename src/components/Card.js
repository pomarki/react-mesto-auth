import React from "react";

function Card({ link, name, likes, onCardClick }) {
  function handleClick() {
    onCardClick({ name: name, link: link });
  }

  return (
    <li className="elements__item">
      <div className="element">
        <button type="button" className="element__trash element__trash_visible"></button>
        <div
          className="element__img"
          onClick={handleClick}
          style={{
            backgroundImage: `url(${link})`,
            backgroundSize: "cover",
            ariaLabel: { name },
          }}
        ></div>
        <div className="element__info">
          <h2 className="element__info-place">{name}</h2>
          <div className="element__likes-container">
            <button
              type="button"
              className="element__info-heart element__info-heart_type_disabled"
            ></button>
            <span className="element__info-likes">{likes}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
