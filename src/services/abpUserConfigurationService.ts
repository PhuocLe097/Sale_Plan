import http from './httpService';

class AbpUserConfigurationService {
  public async getAll() {
    const result = await http.get('inside-service'+'/AbpUserConfiguration/GetAll');
    return result;
  }
}

export default new AbpUserConfigurationService();
