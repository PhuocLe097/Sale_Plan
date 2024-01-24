import AppConsts from '../lib/appconst';
import { Api, RequestParams } from './promotionHandler/promotionHandler';

type SecurityDataType = {
  token: string;
  scheme: string;
  token_type: string;
  expires_in: number;
};
declare var abp: any;

class SwaggerUtils {
  static httpClient(prefix:string = AppConsts.promotionPrefix ?? '', api:any = Api<SecurityDataType>): any {
    var params: RequestParams = {
      headers: {
        '.AspNetCore.Culture': abp.utils.getCookieValue('Abp.Localization.CultureName'),
        'Abp.TenantId': abp.multiTenancy.getTenantIdCookie(),
        Authorization: 'Bearer ' + abp.auth.getToken(),
      },
    };

    const httpClient = new api({
      baseUrl: `${AppConsts.remoteServiceBaseUrl}${prefix}` as string,
      baseApiParams: params,
    });
    return httpClient;
  }
}

export default SwaggerUtils;