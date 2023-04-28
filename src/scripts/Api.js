export default class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка - ${res.status}`);
    }

    getCards() {
        fetch(`${this.url}/cards`, {
            headers: this.headers
        })
        .then((res) => this._checkResult(res));
    }

    addCard({ name, link }) {
        return fetch(`${this.url}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({ name, link }),
        })
        .then((res) => this._checkResult(res));
    }

    deleteCard({cardId}) {
        return fetch(`${this.url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then((res) => this._checkResult(res));
    }

    getProfile() {
        fetch(`${this.url}/users/me`, {
            headers: this.headers
        })
        .then((res) => this._checkResult(res));
    }

    patchProfile({ name, about }) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({ name, about }),
        })
        .then((res) => this._checkResult(res));
    }

    patchAvatar({avatar}) {
        return fetch(`${this.url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({ avatar }),
        })
        .then((res) => this._checkResult(res));
    }

    addLike({cardId}) {
        return fetch(`${this.url}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this.headers,
        })
        .then((res) => this._checkResult(res));
    }

    deleteLike({cardId}) {
        return fetch(`${this.url}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then((res) => this._checkResult(res));
    }

}