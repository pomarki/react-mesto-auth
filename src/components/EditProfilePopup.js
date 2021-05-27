import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleCangeName(e) {
      setName(e.target.value);
  }
  function handleCangeDescription(e) {
      setDescription(e.target.value);
  }

  return (
    <form
      name="user-info"
      className="popup__form"
      autoComplete="off"
      noValidate
    >
      <div className="popup__section">
        <input
          required
          minLength="2"
          maxLength="40"
          className="popup__text-field"
          type="text"
          value={name}
          onChange={handleCangeName}
          placeholder="Ваше имя"
          name="user-name"
          id="user-name"
        />
        <span className="popup__input-error" id="user-name-error"></span>
      </div>
      <div className="popup__section">
        <input
          required
          minLength="2"
          maxLength="200"
          className="popup__text-field"
          value={description}
          onChange={handleCangeDescription}
          type="text"
          placeholder="Ваша профессия"
          name="user-job"
          id="user-job"
        />
        <span className="popup__input-error" id="user-job-error"></span>
      </div>
    </form>
  );
}

export default EditProfilePopup;
