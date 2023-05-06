export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _checkResult(res) {
        if (res.ok) return res.json();
        return Promise.reject(`Ошибка - ${res.status}`);
    }

    getCards() {
        return fetch(this._url + '/cards', {
            headers: this._headers
        })
        .then((res) => this._checkResult(res));
    }

    addCard({ name, link }) {
        return fetch(this._url + '/cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, link }),
        })
        .then((res) => this._checkResult(res));
    }

    deleteCard(cardID) {
        return fetch(this._url + `/cards/${cardID}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then((res) => this._checkResult(res));
    }

    getProfile() {
        return fetch(this._url + '/users/me', {
            headers: this._headers
        })
        .then((res) => this._checkResult(res));
    }

    patchProfile({ name, about }) {
        return fetch(this._url + '/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, about }),
        })
        .then((res) => this._checkResult(res));
    }

    patchAvatar(avatar) {
        return fetch(this._url + '/users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(avatar),
        })
        .then((res) => this._checkResult(res));
    }

    addLike(cardID) {
        return fetch(this._url + `/cards/likes/${cardID}`, {
            method: 'PUT',
            headers: this._headers,
        })
        .then((res) => this._checkResult(res));
    }

    deleteLike(cardID) {
        return fetch(this._url + `/cards/likes/${cardID}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then((res) => this._checkResult(res));
    }
}