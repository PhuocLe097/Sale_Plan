import { action, observable } from 'mobx';

import IsTenantAvaibleOutput from '../services/account/dto/isTenantAvailableOutput';

class AccountStore {
  @observable tenant: IsTenantAvaibleOutput = new IsTenantAvaibleOutput();

  @action
  public isTenantAvailable = async (tenancyName: string) => {
    var result = new IsTenantAvaibleOutput();
    result.state = 1;
    result.tenantId = 1;
    this.tenant = result;
  }
}

export default AccountStore;
