import { action, makeAutoObservable, makeObservable, observable, runInAction } from 'mobx';
import * as customerHandler from '../services/customerHandler/customerHandler';
import SwaggerUtils from '../services/swaggerUtils';
import AppConsts from '../lib/appconst';

type SecurityDataType = {
  token: string;
  scheme: string;
  token_type: string;
  expires_in: number;
};

class customerStore {
  httpClient: customerHandler.Api<any>;
  @observable partyModel!: customerHandler.PartyModel[];

  constructor() {
    this.httpClient = SwaggerUtils.httpClient(AppConsts.customerPrefix, customerHandler.Api);
    makeAutoObservable(this, {
      partyModel: observable,
    });
  }

  @action async GetAllList(
    data:customerHandler.GetAllPartyModel
  ) {
    const party = await this.httpClient.party.getallCreate(data);
    runInAction(() => {
      this.partyModel = (party.data.data as any).items;
    });
  }
}

export default customerStore;
