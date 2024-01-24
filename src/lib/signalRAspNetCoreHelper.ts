import AppConsts from './appconst';
import Util from '../utils/utils';

declare var abp: any;

class SignalRAspNetCoreHelper {
  initSignalR() {
    var encryptedAuthToken = abp.utils.getCookieValue(AppConsts.authorization.encrptedAuthTokenName);

    abp.signalr = {
      autoConnect: true,
      connect: undefined,
      hubs: undefined,
      qs: AppConsts.authorization.encrptedAuthTokenName + '=' + encodeURIComponent(encryptedAuthToken),
      remoteServiceBaseUrl: AppConsts.remoteServiceBaseUrl,
      url: '/signalr-notification'
    };
    Util.loadScript(AppConsts.appBaseUrl + '/scripts/libs/abp.signalr-client.js');
  }

  userOnline() {
    if (!abp.signalr.isConnected) {
      return;
    }

    var a = abp.signalr.hubs.commonHub.invoke('userOnline');
    console.log(a);

  }

}
export default new SignalRAspNetCoreHelper();
