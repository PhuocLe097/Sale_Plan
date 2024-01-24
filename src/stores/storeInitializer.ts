import RoleStore from './roleStore';
import TenantStore from './tenantStore';
import UserStore from './userStore';
import SessionStore from './sessionStore';
import AuthenticationStore from './authenticationStore';
import AccountStore from './accountStore';
import FlowTypeStore from './flowTypeStore';
import PromotionStore from './promotionStore';
import productStore from './productStore';
import customerStore from './customerStore';
import commonStore from './commonStore';


export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    roleStore: new RoleStore(),
    tenantStore: new TenantStore(),
    userStore: new UserStore(),
    sessionStore: new SessionStore(),
    accountStore: new AccountStore(),
    flowTypeStore: new FlowTypeStore(),
    promotionStore: new PromotionStore(),
    productStore: new productStore(),
    customerStore: new customerStore(),
    commonStore: new commonStore(),
  };
}
