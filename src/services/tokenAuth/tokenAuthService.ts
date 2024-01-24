import { AuthenticationModel } from './dto/authenticationModel';
import { AuthenticationResultModel, AuthenticationSSOModel } from './dto/authenticationResultModel';
import http from '../httpService';
import axios from 'axios';
import AppConsts from '../../lib/appconst';
const qs = require('qs');

class TokenAuthService {
    public async authenticate(authenticationInput: AuthenticationModel): Promise<AuthenticationResultModel> {
        let result = await http.get(AppConsts.ssoPrefix + '/api/TokenAuth/CortextAuthenticate?UserNameOrEmailAddress='+ authenticationInput.userNameOrEmailAddress);
        return result.data.data;
    }

    public async authenticateSSO(username:string, password:string): Promise<AuthenticationSSOModel> {
        let http = axios.create({
            baseURL: AppConsts.ssoAddress,
            timeout: 30000,
            paramsSerializer: function(params) {
              return qs.stringify(params, {
                encode: false,
              });
            },
          });


        var result = await http.post("/User/login",{
          username,
          password,
          clientId : 'microsoft.client'
        });

        return result.data;
    }
}

export default new TokenAuthService();
