import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "../components/PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [value, setAvatar] = useState("");
  const avatarRef = React.useRef();

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleCangeAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar-form"
      buttonTitle="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__section">
        <input
          required
          className="popup__text-field"
          type="url"
          value={value}
          ref={avatarRef}
          onChange={handleCangeAvatar}
          placeholder="Ссылка на картинку"
          name="avatar-link"
          id="avatar-link"
        />
        <span className="popup__input-error" id="avatar-link-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

