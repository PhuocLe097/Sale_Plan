import { action, makeAutoObservable, observable } from 'mobx';

import { GetCurrentLoginInformations } from '../services/session/dto/getCurrentLoginInformations';
import sessionService from '../services/session/sessionService';

const defaultCallback = () => { 


};
class SessionStore {
    // @observable currentLogin: GetCurrentLoginInformations = new GetCurrentLoginInformations();
    @observable currentLogin?: GetCurrentLoginInformations;

    // constructor() {
    //     makeAutoObservable(this);
    // }

    @action
    async getCurrentLoginInformations(callback: Function = defaultCallback) {
        let result = await sessionService.getCurrentLoginInformations();
        this.currentLogin = result;
        callback(result)
    }
}

export default SessionStore;
