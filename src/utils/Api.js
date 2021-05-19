const handleResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(`Error: ${response.status}`);
  }
  return response.json();
};

class ApiOld {
  constructor({ address, token, groupID }) {
    this._address = address;
    this._token = token;
    this._groupID = groupID;
  }

  getInitialCards() {
    return fetch(`${this._address}/${this._groupID}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then(handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._address}/${this._groupID}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then(handleResponse);
  }

  changeUserInfo(data) {
    return fetch(`${this._address}/${this._groupID}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(handleResponse);
  }

  sendNewCard(data) {
    return fetch(`${this._address}/${this._groupID}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(handleResponse);
  }

  removeCard(id) {
    return fetch(`${this._address}/${this._groupID}/cards/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((response) =>
      response.ok
        ? Promise.resolve("success")
        : Promise.reject(`Ошибка ${response.status}`)
    );
  }

  likeCard(id) {
    return fetch(`${this._address}/${this._groupID}/cards/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(handleResponse);
  }

  dislikeCard(id) {
    return fetch(`${this._address}/${this._groupID}/cards/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(handleResponse);
  }
  sendNewAvatar(avatar) {
    return fetch(`${this._address}/${this._groupID}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
      }),
    }).then((response) =>
      response.ok
        ? Promise.resolve("success")
        : Promise.reject(`Ошибка ${response.status}`)
    );
  }
}

/* export default ApiOld; */

const Api = new ApiOld({
  address: "https://mesto.nomoreparties.co/v1",
  token: "a871f903-a7ec-46a6-99c3-83953182d0a9",
  groupID: "cohort-22",
});

export default Api;
