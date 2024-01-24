const AppConsts = {
  userManagement: {
    defaultAdminUserName: 'admin',
  },
  localization: {
    defaultLocalizationSourceName: 'Inside',
  },
  authorization: {
    encrptedAuthTokenName: 'enc_auth_token',
  },

  ssoPrefix: process.env.REACT_APP_SSO_PREFIX,
  promotionPrefix: process.env.REACT_APP_PROMOTION_PREFIX,
  catalogPrefix: process.env.REACT_APP_CATALOG_PREFIX,
  customerPrefix: process.env.REACT_APP_CUSTOMER_PREFIX,
  commonPrefix: process.env.REACT_APP_COMMON_PREFIX,
  
  //payment type and code
  paymentCodeCod:process.env.REACT_APP_PAYMENT_CODE_COD,
  paymenttypeCod: process.env.REACT_APP_PAYMENT_METHED_TYPE_COD,

  paymentCodeDept:process.env.REACT_APP_PAYMENT_CODE_DEPT,
  paymenttypeDept: process.env.REACT_APP_PAYMENT_METHED_TYPE_DEPT,

  paymentCodeOnline:process.env.REACT_APP_PAYMENT_CODE_ONLINE,
  paymenttypeOnline: process.env.REACT_APP_PAYMENT_METHED_TYPE_ONLINE,

  // ReferenceCode Code
  ReferenceCodeCOD: process.env.REACT_APP_REFERENCE_CODE_COD,
  ReferenceCodeDEPT: process.env.REACT_APP_REFERENCE_CODE_DEPT,
  ReferenceCodePRODUCT: process.env.REACT_APP_REFERENCE_CODE_PRODUCT,
  ReferenceCodeONLINE: process.env.REACT_APP_REFERENCE_CODE_ONLINE,
  ReferenceCodePARTY: process.env.REACT_APP_REFERENCE_CODE_PARTY,
  ReferenceCodeSTRING: process.env.REACT_APP_REFERENCE_CODE_STRING,

  // get-reward-type
  RewardTypePREMIUM: process.env.REACT_APP_REWARD_TYPE_PREMIUM,
  RewardTypeDISCOUNTBONDS: process.env.REACT_APP_REWARD_TYPE_DISCOUNTBONDS,
  RewardTypeGIFT: process.env.REACT_APP_REWARD_TYPE_GIFT,
  RewardTypePOINT: process.env.REACT_APP_REWARD_TYPE_POINT,
  RewardTypeVOUCHER: process.env.REACT_APP_REWARD_TYPE_VOUCHER,
  RewardTypeCOUPON: process.env.REACT_APP_REWARD_TYPE_COUPON,
  RewardTypeDEPT: process.env.REACT_APP_REWARD_TYPE_DEPT,


  appBaseUrl: process.env.REACT_APP_BASE_URL,
  remoteServiceBaseUrl: process.env.REACT_APP_REMOTE_SERVICE_BASE_URL,
  
  hubAddress: process.env.REACT_APP_APP_SIGNALR_HUB,
  ssoAddress: process.env.REACT_APP_SSO_URL,

};
export default AppConsts;