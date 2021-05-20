import React from "react";

function Card(props) {
  return (
    <li className="elements__item">
      <div className="element">
        <button type="button" className="element__trash"></button>
        {/* <img className="element__img" src="#" alt="#" /> */}
        <div className="element__img" style={{ backgroundImage: `url(${props.link})`, backgroundSize: "cover" }}></div>
        <div className="element__info">
          <h2 className="element__info-place">{props.title}</h2>
          <div className="element__likes-container">
            <button
              type="button"
              className="element__info-heart element__info-heart_type_disabled"
            ></button>
            <span className="element__info-likes">{props.likes}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
