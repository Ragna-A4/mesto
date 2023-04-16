export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._name = nameSelector;
        this._job = jobSelector;
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

}

