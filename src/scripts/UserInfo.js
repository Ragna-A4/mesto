export default class UserInfo {
    constructor({name, job, avatar}) {
        this._name = name;
        this._job = job;
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            user: this._name.textContent,
            job: this._job.textContent
        };
    }

    setUserInfo({user, job}) {
        this._name.textContent = user;
        this._job.textContent = job;
    }

    setUserAvatar({avatar}) {
        this._avatar.style.background = avatar;
    }
}

