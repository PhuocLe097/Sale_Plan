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

export interface ActionInfo {
  name?: string | null;
  context?: Record<string, any>;
}

export interface BooleanDataResponseDto {
  data?: boolean;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** Kiểm tra thông tin sản ưu đãi */
export interface ConnectDealsInput {
  /** Lọc theo đối tượng liên kết */
  reference?: string[] | null;
  /** Lọc theo type [Promotion, Customer, Product, ....] */
  referenceTypeName?: string[] | null;
  /** Lọc theo chương trình khuyến mãi */
  promotionIds?: number[] | null;
}

export interface CreateDealsCollectionInput {
  /** Loại tham chiếu [product, PartyId, CustomerId, PaymentTypeId,...] */
  referenceTypeCode?: string | null;
  /** Giá trị tham chiếu [productId, BranchId, CustomerId, PaymentTypeId,...] */
  reference?: string | null;
}

export interface CreateDealsInput {
  /** Giá trị tham chiếu [ProductPromotion, PaymentPromotion, CustomerSegment, ... ] */
  dealsCollections?: CreateDealsCollectionInput[] | null;
  /**
   * Số lượng
   * @format int64
   */
  quantity?: number | null;
  redeem?: CreateRedeemFromPromotion;
}

export interface CreatePromotionInput {
  /** Tên chương trình khuyến mãi */
  name?: string | null;
  /** Mô tả chương trình khuyến mãi */
  description?: string | null;
  /**
   * Ngày kết thúc chương trình khuyến mãi
   * @format int64
   */
  effectEndDate?: number;
  /**
   * Ngày bắt đầu chương trình khuyến mãi
   * @format date-time
   */
  effectStartDate?: string;
  /** Danh sách các đối tượng ưu đãi */
  deals?: CreateDealsInput[] | null;
}

export interface CreateRedeemFromPromotion {
  /** @minLength 1 */
  name: string;
  rewardType?: ERewardType;
  /** Giá trị ưu đãi */
  value?: string | null;
  /**
   * Nhắc nhở trước ngày hết hạn [*]
   * @format int32
   */
  remainingDueDate?: number;
  /**
   * Số lượng ưu đãi
   * @format int32
   */
  quantity?: number;
}

export interface CreateRedeemInput {
  /** @minLength 1 */
  name: string;
  rewardType?: ERewardType;
  /** Giá trị ưu đãi */
  value?: string | null;
  /** Đối tượng ưu đãi */
  dealsIds?: string[] | null;
  /**
   * Nhắc nhở trước ngày hết hạn [*]
   * @format int32
   */
  remainingDueDate?: number;
  /**
   * Số lượng ưu đãi
   * @format int32
   */
  quantity?: number;
}

export interface CreateRewardInput {
  rewardReference?: string | null;
  /** @format byte */
  hash?: string | null;
}

export interface CreateRuleInput {
  ruleType?: RuleType;
  /**
   * Phí quy đổi
   * @format int32
   */
  ruleCost?: number;
  /** Biểu thức điều kiện */
  expression?: string | null;
  enabled?: boolean;
  /** Mô tả rule */
  ruleDescriptions: string[];
  actions?: RuleActions;
  successEvent?: string | null;
  /** Danh sách điều kiện con */
  rules?: CreateWorkflowRuleInput[] | null;
  /** @format int64 */
  workflowId?: number;
}

/** Tạo mới quy trình kiểm tra */
export interface CreateWorkflowInput {
  /** Mô tả quy trình kiểm tra khuyến mãi */
  description?: string | null;
  /** Danh sách mã ưu đãi */
  dealsCode?: string[] | null;
  /** Raw data */
  rawData?: string | null;
  status?: WorkflowStatus;
  /** Danh sách biểu thức toàn cục */
  globalParams?: ScopedParamInput[] | null;
  /** Danh sách rules */
  rules?: CreateWorkflowRuleInput[] | null;
}

/** Biểu thức */
export interface CreateWorkflowRuleInput {
  ruleType?: RuleType;
  /**
   * Phí quy đổi
   * @format int32
   */
  ruleCost?: number;
  /** Biểu thức điều kiện */
  expression?: string | null;
  enabled?: boolean;
  /** Mô tả rule */
  ruleDescriptions: string[];
  actions?: RuleActions;
  successEvent?: string | null;
  /** Danh sách điều kiện con */
  rules?: CreateWorkflowRuleInput[] | null;
}

/** Model for Promotion Hash. */
export interface DealsBaseModel {
  /** @format uuid */
  id?: string;
  /** Deals RedeemCode for Promotion Hash */
  dealsCode?: string | null;
  /**
   * Số lượng cho phép
   * @format int64
   */
  quantity?: number;
  /**
   * DealsCollections Type ID for Promotion Hash
   * @format uuid
   */
  referenceTypeId?: string;
  /** Giá trị tham chiếu [productId, PartyId, CustomerId, PaymentTypeId,...] */
  reference?: DealsCollectionModel[] | null;
  redeemReward?: RedeemRewardModel;
  /** Danh sách quy trình kiểm tra ưu đãi */
  workflows?: WorkflowModel[] | null;
}

export interface DealsCollectionModel {
  /** Giá trị tham chiếu [productId, BranchId, CustomerId, PaymentTypeId,...] */
  reference?: string | null;
  /** Tên loại tham chiếu [product, PartyId, CustomerId, PaymentTypeId,...] */
  referenceTypeCode?: string | null;
  /** Mã loại tham chiếu [product, PartyId, CustomerId, PaymentTypeId,...] */
  referenceTypeName?: string | null;
}

export interface DealsModel {
  /** @format uuid */
  id?: string;
  /** Deals RedeemCode for Promotion Hash */
  dealsCode?: string | null;
  /**
   * Số lượng cho phép
   * @format int64
   */
  quantity?: number;
  /**
   * DealsCollections Type ID for Promotion Hash
   * @format uuid
   */
  referenceTypeId?: string;
  /** Giá trị tham chiếu [productId, PartyId, CustomerId, PaymentTypeId,...] */
  reference?: DealsCollectionModel[] | null;
  redeemReward?: RedeemRewardModel;
  /** Danh sách quy trình kiểm tra ưu đãi */
  workflows?: WorkflowModel[] | null;
  /** Danh sách khuyến mãi */
  promotions?: PromotionModel[] | null;
}

export interface DealsModelDataResponseDto {
  data?: DealsModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface DealsModelIEnumerableDataResponseDto {
  data?: DealsModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface DealsModelListDataResponseDto {
  data?: DealsModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface DealsModelPagedResultDto {
  items?: DealsModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface DealsModelPagedResultDtoDataResponseDto {
  data?: DealsModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** Lấy đối tượng ưu đãi */
export interface DealsRequestInput {
  /**
   * Id đối tượng ưu đãi
   * @format uuid
   */
  id?: string | null;
  /** Mã khuyến mãi */
  dealsCode?: string | null;
  /**
   * Id chương trình khuyến mãi
   * @format int64
   */
  promotionId: number;
}

export interface DeserializeHashDto {
  /** @format byte */
  hash?: string | null;
}

/** @format int32 */
export enum ERewardType {
  Value100 = 100,
  Value110 = 110,
  Value300 = 300,
  Value400 = 400,
  Value500 = 500,
  Value510 = 510,
  Value600 = 600,
}

/** Lấy thông tin các deals */
export interface EvaluateDealsDto {
  /** Loại tham chiếu */
  referenceTypeName?: string | null;
  /** Danh sách giá trị tham chiếu */
  values?: string[] | null;
}

/** Kiểm tra ưu đãi */
export interface EvaluateDealsModel {
  /** @format uuid */
  id?: string;
  /** Mã ưu đãi */
  dealsCode?: string | null;
  /** Tên chương trình khuyến mãi */
  promotionName?: string[] | null;
  /** Danh sách các mô tả của workflow */
  workflowsDescriptions?: string[] | null;
  /** Danh sách các mô tả của rule */
  ruleDescriptions?: string[] | null;
  /** Giá trị tham chiếu [productId, PartyId, CustomerId, PaymentTypeId,...] */
  reference?: DealsCollectionModel[] | null;
}

export interface EvaluateDealsModelDataResponseDto {
  /** Kiểm tra ưu đãi */
  data?: EvaluateDealsModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface EvaluateDealsModelListDataResponseDto {
  data?: EvaluateDealsModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface EvaluateFilterModel {
  /** Lọc theo tên khuyến mãi */
  promotionName?: string | null;
  /** lọc theo tên workflow */
  workflowName?: string | null;
  /** Lọc theo mô tả workflow */
  workflowDescription?: string | null;
  /** Lọc theo tên rule */
  ruleName?: string | null;
  /** có lấy kết quả nếu kiểm tra không thỏa mãn điều kiện */
  showFail?: boolean | null;
  /** Lọc theo tên tham chiếu */
  workflowReference?: string | null;
}

export interface EvaluateInput {
  /**
   * Tổng giá trị đơn hàng
   * @format double
   */
  totalOrder?: number;
  /**
   * Promotion cần kiểm tra
   * @format int64
   */
  promotionId?: number | null;
  /**
   * Ngày đặt hàng
   * @format date-time
   */
  orderDate?: string | null;
  /**
   * Danh sách tham chiếu cần kiểm tra
   *  Customer | Order | Payment | Party
   */
  reference?: Record<string, string | null>;
  partyId?: string | null;
  products?: string[] | null;
  status?: WorkflowStatus;
  evaluateFilterModel?: EvaluateFilterModel;
}

export interface ExtendablePromotions {
  isActive?: boolean;
  /** @format date-time */
  effectStartDate?: string;
  /** @format date-time */
  effectEndDate?: string;
}

export interface HashModel {
  /**
   * Rule
   * @format int64
   */
  ruleId?: number;
  /**
   * Redeem
   * @format uuid
   */
  redeemId?: string;
  rewardType?: ERewardType;
  /** Tham số khuyến mãi */
  value?: string | null;
  /** Type của tham số khuyến mãi */
  valueType?: string | null;
  /**
   * Tổng giá trị đơn hàng
   * @format double
   */
  totalOrder?: number;
  /**
   * Số ngày đáo hạn còn lại
   * @format int32
   */
  remainingDueDate?: number;
  /**
   * Số lượng
   * @format int32
   */
  quantity?: number;
}

export interface HashModelDataResponseDto {
  data?: HashModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface JRulesEngine {
  /** @format int64 */
  workflowId?: number;
  workflowContent?: string | null;
  cartContent?: string | null;
}

export interface MapPromotionDealsInput {
  /** @format int64 */
  promotionId?: number;
  /** @format uuid */
  dealsId?: string;
}

export interface MapWorkflowDealsInput {
  /** @format int64 */
  workflowId?: number;
  /** @format uuid */
  dealsId?: string;
}

export interface PagedDealsRequestInput {
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
  /** Mã khuyến mãi */
  dealsCode?: string | null;
  /**
   * Id chương trình khuyến mãi
   * @format int64
   */
  promotionId?: number | null;
}

export interface PagedPromotionResultRequestDto {
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
  keyword?: string | null;
}

export interface PagedRedeemRewardAssigmentRequestDto {
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
  name?: string | null;
  /** @format uuid */
  dealsIds?: string | null;
  isActive?: boolean | null;
}

export interface PagedRuleResultRequestInput {
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
  keyword?: string | null;
}

export interface PagedWorkflowResultRequestInput {
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
  keyword?: string | null;
}

export interface PromotionDto {
  name?: string | null;
  description?: string | null;
  /** @format int64 */
  effectStartDate?: number;
  /** @format int64 */
  effectEndDate?: number;
  /** @format int64 */
  id?: number;
}

export interface PromotionDtoDataResponseDto {
  data?: PromotionDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PromotionModel {
  /** @format int64 */
  id?: number;
  /** Tên chương trình khuyến mãi */
  name?: string | null;
  /** Mã chương trình khuyến mãi */
  code?: string | null;
  /** Mô tả chương trình khuyến mãi */
  description?: string | null;
  /** Kích hoạt chương trình khuyến mãi */
  isActive?: boolean;
  /**
   * Ngày bắt đầu chương trình khuyến mãi
   * @format int64
   */
  effectStartDate?: number;
  /**
   * Ngày kết thúc chương trình khuyến mãi
   * @format int64
   */
  effectEndDate?: number;
  extensionData?: ExtendablePromotions;
  /** Danh sách các đối tượng ưu đãi */
  deals?: DealsBaseModel[] | null;
}

export interface PromotionModelDataResponseDto {
  data?: PromotionModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PromotionModelPagedResultDto {
  items?: PromotionModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PromotionModelPagedResultDtoDataResponseDto {
  data?: PromotionModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RedeemRewardModel {
  /** @format uuid */
  id?: string;
  redeemCode?: string | null;
  discriminator?: string | null;
  rewardType?: ERewardType;
  name?: string | null;
  isActive?: boolean;
  value?: string | null;
  /** @format int32 */
  quantity?: number;
  valueType?: string | null;
}

export interface RedeemRewardModelArrayDataResponseDto {
  data?: RedeemRewardModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RedeemRewardModelIEnumerableDataResponseDto {
  data?: RedeemRewardModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RedeemRewardModelListDataResponseDto {
  data?: RedeemRewardModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** @format int32 */
export enum ReferenceServiceType {
  Value100 = 100,
  Value200 = 200,
  Value300 = 300,
  Value400 = 400,
  Value401 = 401,
  Value402 = 402,
  Value499 = 499,
  Value500 = 500,
  Value999 = 999,
}

export interface ReferenceTypeInput {
  /** Tên loại tham chiếu */
  name?: string | null;
  referenceService?: ReferenceServiceType;
}

export interface ReferenceTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại tham chiếu */
  name?: string | null;
  /** Tên loại tham chiếu được chuẩn hóa */
  normalizedName?: string | null;
  /** Mã tham chiếu */
  code?: string | null;
}

export interface ReferenceTypeModelDataResponseDto {
  data?: ReferenceTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ReferenceTypeModelListDataResponseDto {
  data?: ReferenceTypeModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RewardColectionModel {
  /** @format int64 */
  rewardId?: number;
  value?: string | null;
}

export interface RewardModel {
  rewardReference?: string | null;
  /** @format int64 */
  promotionId?: number;
  rewardColection?: RewardColectionModel[] | null;
}

export interface RewardModelListDataResponseDto {
  data?: RewardModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RewardTypeDto {
  /**
   * Giá trị reward
   * @format int32
   */
  value?: number;
  /** Tên reward */
  displayName?: string | null;
}

export interface RewardTypeDtoListDataResponseDto {
  data?: RewardTypeDto[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RuleActions {
  onSuccess?: ActionInfo;
  onFailure?: ActionInfo;
}

export interface RuleModel {
  ruleType?: RuleType;
  /**
   * Phí quy đổi
   * @format int32
   */
  ruleCost?: number;
  /** Biểu thức điều kiện */
  expression?: string | null;
  enabled?: boolean;
  /** Mô tả rule */
  ruleDescriptions: string[];
  actions?: RuleActions;
  successEvent?: string | null;
  /** Danh sách điều kiện con */
  rules?: CreateWorkflowRuleInput[] | null;
  /** @format int64 */
  id?: number;
}

export interface RuleModelDataResponseDto {
  data?: RuleModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RuleModelPagedResultDto {
  items?: RuleModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface RuleModelPagedResultDtoDataResponseDto {
  data?: RuleModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** @format int32 */
export enum RuleType {
  Value0 = 0,
  Value10 = 10,
}

export interface ScopedParam {
  name?: string | null;
  expression?: string | null;
}

/** Biểu thức toàn cục */
export interface ScopedParamInput {
  /** Biểu thức lambda sẻ được liên kết với Rule */
  expression?: string | null;
  /** Mô tả */
  description?: string | null;
}

export interface StringArrayDataResponseDto {
  data?: string[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface UpdateRawDataInput {
  /** @format int64 */
  id?: number;
  rawData?: string | null;
  workflowContent?: string | null;
}

export interface UpdateRuleInput {
  /** @format int64 */
  id?: number;
}

export interface UpdateWorkflowDto {
  /** @format int64 */
  id?: number;
  /** Tên quy trình */
  workflowName?: string | null;
  workflowsToInject?: string[] | null;
  status?: WorkflowStatus;
  /** Raw data */
  rawData?: string | null;
  /** Gets or Sets the global params which will be applicable to all rules */
  globalParams?: ScopedParam[] | null;
  rules?: RuleModel[] | null;
}

/** Quy trình kiểm tra ưu đãi */
export interface WorkflowModel {
  /** Mô tả quy trình kiểm tra khuyến mãi */
  description?: string | null;
  /** Danh sách mã ưu đãi */
  dealsCode?: string[] | null;
  /** Raw data */
  rawData?: string | null;
  /** Danh sách biểu thức toàn cục */
  globalParams?: ScopedParamInput[] | null;
  /** Danh sách rules */
  rules?: CreateWorkflowRuleInput[] | null;
  /** @format int64 */
  id?: number;
  status?: WorkflowStatus;
}

export interface WorkflowModelDataResponseDto {
  /** Quy trình kiểm tra ưu đãi */
  data?: WorkflowModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface WorkflowModelPagedResultDto {
  items?: WorkflowModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface WorkflowModelPagedResultDtoDataResponseDto {
  data?: WorkflowModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** @format int32 */
export enum WorkflowStatus {
  Value0 = 0,
  Value1 = 1,
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
 * @title Promotions Service (v1.2.2) - Testing - Testing
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Common
     * @name CommonCreateReferenceTypeCreate
     * @summary Tạo mới loại tham chiếu
     * @request POST:/api/common/create-reference-type
     * @secure
     */
    commonCreateReferenceTypeCreate: (
      data: ReferenceTypeInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReferenceTypeModelDataResponseDto, any>({
        path: `/api/common/create-reference-type`,
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
     * @tags Common
     * @name CommonGetReferenceTypeList
     * @summary Danh sách loại tham chiếu
     * @request GET:/api/common/get-reference-type
     * @secure
     */
    commonGetReferenceTypeList: (
      query?: {
        name?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReferenceTypeModelListDataResponseDto, any>({
        path: `/api/common/get-reference-type`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Common
     * @name CommonConnectTestRulesEngineCreate
     * @summary Kiểm tra khuyến mãi
     * @request POST:/api/common/connect/test-rules-engine
     * @secure
     */
    commonConnectTestRulesEngineCreate: (
      data: JRulesEngine,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EvaluateDealsModelDataResponseDto, any>({
        path: `/api/common/connect/test-rules-engine`,
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
     * @tags Common
     * @name CommonApproveDebtRewardsDetail
     * @summary Lấy thông tin quà tặng bằng reference
     * @request GET:/api/common/approve-debt-rewards/{reference}
     * @secure
     */
    commonApproveDebtRewardsDetail: (
      reference: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<StringArrayDataResponseDto, any>({
        path: `/api/common/approve-debt-rewards/${reference}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Common
     * @name CommonMapWorkflowDealsCreate
     * @summary Map workflow deals
     * @request POST:/api/common/map-workflow-deals
     * @secure
     */
    commonMapWorkflowDealsCreate: (
      data: MapWorkflowDealsInput,
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
        path: `/api/common/map-workflow-deals`,
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
     * @tags Common
     * @name CommonRemoveWorkflowDealsCreate
     * @summary Xóa workflow deals
     * @request POST:/api/common/remove-workflow-deals
     * @secure
     */
    commonRemoveWorkflowDealsCreate: (
      data: MapWorkflowDealsInput,
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
        path: `/api/common/remove-workflow-deals`,
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
     * @tags Common
     * @name CommonRemovePromotionDealsCreate
     * @summary Xóa promotion deals
     * @request POST:/api/common/remove-promotion-deals
     * @secure
     */
    commonRemovePromotionDealsCreate: (
      data: MapPromotionDealsInput,
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
        path: `/api/common/remove-promotion-deals`,
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
     * @tags Common
     * @name CommonMapPromotionDealsCreate
     * @summary Map promotion deals
     * @request POST:/api/common/map-promotion-deals
     * @secure
     */
    commonMapPromotionDealsCreate: (
      data: MapPromotionDealsInput,
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
        path: `/api/common/map-promotion-deals`,
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
     * @tags Deals
     * @name DealsGetCreate
     * @summary Lấy đối tượng khuyến mãi (thanh toán | sản phẩm | Loại khách hàng | ...).
     * @request POST:/api/deals/get
     * @secure
     */
    dealsGetCreate: (
      data: DealsRequestInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DealsModelDataResponseDto, any>({
        path: `/api/deals/get`,
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
     * @tags Deals
     * @name DealsGetAllCreate
     * @request POST:/api/deals/get-all
     * @secure
     */
    dealsGetAllCreate: (
      data: PagedDealsRequestInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DealsModelPagedResultDtoDataResponseDto, any>({
        path: `/api/deals/get-all`,
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
     * @tags Deals
     * @name DealsCreateDealsCreate
     * @summary Tạo mới đối tượng khuyến mãi (thanh toán | sản phẩm | Loại khách hàng | ...).
     * @request POST:/api/deals/create-deals
     * @secure
     */
    dealsCreateDealsCreate: (
      data: CreateDealsInput[],
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DealsModelListDataResponseDto, any>({
        path: `/api/deals/create-deals`,
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
     * @tags Promotion
     * @name PromotionCreateCreate
     * @summary Tạo mới khuyến mãi
     * @request POST:/api/promotion/create
     * @secure
     */
    promotionCreateCreate: (
      data: CreatePromotionInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PromotionModelDataResponseDto, any>({
        path: `/api/promotion/create`,
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
     * @tags Promotion
     * @name PromotionGetAllCreate
     * @summary Lấy danh sách khuyến mãi
     * @request POST:/api/promotion/get-all
     * @secure
     */
    promotionGetAllCreate: (
      data: PagedPromotionResultRequestDto,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PromotionModelPagedResultDtoDataResponseDto, any>({
        path: `/api/promotion/get-all`,
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
     * @tags Promotion
     * @name PromotionGetDetail
     * @summary Lấy thông tin khuyến mãi
     * @request GET:/api/promotion/get/{id}
     * @secure
     */
    promotionGetDetail: (
      id: number,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PromotionModelDataResponseDto, any>({
        path: `/api/promotion/get/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotion
     * @name PromotionEnablePromotionUpdate
     * @request PUT:/api/promotion/enable-promotion/{id}
     * @secure
     */
    promotionEnablePromotionUpdate: (
      id: number,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PromotionDtoDataResponseDto, any>({
        path: `/api/promotion/enable-promotion/${id}`,
        method: 'PUT',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Promotion
     * @name PromotionDisablePromotionUpdate
     * @request PUT:/api/promotion/disable-promotion/{id}
     * @secure
     */
    promotionDisablePromotionUpdate: (
      id: number,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PromotionDtoDataResponseDto, any>({
        path: `/api/promotion/disable-promotion/${id}`,
        method: 'PUT',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RewardConfigurationCreateRedeemCreate
     * @summary Tạo mới đổi thưởng
     * @request POST:/api/reward-configuration/create-redeem
     * @secure
     */
    rewardConfigurationCreateRedeemCreate: (
      data: CreateRedeemInput[],
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RedeemRewardModelArrayDataResponseDto, any>({
        path: `/api/reward-configuration/create-redeem`,
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
     * @tags Redeem
     * @name RewardConfigurationFindRedeemCodeDetail
     * @summary Lấy thông tin đổi thưởng
     * @request GET:/api/reward-configuration/find-redeem-code/{code}
     * @secure
     */
    rewardConfigurationFindRedeemCodeDetail: (
      code: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RedeemRewardModelListDataResponseDto, any>({
        path: `/api/reward-configuration/find-redeem-code/${code}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RewardConfigurationGetRewardTypeList
     * @summary Lấy thông tin RewardType
     * @request GET:/api/reward-configuration/get-reward-type
     * @secure
     */
    rewardConfigurationGetRewardTypeList: (
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RewardTypeDtoListDataResponseDto, any>({
        path: `/api/reward-configuration/get-reward-type`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RewardConfigurationFindRedeemCodeList
     * @summary Lấy thông tin đổi thưởng
     * @request GET:/api/reward-configuration/find-redeem-code
     * @secure
     */
    rewardConfigurationFindRedeemCodeList: (
      query?: {
        /** @format int64 */
        promoItemId?: number;
        code?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RedeemRewardModelListDataResponseDto, any>({
        path: `/api/reward-configuration/find-redeem-code`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Redeem
     * @name RewardConfigurationGetAllRedeemRewardCreate
     * @request POST:/api/reward-configuration/get-all-redeem-reward
     * @secure
     */
    rewardConfigurationGetAllRedeemRewardCreate: (
      data: PagedRedeemRewardAssigmentRequestDto,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RedeemRewardModelIEnumerableDataResponseDto, any>({
        path: `/api/reward-configuration/get-all-redeem-reward`,
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
     * @tags Reward
     * @name RewardCreateCreate
     * @summary Tạo quà tặng
     * @request POST:/api/reward/create
     * @secure
     */
    rewardCreateCreate: (
      data: CreateRewardInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RewardModelListDataResponseDto, any>({
        path: `/api/reward/create`,
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
     * @tags Reward
     * @name RewardGetRewardsCreate
     * @summary Lấy thông tin quà tặng bằng reference
     * @request POST:/api/reward/get-rewards
     * @secure
     */
    rewardGetRewardsCreate: (
      data: string[],
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<StringArrayDataResponseDto, any>({
        path: `/api/reward/get-rewards`,
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
     * @tags Reward
     * @name RewardApproveDebtRewardsDetail
     * @summary Lấy thông tin quà tặng bằng reference
     * @request GET:/api/reward/approve-debt-rewards/{reference}
     * @secure
     */
    rewardApproveDebtRewardsDetail: (
      reference: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<StringArrayDataResponseDto, any>({
        path: `/api/reward/approve-debt-rewards/${reference}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rule
     * @name RulesCreateCreate
     * @summary Tạo mới rule
     * @request POST:/api/rules/create
     * @secure
     */
    rulesCreateCreate: (
      data: CreateRuleInput[],
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RuleModelDataResponseDto, any>({
        path: `/api/rules/create`,
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
     * @tags Rule
     * @name RulesUdpateUpdate
     * @summary Cập nhật rule
     * @request PUT:/api/rules/udpate
     * @secure
     */
    rulesUdpateUpdate: (
      data: UpdateRuleInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RuleModelDataResponseDto, any>({
        path: `/api/rules/udpate`,
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
     * @tags Rule
     * @name RulesGetCreate
     * @summary Lấy rule
     * @request POST:/api/rules/get/{id}
     * @secure
     */
    rulesGetCreate: (
      id: number,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RuleModelDataResponseDto, any>({
        path: `/api/rules/get/${id}`,
        method: 'POST',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rule
     * @name RulesGetAllCreate
     * @summary Lấy tất cả rule
     * @request POST:/api/rules/get-all
     * @secure
     */
    rulesGetAllCreate: (
      data: PagedRuleResultRequestInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RuleModelPagedResultDtoDataResponseDto, any>({
        path: `/api/rules/get-all`,
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
     * @tags Workflow
     * @name WorkflowCreateCreate
     * @summary Tạo mới  workflow
     * @request POST:/api/workflow/create
     * @secure
     */
    workflowCreateCreate: (
      data: CreateWorkflowInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkflowModelDataResponseDto, any>({
        path: `/api/workflow/create`,
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
     * @tags Workflow
     * @name WorkflowUpdateUpdate
     * @summary Cập nhật workflow
     * @request PUT:/api/workflow/update
     * @secure
     */
    workflowUpdateUpdate: (
      data: UpdateWorkflowDto,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkflowModelDataResponseDto, any>({
        path: `/api/workflow/update`,
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
     * @tags Workflow
     * @name WorkflowGetCreate
     * @request POST:/api/workflow/get/{id}
     * @secure
     */
    workflowGetCreate: (
      id: number,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkflowModelDataResponseDto, any>({
        path: `/api/workflow/get/${id}`,
        method: 'POST',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name WorkflowGetAllCreate
     * @summary Lấy danh sách workflow
     * @request POST:/api/workflow/get-all
     * @secure
     */
    workflowGetAllCreate: (
      data: PagedWorkflowResultRequestInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkflowModelPagedResultDtoDataResponseDto, any>({
        path: `/api/workflow/get-all`,
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
     * @tags Workflow
     * @name WorkflowUpdateRawDataCreate
     * @summary Cập nhật workflow
     * @request POST:/api/workflow/update-raw-data
     * @secure
     */
    workflowUpdateRawDataCreate: (
      data: UpdateRawDataInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkflowModelDataResponseDto, any>({
        path: `/api/workflow/update-raw-data`,
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
     * @tags Workflow
     * @name WorkflowDeleteDelete
     * @summary Xóa workflow
     * @request DELETE:/api/workflow/delete/{id}
     * @secure
     */
    workflowDeleteDelete: (
      id: number,
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
        path: `/api/workflow/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Workflow
     * @name WorkflowActiveWorkflowCreate
     * @summary Active workflow
     * @request POST:/api/workflow/active-workflow
     * @secure
     */
    workflowActiveWorkflowCreate: (
      data: JRulesEngine,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<WorkflowModelDataResponseDto, any>({
        path: `/api/workflow/active-workflow`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  connectDeals = {
    /**
     * No description
     *
     * @tags Common
     * @name ConnectDealsCreate
     * @summary Kiểm tra ưu đãi
     * @request POST:/connect-deals
     * @secure
     */
    connectDealsCreate: (
      data: ConnectDealsInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DealsModelListDataResponseDto, any>({
        path: `/connect-deals`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  connect = {
    /**
     * No description
     *
     * @tags Common
     * @name DealsCreate
     * @summary Kiểm tra khuyến mãi
     * @request POST:/connect/deals
     * @secure
     */
    dealsCreate: (
      data: EvaluateDealsDto,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EvaluateDealsModelListDataResponseDto, any>({
        path: `/connect/deals`,
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
     * @tags Common
     * @name PromotionCreate
     * @request POST:/connect/promotion
     * @secure
     */
    promotionCreate: (
      data: EvaluateInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DealsModelIEnumerableDataResponseDto, any>({
        path: `/connect/promotion`,
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
     * @tags Common
     * @name DeserializeHashCreate
     * @summary Lấy thông tin quà tặng
     * @request POST:/connect/deserialize-hash
     * @secure
     */
    deserializeHashCreate: (
      data: DeserializeHashDto,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<HashModelDataResponseDto, any>({
        path: `/connect/deserialize-hash`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
