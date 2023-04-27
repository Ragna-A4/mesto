export default class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }

    async getCard() {
        const res = await fetch(this.url, {
            headers: this.headers
        });
        if (res.ok) {
            return res.json();
        }
        return await Promise.reject('Error');
    }

    createCard() {

    }

    deleteCard() {

    }

}