import { action, makeAutoObservable, makeObservable, observable, runInAction } from 'mobx';
import * as commonHandler from '../services/commonHandler/commonHandler';
import SwaggerUtils from '../services/swaggerUtils';
import AppConsts from '../lib/appconst';

type SecurityDataType = {
  token: string;
  scheme: string;
  token_type: string;
  expires_in: number;
};

class commonStore {
  httpClient: commonHandler.Api<any>;
  @observable paymentTypeModel!: commonHandler.PaymentTypeModel[];

  constructor() {
    this.httpClient = SwaggerUtils.httpClient(AppConsts.commonPrefix, commonHandler.Api)
    makeAutoObservable(this, {
        paymentTypeModel: observable,
    });
  }

  @action async GetAllList(
    data:commonHandler.GetAllPaymentTypeModel
  ) {
    const paymentType = await this.httpClient.paymenttype.getallCreate(data);
    runInAction(() => {
      this.paymentTypeModel = (paymentType.data.data as any).items;
    });
  }
}

export default commonStore;