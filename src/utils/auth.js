export const BASE_URL = "https://auth.nomoreparties.co";

function checkRequestResult(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`!error: ${response.status}`);
}

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then(checkRequestResult)
    .catch((err) => console.log(`error: ${err}`));
};


export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then(checkRequestResult)
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data.token;
      } else {
        return;
      }
    })
    .catch((err) => console.log(`error: ${err}`));
};
