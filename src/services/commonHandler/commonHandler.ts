/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface BankAccountModel {
  /** @format uuid */
  id?: string;
  /**
   * Id ngân hàng.
   * @format uuid
   */
  bankId?: string;
  /** Tên ngân hàng. */
  bankName?: string | null;
  /** Tên tài khoản. */
  name?: string | null;
  /** Số tài khoản. */
  number?: string | null;
  /**
   * ID chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
  /** Tên chi nhánh. */
  branchName?: string | null;
  /** Trạng thái. */
  isActive?: boolean;
  /** Ma ben Odoo. */
  code?: string | null;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
}

export interface BankAccountModelDataResponseDto {
  data?: BankAccountModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface BankAccountModelPagedResultDto {
  items?: BankAccountModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface BankAccountModelPagedResultDtoDataResponseDto {
  data?: BankAccountModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** BankModel */
export interface BankModel {
  /** @format uuid */
  id?: string;
  /** The bank code. */
  code?: string | null;
  /** The bank name. */
  name?: string | null;
  /** The bank logo URL. */
  logoUrl?: string | null;
  /** The bank bin. */
  bin?: string | null;
  /** The bank description. */
  description?: string | null;
}

export interface BankModelListSuccessResponseDto {
  data?: BankModel[] | null;
  errorCodes?: string[] | null;
  isSuccess?: boolean;
}

export interface BankModelPagedResultDto {
  items?: BankModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface BankModelPagedResultDtoSuccessResponseDto {
  data?: BankModelPagedResultDto;
  errorCodes?: string[] | null;
  isSuccess?: boolean;
}

export interface BankModelSuccessResponseDto {
  /** BankModel */
  data?: BankModel;
  errorCodes?: string[] | null;
  isSuccess?: boolean;
}

export interface BooleanDataResponseDto {
  isSuccess?: boolean;
  data?: boolean;
  errorCodes?: string[] | null;
}

export interface BooleanSuccessResponseDto {
  data?: boolean;
  errorCodes?: string[] | null;
  isSuccess?: boolean;
}

/** The Country */
export interface CountryModel {
  /** @format uuid */
  id?: string;
  /** The country name. */
  name?: string | null;
}

export interface CountryModelDataResponseDto {
  /** The Country */
  data?: CountryModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CountryModelPagedResultDto {
  items?: CountryModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CountryModelPagedResultDtoDataResponseDto {
  data?: CountryModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CreateBankAccountModel {
  /**
   * Id ngân hàng.
   * @format uuid
   */
  bankId?: string | null;
  /** Tên tài khoản. */
  name?: string | null;
  /**
   * ID chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
  /** Số tài khoản. */
  number?: string | null;
  /** Mã. */
  code?: string | null;
  /** Trạng thái. */
  isActive?: boolean;
}

/** Create BankModel */
export interface CreateBankModel {
  /** The bank code. */
  code?: string | null;
  /** The bank name. */
  name?: string | null;
  /** The bank logo URL. */
  logoUrl?: string | null;
  /** The bank bin. */
  bin?: string | null;
  /** The bank description. */
  description?: string | null;
}

/** Create CountryModel */
export interface CreateCountryModel {
  /** The Country name. */
  name?: string | null;
}

/** Create CurrencyModel */
export interface CreateCurrencyModel {
  /** The currency code. */
  isoCode?: string | null;
  /** The currency name. */
  name?: string | null;
  /** The currency symbol. */
  symbol?: string | null;
}

/** Create DistrictModel */
export interface CreateDistrictModel {
  /** The district name. */
  name?: string | null;
  /**
   * The province id.
   * @format uuid
   */
  provinceId?: string;
}

export interface CreateMigrateProvinceModel {
  /** @format uuid */
  idPlatForm?: string;
  /** @format int32 */
  ref?: number;
}

/** Create PaymentAppModel */
export interface CreatePaymentAppModel {
  /** The payment app code. */
  code?: string | null;
  /** The payment app name. */
  name?: string | null;
  /** The payment app logo URL. */
  logoUrl?: string | null;
  /** The payment app description. */
  description?: string | null;
}

/** Create PaymentMethodModel */
export interface CreatePaymentMethodModel {
  /** The payment method name. */
  name?: string | null;
  /** The payment method logo URL. */
  logoUrl?: string | null;
  /** The payment method description. */
  description?: string | null;
}

/** Create PaymentTypeModel */
export interface CreatePaymentTypeModel {
  /** The payment type name. */
  name?: string | null;
  /** The payment type description. */
  description?: string | null;
}

/** Create PaymentTypePaymentMethodModel */
export interface CreatePaymentTypePaymentMethodModel {
  /**
   * The payment type identifier.
   * @format uuid
   */
  paymentTypeId?: string;
  /**
   * The payment method identifier.
   * @format uuid
   */
  paymentMethodId?: string;
}

/** Create ProvinceModel */
export interface CreateProvinceModel {
  /**
   * The country id.
   * @format uuid
   */
  countryId?: string;
  /** The province name. */
  name?: string | null;
}

/** Create WardModel */
export interface CreateWardModel {
  /** The ward name. */
  name?: string | null;
  /**
   * The district id.
   * @format uuid
   */
  districtId?: string;
}

/** The Currency */
export interface CurrencyModel {
  /** @format uuid */
  id?: string;
  /** The currency code. */
  isoCode?: string | null;
  /** The currency name. */
  name?: string | null;
  /** The currency symbol. */
  symbol?: string | null;
}

export interface CurrencyModelDataResponseDto {
  /** The Currency */
  data?: CurrencyModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CurrencyModelListDataResponseDto {
  data?: CurrencyModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CurrencyModelPagedResultDto {
  items?: CurrencyModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CurrencyModelPagedResultDtoDataResponseDto {
  data?: CurrencyModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** District */
export interface DistrictModel {
  /** @format uuid */
  id?: string;
  /** The district name. */
  name?: string | null;
  /**
   * The province id.
   * @format uuid
   */
  provinceId?: string | null;
  /** The province name. */
  provinceName?: string | null;
}

export interface DistrictModelDataResponseDto {
  /** District */
  data?: DistrictModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface DistrictModelPagedResultDto {
  items?: DistrictModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface DistrictModelPagedResultDtoDataResponseDto {
  data?: DistrictModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface GetAddressModel {
  countryIds?: string[] | null;
  provinceIds?: string[] | null;
  districtIds?: string[] | null;
  wardIds?: string[] | null;
}

export interface GetAllBankAccountModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /**
   * Id ngân hàng.
   * @format uuid
   */
  bankId?: string | null;
  /** Số tài khoản. */
  number?: string | null;
  /** Trang thai. */
  isActive?: boolean | null;
  /**
   * Chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
}

/** Get all list bin */
export interface GetAllBankByListBinModel {
  /** The list bank bins. */
  bins?: string[] | null;
}

/** Get All ListIdModel */
export interface GetAllBankByListIdModel {
  /** The list bank ids. */
  ids?: string[] | null;
}

/** Get All BankModel */
export interface GetAllBankModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** The bank name. */
  name?: string | null;
  /** The bank bin. */
  bin?: string | null;
}

/** Get All CountryModel */
export interface GetAllCountryModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** The Country name. */
  name?: string | null;
}

/** GetAllCurrencyByListIdModel */
export interface GetAllCurrencyByListIdModel {
  /** The list currency ids. */
  ids?: string[] | null;
}

/** Get All CurrencyModel */
export interface GetAllCurrencyModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** The currency name. */
  isoCode?: string | null;
  /** The currency name. */
  name?: string | null;
}

/** Get All DistrictModel */
export interface GetAllDistrictModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /**
   * The province id.
   * @format uuid
   */
  provinceId?: string | null;
  /** The district name. */
  name?: string | null;
}

/** GetAllPaymentAppByListIdModel */
export interface GetAllPaymentAppByListIdModel {
  /** The list payment app ids. */
  ids?: string[] | null;
}

/** Get All PaymentAppModel */
export interface GetAllPaymentAppModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** The payment app name. */
  name?: string | null;
}

/** GetAllPaymentMethodByListIdModel */
export interface GetAllPaymentMethodByListIdModel {
  /** The list paymentMethod Id. */
  ids?: string[] | null;
}

/** Get All PaymentMethodModel */
export interface GetAllPaymentMethodModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** The payment method name. */
  name?: string | null;
}

/** GetAllPaymentTypeByListIdModel */
export interface GetAllPaymentTypeByListIdModel {
  /** The list paymentType Id. */
  ids?: string[] | null;
}

/** Get All PaymentTypeModel */
export interface GetAllPaymentTypeModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** The payment Type name. */
  name?: string | null;
}

/** Get All PaymentTypeModel */
export interface GetAllPaymentTypePaymentMethodModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /**
   * The payment type identifier.
   * @format uuid
   */
  paymentTypeId?: string | null;
  /**
   * The payment method identifier.
   * @format uuid
   */
  paymentMethodId?: string | null;
  /** The payment Type name. */
  paymentTypeName?: string | null;
  /** The payment method name. */
  paymentMethodName?: string | null;
  /** The include payment code. */
  includePaymentCode?: boolean | null;
}

/** Get All ProvinceModel */
export interface GetAllProvinceModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /**
   * The country id.
   * @format uuid
   */
  countryId?: string | null;
  /** The province name. */
  name?: string | null;
}

/** GetAllWardByListIdModel */
export interface GetAllWardByListIdModel {
  ids?: string[] | null;
}

/** Get All WardModel */
export interface GetAllWardModel {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  maxResultCount?: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /**
   * The district Id.
   * @format uuid
   */
  districtId?: string | null;
  /** The ward name. */
  name?: string | null;
}

export interface GetInfoPaymentByListIdsModel {
  paymentTypeIds?: string[] | null;
  paymentMethodIds?: string[] | null;
}

export interface MigrateProvinceModel {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  idPlatForm?: string;
  /** @format int32 */
  ref?: number;
}

export interface MigrateProvinceModelDataResponseDto {
  data?: MigrateProvinceModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface MigrateProvinceModelListDataResponseDto {
  data?: MigrateProvinceModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** PaymentAppModel */
export interface PaymentAppModel {
  /** @format uuid */
  id?: string;
  /** The payment app code. */
  code?: string | null;
  /** The payment app name. */
  name?: string | null;
  /** The payment app logo URL. */
  logoUrl?: string | null;
  /** The payment app description. */
  description?: string | null;
}

export interface PaymentAppModelDataResponseDto {
  /** PaymentAppModel */
  data?: PaymentAppModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PaymentAppModelPagedResultDto {
  items?: PaymentAppModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PaymentAppModelPagedResultDtoDataResponseDto {
  data?: PaymentAppModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PaymentInfoModel {
  paymentTypes?: PaymentTypeModel[] | null;
  paymentMethods?: PaymentMethodModel[] | null;
}

export interface PaymentInfoModelDataResponseDto {
  data?: PaymentInfoModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** PaymentMethodModel */
export interface PaymentMethodModel {
  /** @format uuid */
  id?: string;
  /** The payment method name. */
  name?: string | null;
  /** The payment method logo URL. */
  logoUrl?: string | null;
  /** The payment method description. */
  description?: string | null;
  /** The payment code. */
  paymentCode?: any[] | null;
}

export interface PaymentMethodModelDataResponseDto {
  /** PaymentMethodModel */
  data?: PaymentMethodModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PaymentMethodModelListDataResponseDto {
  data?: PaymentMethodModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PaymentMethodModelPagedResultDto {
  items?: PaymentMethodModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PaymentMethodModelPagedResultDtoDataResponseDto {
  data?: PaymentMethodModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** PaymentTypeModel */
export interface PaymentTypeModel {
  /** @format uuid */
  id?: string;
  /** The payment Type name. */
  name?: string | null;
  /** The payment Type description. */
  description?: string | null;
}

export interface PaymentTypeModelDataResponseDto {
  /** PaymentTypeModel */
  data?: PaymentTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PaymentTypeModelListDataResponseDto {
  data?: PaymentTypeModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PaymentTypeModelPagedResultDto {
  items?: PaymentTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PaymentTypeModelPagedResultDtoDataResponseDto {
  data?: PaymentTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** PaymentTypeModel */
export interface PaymentTypePaymentMethodModel {
  /** @format uuid */
  id?: string;
  /** PaymentTypeModel */
  paymentType?: PaymentTypeModel;
  /** PaymentMethodModel */
  paymentMethod?: PaymentMethodModel;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Ngày cập nhật.
   * @format date-time
   */
  lastModificationTime?: string | null;
}

export interface PaymentTypePaymentMethodModelDataResponseDto {
  /** PaymentTypeModel */
  data?: PaymentTypePaymentMethodModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PaymentTypePaymentMethodModelPagedResultDto {
  items?: PaymentTypePaymentMethodModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PaymentTypePaymentMethodModelPagedResultDtoDataResponseDto {
  data?: PaymentTypePaymentMethodModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** The Province */
export interface ProvinceModel {
  /** @format uuid */
  id?: string;
  /** The province name. */
  name?: string | null;
  /**
   * The country id.
   * @format uuid
   */
  countryId?: string | null;
  /** The country name. */
  countryName?: string | null;
}

export interface ProvinceModelDataResponseDto {
  /** The Province */
  data?: ProvinceModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProvinceModelPagedResultDto {
  items?: ProvinceModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProvinceModelPagedResultDtoDataResponseDto {
  data?: ProvinceModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ResponseAddressModel {
  countries?: CountryModel[] | null;
  provinces?: ProvinceModel[] | null;
  districts?: DistrictModel[] | null;
  wards?: WardModel[] | null;
}

export interface ResponseAddressModelDataResponseDto {
  data?: ResponseAddressModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface StringDataResponseDto {
  data?: string | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface UpdateBankAccountModel {
  /**
   * Id ngân hàng.
   * @format uuid
   */
  bankId?: string | null;
  /** Tên tài khoản. */
  name?: string | null;
  /**
   * ID chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
  /** Số tài khoản. */
  number?: string | null;
  /** Mã. */
  code?: string | null;
  /** Trạng thái. */
  isActive?: boolean;
  /**
   * Id tài khoản ngân hàng.
   * @format uuid
   */
  id?: string;
}

/** Update BankModel */
export interface UpdateBankModel {
  /** The bank code. */
  code?: string | null;
  /** The bank name. */
  name?: string | null;
  /** The bank logo URL. */
  logoUrl?: string | null;
  /** The bank bin. */
  bin?: string | null;
  /** The bank description. */
  description?: string | null;
  /**
   * The bank id.
   * @format uuid
   */
  id?: string;
}

/** Update CountryModel */
export interface UpdateCountryModel {
  /** The Country name. */
  name?: string | null;
  /**
   * The Country id.
   * @format uuid
   */
  id?: string;
}

/** Update CurrencyModel */
export interface UpdateCurrencyModel {
  /** The currency code. */
  isoCode?: string | null;
  /** The currency name. */
  name?: string | null;
  /** The currency symbol. */
  symbol?: string | null;
  /**
   * The Currency id.
   * @format uuid
   */
  id?: string;
}

/** Update DistrictModel */
export interface UpdateDistrictModel {
  /** The district name. */
  name?: string | null;
  /**
   * The province id.
   * @format uuid
   */
  provinceId?: string;
  /**
   * The district id.
   * @format uuid
   */
  id?: string;
}

/** Update PaymentAppModel */
export interface UpdatePaymentAppModel {
  /** The payment app code. */
  code?: string | null;
  /** The payment app name. */
  name?: string | null;
  /** The payment app logo URL. */
  logoUrl?: string | null;
  /** The payment app description. */
  description?: string | null;
  /**
   * The payment app id.
   * @format uuid
   */
  id?: string;
}

/** Update PaymentMethodModel */
export interface UpdatePaymentMethodModel {
  /** The payment method name. */
  name?: string | null;
  /** The payment method logo URL. */
  logoUrl?: string | null;
  /** The payment method description. */
  description?: string | null;
  /**
   * The payment method id.
   * @format uuid
   */
  id?: string;
}

/** Update PaymentTypeModel */
export interface UpdatePaymentTypeModel {
  /** The payment type name. */
  name?: string | null;
  /** The payment type description. */
  description?: string | null;
  /**
   * The payment Type id.
   * @format uuid
   */
  id?: string;
}

/** Update PaymentTypePaymentMethodModel */
export interface UpdatePaymentTypePaymentMethodModel {
  /**
   * The payment type identifier.
   * @format uuid
   */
  paymentTypeId?: string;
  /**
   * The payment method identifier.
   * @format uuid
   */
  paymentMethodId?: string;
  /**
   * The payment Type id.
   * @format uuid
   */
  id?: string;
}

/** Update ProvinceModel */
export interface UpdateProvinceModel {
  /**
   * The country id.
   * @format uuid
   */
  countryId?: string;
  /** The province name. */
  name?: string | null;
  /**
   * The province id.
   * @format uuid
   */
  id?: string;
}

/** Update WardModel */
export interface UpdateWardModel {
  /** The ward name. */
  name?: string | null;
  /**
   * The district id.
   * @format uuid
   */
  districtId?: string;
  /**
   * The ward id.
   * @format uuid
   */
  id?: string;
}

/** The Ward */
export interface WardModel {
  /** @format uuid */
  id?: string;
  /** The ward name. */
  name?: string | null;
  /**
   * The district id.
   * @format uuid
   */
  districtId?: string;
  /** The district name. */
  districtName?: string | null;
}

export interface WardModelDataResponseDto {
  /** The Ward */
  data?: WardModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface WardModelListSuccessResponseDto {
  data?: WardModel[] | null;
  errorCodes?: string[] | null;
  isSuccess?: boolean;
}

export interface WardModelPagedResultDto {
  items?: WardModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface WardModelPagedResultDtoDataResponseDto {
  data?: WardModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Common Service (v1.1.5) - Testing
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  bank = {
    /**
     * No description
     *
     * @tags Bank
     * @name GetallCreate
     * @summary Danh sách ngân hàng.
     * @request POST:/bank/getall
     * @secure
     */
    getallCreate: (
      data: GetAllBankModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankModelPagedResultDtoSuccessResponseDto, any>({
        path: `/bank/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank
     * @name GetallbylistidCreate
     * @summary Danh sách ngân hàng theo danh sách Id.
     * @request POST:/bank/getallbylistid
     * @secure
     */
    getallbylistidCreate: (
      data: GetAllBankByListIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankModelListSuccessResponseDto, any>({
        path: `/bank/getallbylistid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank
     * @name GetallbylistbinCreate
     * @summary Danh sách ngân hàng theo danh sách mã bin.
     * @request POST:/bank/getallbylistbin
     * @secure
     */
    getallbylistbinCreate: (
      data: GetAllBankByListBinModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankModelListSuccessResponseDto, any>({
        path: `/bank/getallbylistbin`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank
     * @name GetbyidDetail
     * @summary Thông tin chi tiết ngân hàng.
     * @request GET:/bank/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankModelSuccessResponseDto, any>({
        path: `/bank/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank
     * @name CreateCreate
     * @summary Tạo mới ngân hàng.
     * @request POST:/bank/create
     * @secure
     */
    createCreate: (
      data: CreateBankModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankModelSuccessResponseDto, any>({
        path: `/bank/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank
     * @name UpdateUpdate
     * @summary Cập nhật ngân hàng.
     * @request PUT:/bank/update
     * @secure
     */
    updateUpdate: (
      data: UpdateBankModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankModelSuccessResponseDto, any>({
        path: `/bank/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank
     * @name DeleteDelete
     * @summary Xóa ngân hàng.
     * @request DELETE:/bank/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanSuccessResponseDto, any>({
        path: `/bank/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  bankaccount = {
    /**
     * No description
     *
     * @tags BankAccount
     * @name GetallCreate
     * @summary Danh sách tài khoản ngân hàng.
     * @request POST:/bankaccount/getall
     * @secure
     */
    getallCreate: (
      data: GetAllBankAccountModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankAccountModelPagedResultDtoDataResponseDto, any>({
        path: `/bankaccount/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags BankAccount
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của tài khoản ngân hàng.
     * @request GET:/bankaccount/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankAccountModelDataResponseDto, any>({
        path: `/bankaccount/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags BankAccount
     * @name CreateCreate
     * @summary Tạo mới tài khoản ngân hàng.
     * @request POST:/bankaccount/create
     * @secure
     */
    createCreate: (
      data: CreateBankAccountModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankAccountModelDataResponseDto, any>({
        path: `/bankaccount/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags BankAccount
     * @name UpdateUpdate
     * @summary Cập nhật thông tin tài khoản ngân hàng.
     * @request PUT:/bankaccount/update
     * @secure
     */
    updateUpdate: (
      data: UpdateBankAccountModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BankAccountModelDataResponseDto, any>({
        path: `/bankaccount/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags BankAccount
     * @name DeleteDelete
     * @summary Xóa tài khoản ngân hàng.
     * @request DELETE:/bankaccount/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/bankaccount/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  country = {
    /**
     * No description
     *
     * @tags Country
     * @name GetallCreate
     * @summary Danh sách quốc gia
     * @request POST:/country/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCountryModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CountryModelPagedResultDtoDataResponseDto, any>({
        path: `/country/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của quốc gia theo id.
     * @request GET:/country/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CountryModelDataResponseDto, any>({
        path: `/country/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name CreateCreate
     * @summary Tạo mới quốc gia
     * @request POST:/country/create
     * @secure
     */
    createCreate: (
      data: CreateCountryModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CountryModelDataResponseDto, any>({
        path: `/country/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name UpdateUpdate
     * @summary Cập nhật thông tin quốc gia.
     * @request PUT:/country/update
     * @secure
     */
    updateUpdate: (
      data: UpdateCountryModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CountryModelDataResponseDto, any>({
        path: `/country/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Country
     * @name DeleteDelete
     * @summary Xóa quốc gia.
     * @request DELETE:/country/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/country/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  currency = {
    /**
     * No description
     *
     * @tags Currency
     * @name GetallCreate
     * @summary Danh sách tiền tệ
     * @request POST:/currency/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCurrencyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CurrencyModelPagedResultDtoDataResponseDto, any>({
        path: `/currency/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name GetallbylistidCreate
     * @summary Danh sách tiền tệ theo danh sách Id
     * @request POST:/currency/getallbylistid
     * @secure
     */
    getallbylistidCreate: (
      data: GetAllCurrencyByListIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CurrencyModelListDataResponseDto, any>({
        path: `/currency/getallbylistid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của tiền tệ theo id.
     * @request GET:/currency/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CurrencyModelDataResponseDto, any>({
        path: `/currency/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CreateCreate
     * @summary Tạo mới tiền tệ
     * @request POST:/currency/create
     * @secure
     */
    createCreate: (
      data: CreateCurrencyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CurrencyModelDataResponseDto, any>({
        path: `/currency/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name UpdateUpdate
     * @summary Cập nhật thông tin tiền tệ.
     * @request PUT:/currency/update
     * @secure
     */
    updateUpdate: (
      data: UpdateCurrencyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CurrencyModelDataResponseDto, any>({
        path: `/currency/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name DeleteDelete
     * @summary Xóa tiền tệ.
     * @request DELETE:/currency/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/currency/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  district = {
    /**
     * No description
     *
     * @tags District
     * @name GetallCreate
     * @summary Danh sách quận/huyện.
     * @request POST:/district/getall
     * @secure
     */
    getallCreate: (
      data: GetAllDistrictModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DistrictModelPagedResultDtoDataResponseDto, any>({
        path: `/district/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags District
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của quận/huyện theo id.
     * @request GET:/district/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DistrictModelDataResponseDto, any>({
        path: `/district/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags District
     * @name CreateCreate
     * @summary Tạo mới quận/huyện.
     * @request POST:/district/create
     * @secure
     */
    createCreate: (
      data: CreateDistrictModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DistrictModelDataResponseDto, any>({
        path: `/district/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags District
     * @name UpdateUpdate
     * @summary Cập nhật quận/huyện.
     * @request PUT:/district/update
     * @secure
     */
    updateUpdate: (
      data: UpdateDistrictModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DistrictModelDataResponseDto, any>({
        path: `/district/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags District
     * @name DeleteDelete
     * @summary Xóa quận/huyện.
     * @request DELETE:/district/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/district/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  paymentapp = {
    /**
     * No description
     *
     * @tags PaymentApp
     * @name GetallCreate
     * @summary Danh sách App thanh toán.
     * @request POST:/paymentapp/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPaymentAppModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentAppModelPagedResultDtoDataResponseDto, any>({
        path: `/paymentapp/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentApp
     * @name GetallbylistidCreate
     * @summary Danh sách App thanh toán theo danh sách Id.
     * @request POST:/paymentapp/getallbylistid
     * @secure
     */
    getallbylistidCreate: (
      data: GetAllPaymentAppByListIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentAppModelDataResponseDto, any>({
        path: `/paymentapp/getallbylistid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentApp
     * @name GetbyidDetail
     * @summary Thông tin chi tiết App thanh toán.
     * @request GET:/paymentapp/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentAppModelDataResponseDto, any>({
        path: `/paymentapp/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentApp
     * @name CreateCreate
     * @summary Tạo mới App thanh toán.
     * @request POST:/paymentapp/create
     * @secure
     */
    createCreate: (
      data: CreatePaymentAppModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentAppModelDataResponseDto, any>({
        path: `/paymentapp/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentApp
     * @name UpdateUpdate
     * @summary Cập nhật thông tin App thanh toán.
     * @request PUT:/paymentapp/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePaymentAppModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentAppModelDataResponseDto, any>({
        path: `/paymentapp/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentApp
     * @name DeleteDelete
     * @summary Xóa App thanh toán.
     * @request DELETE:/paymentapp/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/paymentapp/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  paymentmethod = {
    /**
     * No description
     *
     * @tags PaymentMethod
     * @name GetallCreate
     * @summary Danh sách phương thức thanh toán.
     * @request POST:/paymentmethod/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPaymentMethodModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentMethodModelPagedResultDtoDataResponseDto, any>({
        path: `/paymentmethod/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentMethod
     * @name GetallbylistidCreate
     * @summary Danh sách phương thức thanh toán theo danh sách id.
     * @request POST:/paymentmethod/getallbylistid
     * @secure
     */
    getallbylistidCreate: (
      data: GetAllPaymentMethodByListIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentMethodModelListDataResponseDto, any>({
        path: `/paymentmethod/getallbylistid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentMethod
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của phương thức thanh toán.
     * @request GET:/paymentmethod/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentMethodModelDataResponseDto, any>({
        path: `/paymentmethod/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentMethod
     * @name CreateCreate
     * @summary Tạo mới phương thức thanh toán.
     * @request POST:/paymentmethod/create
     * @secure
     */
    createCreate: (
      data: CreatePaymentMethodModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentMethodModelDataResponseDto, any>({
        path: `/paymentmethod/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentMethod
     * @name UpdateUpdate
     * @summary Cập nhật thông tin phương thức thanh toán.
     * @request PUT:/paymentmethod/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePaymentMethodModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentMethodModelDataResponseDto, any>({
        path: `/paymentmethod/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentMethod
     * @name DeleteDelete
     * @summary Xóa phương thức thanh toán.
     * @request DELETE:/paymentmethod/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/paymentmethod/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  paymenttype = {
    /**
     * No description
     *
     * @tags PaymentType
     * @name GetallCreate
     * @summary Danh sách loại thanh toán.
     * @request POST:/paymenttype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPaymentTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/paymenttype/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentType
     * @name GetallbylistidCreate
     * @summary Danh sách loại thanh toán theo danh sách id.
     * @request POST:/paymenttype/getallbylistid
     * @secure
     */
    getallbylistidCreate: (
      data: GetAllPaymentTypeByListIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypeModelListDataResponseDto, any>({
        path: `/paymenttype/getallbylistid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentType
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của loại thanh toán.
     * @request GET:/paymenttype/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypeModelDataResponseDto, any>({
        path: `/paymenttype/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentType
     * @name CreateCreate
     * @summary Tạo mới loại thanh toán.
     * @request POST:/paymenttype/create
     * @secure
     */
    createCreate: (
      data: CreatePaymentTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypeModelDataResponseDto, any>({
        path: `/paymenttype/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentType
     * @name UpdateUpdate
     * @summary Cập nhật thông tin loại thanh toán.
     * @request PUT:/paymenttype/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePaymentTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypeModelDataResponseDto, any>({
        path: `/paymenttype/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentType
     * @name DeleteDelete
     * @summary Xóa loại thanh toán.
     * @request DELETE:/paymenttype/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/paymenttype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  paymenttypepaymentmethod = {
    /**
     * No description
     *
     * @tags PaymentTypePaymentMethod
     * @name GetallCreate
     * @summary Danh sách loại thanh toán.
     * @request POST:/paymenttypepaymentmethod/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPaymentTypePaymentMethodModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypePaymentMethodModelPagedResultDtoDataResponseDto, any>({
        path: `/paymenttypepaymentmethod/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentTypePaymentMethod
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của loại thanh toán.
     * @request GET:/paymenttypepaymentmethod/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypePaymentMethodModelDataResponseDto, any>({
        path: `/paymenttypepaymentmethod/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentTypePaymentMethod
     * @name CreateCreate
     * @summary Tạo mới loại thanh toán.
     * @request POST:/paymenttypepaymentmethod/create
     * @secure
     */
    createCreate: (
      data: CreatePaymentTypePaymentMethodModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypePaymentMethodModelDataResponseDto, any>({
        path: `/paymenttypepaymentmethod/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentTypePaymentMethod
     * @name UpdateUpdate
     * @summary Cập nhật thông tin loại thanh toán.
     * @request PUT:/paymenttypepaymentmethod/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePaymentTypePaymentMethodModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentTypePaymentMethodModelDataResponseDto, any>({
        path: `/paymenttypepaymentmethod/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentTypePaymentMethod
     * @name DeleteDelete
     * @summary Xóa loại thanh toán.
     * @request DELETE:/paymenttypepaymentmethod/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/paymenttypepaymentmethod/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PaymentTypePaymentMethod
     * @name GetinfopaymentbylistidsCreate
     * @summary Lấy thông tin PaymentType - PaymentMethod
     * @request POST:/paymenttypepaymentmethod/getinfopaymentbylistids
     * @secure
     */
    getinfopaymentbylistidsCreate: (
      data: GetInfoPaymentByListIdsModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaymentInfoModelDataResponseDto, any>({
        path: `/paymenttypepaymentmethod/getinfopaymentbylistids`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  province = {
    /**
     * No description
     *
     * @tags Province
     * @name GetallCreate
     * @summary Danh sách tỉnh/thành
     * @request POST:/province/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProvinceModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProvinceModelPagedResultDtoDataResponseDto, any>({
        path: `/province/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của tỉnh/thành theo id.
     * @request GET:/province/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProvinceModelDataResponseDto, any>({
        path: `/province/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name CreateCreate
     * @summary Tạo mới tỉnh/thành
     * @request POST:/province/create
     * @secure
     */
    createCreate: (
      data: CreateProvinceModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProvinceModelDataResponseDto, any>({
        path: `/province/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name UpdateUpdate
     * @summary Cập nhật thông tin tỉnh/thành.
     * @request PUT:/province/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProvinceModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProvinceModelDataResponseDto, any>({
        path: `/province/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name DeleteDelete
     * @summary Xóa tỉnh/thành.
     * @request DELETE:/province/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/province/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name MigrateprovinceCreate
     * @summary Đông bộ dữ liệu Tỉnh thành.
     * @request POST:/province/migrateprovince
     * @secure
     */
    migrateprovinceCreate: (
      data: CreateMigrateProvinceModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<MigrateProvinceModelDataResponseDto, any>({
        path: `/province/migrateprovince`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name GetprovincemappersList
     * @summary Danh sách tỉnh thành mapper.
     * @request GET:/province/getprovincemappers
     * @secure
     */
    getprovincemappersList: (
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<MigrateProvinceModelListDataResponseDto, any>({
        path: `/province/getprovincemappers`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Province
     * @name GetprovincebynameDetail
     * @request GET:/province/getprovincebyname/{name}
     * @secure
     */
    getprovincebynameDetail: (
      name: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProvinceModelDataResponseDto, any>({
        path: `/province/getprovincebyname/${name}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  tool = {
    /**
     * No description
     *
     * @tags Tool
     * @name GenerateslugList
     * @summary Generate Slug
     * @request GET:/tool/generateslug
     * @secure
     */
    generateslugList: (
      query?: {
        /** The text. */
        text?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<StringDataResponseDto, any>({
        path: `/tool/generateslug`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tool
     * @name GetlocationsCreate
     * @request POST:/tool/getlocations
     * @secure
     */
    getlocationsCreate: (
      data: GetAddressModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ResponseAddressModelDataResponseDto, any>({
        path: `/tool/getlocations`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  ward = {
    /**
     * No description
     *
     * @tags Ward
     * @name GetallCreate
     * @summary Danh sách phường/xã.
     * @request POST:/ward/getall
     * @secure
     */
    getallCreate: (
      data: GetAllWardModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WardModelPagedResultDtoDataResponseDto, any>({
        path: `/ward/getall`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ward
     * @name GetallbylistidCreate
     * @summary Danh sách phường/xã theo danh sách Id.
     * @request POST:/ward/getallbylistid
     * @secure
     */
    getallbylistidCreate: (
      data: GetAllWardByListIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WardModelListSuccessResponseDto, any>({
        path: `/ward/getallbylistid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ward
     * @name GetbyidDetail
     * @summary Thông tin chi tiết của phường/xã theo id.
     * @request GET:/ward/getbyid/{Id}
     * @secure
     */
    getbyidDetail: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WardModelDataResponseDto, any>({
        path: `/ward/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ward
     * @name CreateCreate
     * @summary Tạo mới phường/xã.
     * @request POST:/ward/create
     * @secure
     */
    createCreate: (
      data: CreateWardModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WardModelDataResponseDto, any>({
        path: `/ward/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ward
     * @name UpdateUpdate
     * @summary Cập nhật phường/xã.
     * @request PUT:/ward/update
     * @secure
     */
    updateUpdate: (
      data: UpdateWardModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WardModelDataResponseDto, any>({
        path: `/ward/update`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ward
     * @name DeleteDelete
     * @summary Xóa phường/xã.
     * @request DELETE:/ward/delete/{Id}
     * @secure
     */
    deleteDelete: (
      id: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/ward/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
