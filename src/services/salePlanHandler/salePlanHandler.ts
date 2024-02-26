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

export interface AbstractForecastModel {
  /** @format uuid */
  id?: string;
  /** @maxLength 1024 */
  notes?: string | null;
  originalBudget?: MetricModel;
  target?: MetricModel;
  forecast?: MetricModel;
  real?: MetricModel;
}

export interface Assembly {
  definedTypes?: TypeInfo[] | null;
  exportedTypes?: Type[] | null;
  /** @deprecated */
  codeBase?: string | null;
  entryPoint?: MethodInfo;
  fullName?: string | null;
  imageRuntimeVersion?: string | null;
  isDynamic?: boolean;
  location?: string | null;
  reflectionOnly?: boolean;
  isCollectible?: boolean;
  isFullyTrusted?: boolean;
  customAttributes?: CustomAttributeData[] | null;
  /** @deprecated */
  escapedCodeBase?: string | null;
  manifestModule?: Module;
  modules?: Module[] | null;
  /** @deprecated */
  globalAssemblyCache?: boolean;
  /** @format int64 */
  hostContext?: number;
  securityRuleSet?: SecurityRuleSet;
}

export interface BudgetPlanModel {
  /** @format uuid */
  id?: string;
  productId?: string | null;
  productName?: string | null;
  /** @format double */
  price?: number | null;
  categories?: string[] | null;
  metric?: AbstractForecastModel;
}

/** @format int32 */
export enum CallingConventions {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value32 = 32,
  Value64 = 64,
}

export interface ConstructorInfo {
  name?: string | null;
  declaringType?: Type;
  reflectedType?: Type;
  module?: Module;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
  attributes?: MethodAttributes;
  methodImplementationFlags?: MethodImplAttributes;
  callingConvention?: CallingConventions;
  isAbstract?: boolean;
  isConstructor?: boolean;
  isFinal?: boolean;
  isHideBySig?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isVirtual?: boolean;
  isAssembly?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isConstructedGenericMethod?: boolean;
  isGenericMethod?: boolean;
  isGenericMethodDefinition?: boolean;
  containsGenericParameters?: boolean;
  methodHandle?: RuntimeMethodHandle;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  memberType?: MemberTypes;
}

/** Đối tượng DTO để tạo dự báo trừu tượng. */
export interface CreateAbstractForecastDto {
  /**
   * Ghi chú.
   * @maxLength 1024
   */
  notes?: string | null;
  originalBudget?: CreateMetricDto;
  target?: CreateMetricDto;
  forecast?: CreateMetricDto;
  real?: CreateMetricDto;
}

export interface CreateMetricDto {
  /** @format int32 */
  stock?: number;
  /** @format int32 */
  wholeSales?: number;
  /** @format int32 */
  retailSales?: number;
}

export interface CreateMonthliesByCustomerDto {
  /** @format uuid */
  planInsightId?: string;
  customerIds?: number[] | null;
}

export interface CreateOriginalBudgetDto {
  /** @format int32 */
  year?: number;
  notes?: string | null;
  /** @format uuid */
  saleManId?: string;
}

export interface CreatePlanBudget {
  /** @maxLength 100 */
  productId?: string | null;
  /** @maxLength 100 */
  partyId?: string | null;
  /** Đối tượng DTO để tạo dự báo trừu tượng. */
  metric?: CreateAbstractForecastDto;
  /** @format uuid */
  planId?: string;
}

export interface CreatePlanBudgetBase {
  /** @maxLength 100 */
  productId?: string | null;
  /** @maxLength 100 */
  partyId?: string | null;
  /** Đối tượng DTO để tạo dự báo trừu tượng. */
  metric?: CreateAbstractForecastDto;
}

/** DTO for creating a plan. */
export interface CreatePlanDto {
  /**
   * Lấy hoặc đặt giá trị của kế hoạch cha.
   * @format uuid
   */
  parentId?: string | null;
  planType?: PlanType;
  /** Lấy hoặc đặt ghi chú cho kế hoạch. */
  notes?: string | null;
  /** Đối tượng DTO để tạo dự báo trừu tượng. */
  metric?: CreateAbstractForecastDto;
  /** Gets or sets the list of plan budgets. */
  planBudgets?: CreatePlanBudgetBase[] | null;
  /** DTO for creating a plan. */
  childNodes?: CreatePlanDto;
}

export interface CreatePlanInsightDto {
  /** @format uuid */
  originalBudgetId?: string;
  quarter?: QuarterOfYear;
}

export interface CreateSalesMenDto {
  realmId?: string | null;
  emailAddress?: string | null;
  password?: string | null;
}

export interface CustomAttributeData {
  attributeType?: Type;
  constructor?: ConstructorInfo;
  constructorArguments?: CustomAttributeTypedArgument[] | null;
  namedArguments?: CustomAttributeNamedArgument[] | null;
}

export interface CustomAttributeNamedArgument {
  memberInfo?: MemberInfo;
  typedValue?: CustomAttributeTypedArgument;
  memberName?: string | null;
  isField?: boolean;
}

export interface CustomAttributeTypedArgument {
  argumentType?: Type;
  value?: any;
}

export interface CustomerInfo {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format date-time */
  lastModificationTime?: string | null;
  isDeleted?: boolean;
  locationId?: string | null;
  locationName?: string | null;
  dtCode?: string | null;
  /** @format uuid */
  saleManId?: string;
  saleMan?: SalesMan;
}

export interface CustomerInfoDelta {
  kind?: DeltaItemKind;
  structuredType?: Type;
  expectedClrType?: Type;
  updatableProperties?: string[] | null;
}

export interface CustomerInfoSingleResult {
  queryable?: CustomerInfo[] | null;
}

/** @format int32 */
export enum DeltaItemKind {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

/** @format int32 */
export enum EdmContainerElementKind {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

/** @format int32 */
export enum EdmExpressionKind {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value9 = 9,
  Value10 = 10,
  Value11 = 11,
  Value12 = 12,
  Value13 = 13,
  Value14 = 14,
  Value15 = 15,
  Value16 = 16,
  Value17 = 17,
  Value18 = 18,
  Value19 = 19,
  Value20 = 20,
  Value21 = 21,
  Value22 = 22,
  Value23 = 23,
  Value24 = 24,
  Value25 = 25,
}

/** @format int32 */
export enum EdmSchemaElementKind {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

/** @format int32 */
export enum EdmTypeKind {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value9 = 9,
}

/** @format int32 */
export enum EventAttributes {
  Value0 = 0,
  Value512 = 512,
  Value1024 = 1024,
}

export interface EventInfo {
  name?: string | null;
  declaringType?: Type;
  reflectedType?: Type;
  module?: Module;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
  memberType?: MemberTypes;
  attributes?: EventAttributes;
  isSpecialName?: boolean;
  addMethod?: MethodInfo;
  removeMethod?: MethodInfo;
  raiseMethod?: MethodInfo;
  isMulticast?: boolean;
  eventHandlerType?: Type;
}

/** @format int32 */
export enum FieldAttributes {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value256 = 256,
  Value512 = 512,
  Value1024 = 1024,
  Value4096 = 4096,
  Value8192 = 8192,
  Value32768 = 32768,
  Value38144 = 38144,
}

export interface FieldInfo {
  name?: string | null;
  declaringType?: Type;
  reflectedType?: Type;
  module?: Module;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
  memberType?: MemberTypes;
  attributes?: FieldAttributes;
  fieldType?: Type;
  isInitOnly?: boolean;
  isLiteral?: boolean;
  /** @deprecated */
  isNotSerialized?: boolean;
  isPinvokeImpl?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isAssembly?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  fieldHandle?: RuntimeFieldHandle;
}

/** @format int32 */
export enum GenericParameterAttributes {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value28 = 28,
}

export type ICustomAttributeProvider = object;

export type IEdmDirectValueAnnotationsManager = object;

export interface IEdmEntityContainer {
  elements?: IEdmEntityContainerElement[] | null;
  schemaElementKind?: EdmSchemaElementKind;
  namespace?: string | null;
  name?: string | null;
}

export interface IEdmEntityContainerElement {
  containerElementKind?: EdmContainerElementKind;
  container?: IEdmEntityContainer;
  name?: string | null;
}

export interface IEdmExpression {
  expressionKind?: EdmExpressionKind;
}

export interface IEdmModel {
  schemaElements?: IEdmSchemaElement[] | null;
  vocabularyAnnotations?: IEdmVocabularyAnnotation[] | null;
  referencedModels?: IEdmModel[] | null;
  declaredNamespaces?: string[] | null;
  directValueAnnotationsManager?: IEdmDirectValueAnnotationsManager;
  entityContainer?: IEdmEntityContainer;
}

export interface IEdmSchemaElement {
  schemaElementKind?: EdmSchemaElementKind;
  namespace?: string | null;
  name?: string | null;
}

export interface IEdmTerm {
  type?: IEdmTypeReference;
  appliesTo?: string | null;
  defaultValue?: string | null;
  schemaElementKind?: EdmSchemaElementKind;
  namespace?: string | null;
  name?: string | null;
}

export interface IEdmType {
  typeKind?: EdmTypeKind;
}

export interface IEdmTypeReference {
  isNullable?: boolean;
  definition?: IEdmType;
}

export type IEdmVocabularyAnnotatable = object;

export interface IEdmVocabularyAnnotation {
  qualifier?: string | null;
  term?: IEdmTerm;
  target?: IEdmVocabularyAnnotatable;
  value?: IEdmExpression;
}

export interface IEventData {
  /** @format date-time */
  eventTime?: string;
  eventSource?: any;
}

export type IntPtr = object;

/** @format int32 */
export enum LayoutKind {
  Value0 = 0,
  Value2 = 2,
  Value3 = 3,
}

export interface LoginModel {
  userLogin?: string | null;
  password?: string | null;
  realm?: string | null;
}

export interface MemberInfo {
  memberType?: MemberTypes;
  name?: string | null;
  declaringType?: Type;
  reflectedType?: Type;
  module?: Module;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
}

/** @format int32 */
export enum MemberTypes {
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value191 = 191,
}

/** @format int32 */
export enum MethodAttributes {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value256 = 256,
  Value512 = 512,
  Value1024 = 1024,
  Value2048 = 2048,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value32768 = 32768,
  Value53248 = 53248,
}

export interface MethodBase {
  memberType?: MemberTypes;
  name?: string | null;
  declaringType?: Type;
  reflectedType?: Type;
  module?: Module;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
  attributes?: MethodAttributes;
  methodImplementationFlags?: MethodImplAttributes;
  callingConvention?: CallingConventions;
  isAbstract?: boolean;
  isConstructor?: boolean;
  isFinal?: boolean;
  isHideBySig?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isVirtual?: boolean;
  isAssembly?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isConstructedGenericMethod?: boolean;
  isGenericMethod?: boolean;
  isGenericMethodDefinition?: boolean;
  containsGenericParameters?: boolean;
  methodHandle?: RuntimeMethodHandle;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
}

/** @format int32 */
export enum MethodImplAttributes {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value32 = 32,
  Value64 = 64,
  Value128 = 128,
  Value256 = 256,
  Value512 = 512,
  Value4096 = 4096,
  Value65535 = 65535,
}

export interface MethodInfo {
  name?: string | null;
  declaringType?: Type;
  reflectedType?: Type;
  module?: Module;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
  attributes?: MethodAttributes;
  methodImplementationFlags?: MethodImplAttributes;
  callingConvention?: CallingConventions;
  isAbstract?: boolean;
  isConstructor?: boolean;
  isFinal?: boolean;
  isHideBySig?: boolean;
  isSpecialName?: boolean;
  isStatic?: boolean;
  isVirtual?: boolean;
  isAssembly?: boolean;
  isFamily?: boolean;
  isFamilyAndAssembly?: boolean;
  isFamilyOrAssembly?: boolean;
  isPrivate?: boolean;
  isPublic?: boolean;
  isConstructedGenericMethod?: boolean;
  isGenericMethod?: boolean;
  isGenericMethodDefinition?: boolean;
  containsGenericParameters?: boolean;
  methodHandle?: RuntimeMethodHandle;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  memberType?: MemberTypes;
  returnParameter?: ParameterInfo;
  returnType?: Type;
  returnTypeCustomAttributes?: ICustomAttributeProvider;
}

export interface MetricModel {
  /** @format uuid */
  id?: string;
  /**
   * Tồn kho
   * Số lượng tồn kho tại thời điểm hiện tại
   * @format int32
   */
  stock?: number;
  /**
   * Whole sales : Số lượng đại lý mua vào(Số Lượng bán cho đại lý  trừ hàng bán trả lại)
   * @format int32
   */
  wholeSales?: number;
  /**
   * Retail Sales : Số lượng đại lý thực tế bán ra
   * @format int32
   */
  retailSales?: number;
  /** @format int32 */
  rso?: number;
}

export interface Module {
  assembly?: Assembly;
  fullyQualifiedName?: string | null;
  name?: string | null;
  /** @format int32 */
  mdStreamVersion?: number;
  /** @format uuid */
  moduleVersionId?: string;
  scopeName?: string | null;
  moduleHandle?: ModuleHandle;
  customAttributes?: CustomAttributeData[] | null;
  /** @format int32 */
  metadataToken?: number;
}

export interface ModuleHandle {
  /** @format int32 */
  mdStreamVersion?: number;
}

/** @format int32 */
export enum MonthType {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value9 = 9,
  Value10 = 10,
  Value11 = 11,
  Value12 = 12,
}

export interface MonthlyPlanModels {
  /** @format uuid */
  id?: string;
  monthType?: MonthType;
  /**
   * Mã đối tác.
   * @maxLength 100
   */
  partyId?: string | null;
  /**
   * Doanh số của kế hoạch.
   * @format double
   */
  target?: number;
  /**
   * Mã khách hàng.
   * @format int32
   */
  customerId?: number | null;
  /** Lấy hoặc đặt tập hợp các ngân sách kế hoạch. */
  planBudgets?: BudgetPlanModel[] | null;
}

export interface ODataEntitySetInfo {
  typeAnnotation?: ODataTypeAnnotation;
  /** @format uri */
  url?: string | null;
  name?: string | null;
  title?: string | null;
}

export interface ODataFunctionImportInfo {
  typeAnnotation?: ODataTypeAnnotation;
  /** @format uri */
  url?: string | null;
  name?: string | null;
  title?: string | null;
}

export interface ODataServiceDocument {
  typeAnnotation?: ODataTypeAnnotation;
  entitySets?: ODataEntitySetInfo[] | null;
  singletons?: ODataSingletonInfo[] | null;
  functionImports?: ODataFunctionImportInfo[] | null;
}

export interface ODataSingletonInfo {
  typeAnnotation?: ODataTypeAnnotation;
  /** @format uri */
  url?: string | null;
  name?: string | null;
  title?: string | null;
}

export interface ODataTypeAnnotation {
  typeName?: string | null;
}

export interface OriginalBudgetModel {
  /** @format uuid */
  id?: string;
  /** @format int32 */
  year?: number;
  notes?: string | null;
  approved?: boolean;
  monthlies?: MonthlyPlanModels[] | null;
}

export interface OriginalBudgetModelPagedResultDto {
  items?: OriginalBudgetModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

/** @format int32 */
export enum ParameterAttributes {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value4 = 4,
  Value8 = 8,
  Value16 = 16,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value32768 = 32768,
  Value61440 = 61440,
}

export interface ParameterInfo {
  attributes?: ParameterAttributes;
  member?: MemberInfo;
  name?: string | null;
  parameterType?: Type;
  /** @format int32 */
  position?: number;
  isIn?: boolean;
  isLcid?: boolean;
  isOptional?: boolean;
  isOut?: boolean;
  isRetval?: boolean;
  defaultValue?: any;
  rawDefaultValue?: any;
  hasDefaultValue?: boolean;
  customAttributes?: CustomAttributeData[] | null;
  /** @format int32 */
  metadataToken?: number;
}

export interface PlanBudgetModel {
  /** @format uuid */
  id?: string;
  /**
   * Mã sản phẩm.
   * @maxLength 100
   */
  productId?: string | null;
  /**
   * Mã đối tác.
   * @maxLength 100
   */
  partyId?: string | null;
  metric?: AbstractForecastModel;
}

export interface PlanInsightModel {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  originalBudgetId?: string;
  quarter?: QuarterOfYear;
  monthlies?: MonthlyPlanModels[] | null;
}

export interface PlanInsightModelPagedResultDto {
  items?: PlanInsightModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PlanModel {
  /** @format uuid */
  id?: string;
  /** Xác định xem kế hoạch đã được phê duyệt hay chưa. */
  approved?: boolean;
  /**
   * Lấy hoặc đặt giá trị của kế hoạch cha.
   * @format uuid
   */
  parentId?: string | null;
  planType?: PlanType;
  /** Lấy hoặc đặt ghi chú cho kế hoạch. */
  notes?: string | null;
  parent?: PlanModel;
  metric?: AbstractForecastModel;
  saleMan?: SalesMenModel;
  /** Lấy hoặc đặt tập hợp các ngân sách kế hoạch. */
  planBudgets?: PlanBudgetModel[] | null;
  /** Lấy hoặc đặt tập hợp các kế hoạch con. */
  plans?: PlanModel[] | null;
}

export interface PlanModelPagedResultDto {
  items?: PlanModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

/** @format int32 */
export enum PlanType {
  Value1000 = 1000,
  Value2000 = 2000,
  Value3000 = 3000,
}

/** @format int32 */
export enum PropertyAttributes {
  Value0 = 0,
  Value512 = 512,
  Value1024 = 1024,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value32768 = 32768,
  Value62464 = 62464,
}

export interface PropertyInfo {
  name?: string | null;
  declaringType?: Type;
  reflectedType?: Type;
  module?: Module;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
  memberType?: MemberTypes;
  propertyType?: Type;
  attributes?: PropertyAttributes;
  isSpecialName?: boolean;
  canRead?: boolean;
  canWrite?: boolean;
  getMethod?: MethodInfo;
  setMethod?: MethodInfo;
}

/** @format int32 */
export enum QuarterOfYear {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

export interface RuntimeFieldHandle {
  value?: IntPtr;
}

export interface RuntimeMethodHandle {
  value?: IntPtr;
}

export interface RuntimeTypeHandle {
  value?: IntPtr;
}

export interface SaleAgencyModel {
  /** @format int32 */
  staffId?: number;
  agencyCode?: string | null;
  agencyName?: string | null;
  agencyPhone?: string | null;
  agencyAddress?: string | null;
}

export interface SalesMan {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  creatorUser?: string;
  /** @format date-time */
  creationTime?: string;
  /** @format uuid */
  lastModifierUser?: string;
  /** @format date-time */
  lastModificationTime?: string | null;
  isDeleted?: boolean;
  /** @format uuid */
  userId?: string | null;
  /** @maxLength 128 */
  emailAddress?: string | null;
  /** @maxLength 128 */
  realmId?: string | null;
  /** @format int32 */
  employeeId?: number | null;
  /** @format uuid */
  partyId?: string | null;
  stringCipher?: string | null;
  info?: CustomerInfo;
  domainEvents?: IEventData[] | null;
}

export interface SalesMenModel {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  userId?: string | null;
  realmId?: string | null;
  /** @format uuid */
  partyId?: string | null;
}

export interface SalesMenModelPagedResultDto {
  items?: SalesMenModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

/** @format int32 */
export enum SecurityRuleSet {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface StructLayoutAttribute {
  typeId?: any;
  value?: LayoutKind;
}

export interface Type {
  name?: string | null;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
  isInterface?: boolean;
  memberType?: MemberTypes;
  namespace?: string | null;
  assemblyQualifiedName?: string | null;
  fullName?: string | null;
  assembly?: Assembly;
  module?: Module;
  isNested?: boolean;
  declaringType?: Type;
  declaringMethod?: MethodBase;
  reflectedType?: Type;
  underlyingSystemType?: Type;
  isTypeDefinition?: boolean;
  isArray?: boolean;
  isByRef?: boolean;
  isPointer?: boolean;
  isConstructedGenericType?: boolean;
  isGenericParameter?: boolean;
  isGenericTypeParameter?: boolean;
  isGenericMethodParameter?: boolean;
  isGenericType?: boolean;
  isGenericTypeDefinition?: boolean;
  isSZArray?: boolean;
  isVariableBoundArray?: boolean;
  isByRefLike?: boolean;
  isFunctionPointer?: boolean;
  isUnmanagedFunctionPointer?: boolean;
  hasElementType?: boolean;
  genericTypeArguments?: Type[] | null;
  /** @format int32 */
  genericParameterPosition?: number;
  genericParameterAttributes?: GenericParameterAttributes;
  attributes?: TypeAttributes;
  isAbstract?: boolean;
  isImport?: boolean;
  isSealed?: boolean;
  isSpecialName?: boolean;
  isClass?: boolean;
  isNestedAssembly?: boolean;
  isNestedFamANDAssem?: boolean;
  isNestedFamily?: boolean;
  isNestedFamORAssem?: boolean;
  isNestedPrivate?: boolean;
  isNestedPublic?: boolean;
  isNotPublic?: boolean;
  isPublic?: boolean;
  isAutoLayout?: boolean;
  isExplicitLayout?: boolean;
  isLayoutSequential?: boolean;
  isAnsiClass?: boolean;
  isAutoClass?: boolean;
  isUnicodeClass?: boolean;
  isCOMObject?: boolean;
  isContextful?: boolean;
  isEnum?: boolean;
  isMarshalByRef?: boolean;
  isPrimitive?: boolean;
  isValueType?: boolean;
  isSignatureType?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  structLayoutAttribute?: StructLayoutAttribute;
  typeInitializer?: ConstructorInfo;
  typeHandle?: RuntimeTypeHandle;
  /** @format uuid */
  guid?: string;
  baseType?: Type;
  /** @deprecated */
  isSerializable?: boolean;
  containsGenericParameters?: boolean;
  isVisible?: boolean;
}

/** @format int32 */
export enum TypeAttributes {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value16 = 16,
  Value24 = 24,
  Value32 = 32,
  Value128 = 128,
  Value256 = 256,
  Value1024 = 1024,
  Value2048 = 2048,
  Value4096 = 4096,
  Value8192 = 8192,
  Value16384 = 16384,
  Value65536 = 65536,
  Value131072 = 131072,
  Value196608 = 196608,
  Value262144 = 262144,
  Value264192 = 264192,
  Value1048576 = 1048576,
  Value12582912 = 12582912,
}

export interface TypeInfo {
  name?: string | null;
  customAttributes?: CustomAttributeData[] | null;
  isCollectible?: boolean;
  /** @format int32 */
  metadataToken?: number;
  isInterface?: boolean;
  memberType?: MemberTypes;
  namespace?: string | null;
  assemblyQualifiedName?: string | null;
  fullName?: string | null;
  assembly?: Assembly;
  module?: Module;
  isNested?: boolean;
  declaringType?: Type;
  declaringMethod?: MethodBase;
  reflectedType?: Type;
  underlyingSystemType?: Type;
  isTypeDefinition?: boolean;
  isArray?: boolean;
  isByRef?: boolean;
  isPointer?: boolean;
  isConstructedGenericType?: boolean;
  isGenericParameter?: boolean;
  isGenericTypeParameter?: boolean;
  isGenericMethodParameter?: boolean;
  isGenericType?: boolean;
  isGenericTypeDefinition?: boolean;
  isSZArray?: boolean;
  isVariableBoundArray?: boolean;
  isByRefLike?: boolean;
  isFunctionPointer?: boolean;
  isUnmanagedFunctionPointer?: boolean;
  hasElementType?: boolean;
  genericTypeArguments?: Type[] | null;
  /** @format int32 */
  genericParameterPosition?: number;
  genericParameterAttributes?: GenericParameterAttributes;
  attributes?: TypeAttributes;
  isAbstract?: boolean;
  isImport?: boolean;
  isSealed?: boolean;
  isSpecialName?: boolean;
  isClass?: boolean;
  isNestedAssembly?: boolean;
  isNestedFamANDAssem?: boolean;
  isNestedFamily?: boolean;
  isNestedFamORAssem?: boolean;
  isNestedPrivate?: boolean;
  isNestedPublic?: boolean;
  isNotPublic?: boolean;
  isPublic?: boolean;
  isAutoLayout?: boolean;
  isExplicitLayout?: boolean;
  isLayoutSequential?: boolean;
  isAnsiClass?: boolean;
  isAutoClass?: boolean;
  isUnicodeClass?: boolean;
  isCOMObject?: boolean;
  isContextful?: boolean;
  isEnum?: boolean;
  isMarshalByRef?: boolean;
  isPrimitive?: boolean;
  isValueType?: boolean;
  isSignatureType?: boolean;
  isSecurityCritical?: boolean;
  isSecuritySafeCritical?: boolean;
  isSecurityTransparent?: boolean;
  structLayoutAttribute?: StructLayoutAttribute;
  typeInitializer?: ConstructorInfo;
  typeHandle?: RuntimeTypeHandle;
  /** @format uuid */
  guid?: string;
  baseType?: Type;
  /** @deprecated */
  isSerializable?: boolean;
  containsGenericParameters?: boolean;
  isVisible?: boolean;
  genericTypeParameters?: Type[] | null;
  declaredConstructors?: ConstructorInfo[] | null;
  declaredEvents?: EventInfo[] | null;
  declaredFields?: FieldInfo[] | null;
  declaredMembers?: MemberInfo[] | null;
  declaredMethods?: MethodInfo[] | null;
  declaredNestedTypes?: TypeInfo[] | null;
  declaredProperties?: PropertyInfo[] | null;
  implementedInterfaces?: Type[] | null;
}

export interface UpdateAbstractForecastDto {
  /** @format uuid */
  id?: string;
  /**
   * Ghi chú.
   * @maxLength 1024
   */
  notes?: string | null;
}

export interface UpdateBudgetPlan {
  /** @format uuid */
  budgetPlanId?: string | null;
  /** @maxLength 100 */
  productId?: string | null;
  /** @format uuid */
  monthlyId?: string | null;
  /** @maxLength 1024 */
  notes?: string | null;
  originalBudget?: CreateMetricDto;
  target?: CreateMetricDto;
  forecast?: CreateMetricDto;
  real?: CreateMetricDto;
}

export interface UpdateMetricDto {
  /** @format int32 */
  stock?: number;
  /** @format int32 */
  wholeSales?: number;
  /** @format int32 */
  retailSales?: number;
  /** @format uuid */
  id?: string;
}

export interface UpdateOriginalBudgetDto {
  /** @format int32 */
  year?: number;
  notes?: string | null;
  /** @format uuid */
  saleManId?: string;
  /** @format uuid */
  id?: string;
  approved?: boolean;
}

export interface UpdatePlanBudget {
  /** @format uuid */
  id?: string;
  /** @maxLength 100 */
  productId?: string | null;
  /** @maxLength 100 */
  partyId?: string | null;
  /**
   * Gets or sets the metric for the plan.
   * @format uuid
   */
  metricId?: string | null;
}

export interface UpdatePlanDto {
  /** @format uuid */
  id?: string;
  /** Xác định xem kế hoạch đã được phê duyệt hay chưa. */
  approved?: boolean;
  /**
   * Lấy hoặc đặt giá trị của kế hoạch cha.
   * @format uuid
   */
  parentId?: string | null;
  planType?: PlanType;
  /** Lấy hoặc đặt ghi chú cho kế hoạch. */
  notes?: string | null;
  /**
   * Gets or sets the metric for the plan.
   * @format uuid
   */
  metricId?: string | null;
}

export interface UpdatePlanInsightDto {
  /** @format uuid */
  id?: string;
  approved?: boolean;
}

export interface UpdateSalesMenDto {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  partyId?: string;
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
 * @title Testing
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags AbstractForecast
     * @name ServicesAppAbstractforecastCreateabstractforecastCreate
     * @request POST:/api/services/app/abstractforecast/createabstractforecast
     * @secure
     */
    servicesAppAbstractforecastCreateabstractforecastCreate: (
      data: CreateAbstractForecastDto,
      params: RequestParams = {}
    ) =>
      this.request<AbstractForecastModel, any>({
        path: `/api/services/app/abstractforecast/createabstractforecast`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AbstractForecast
     * @name ServicesAppAbstractforecastUpdateabstractforecastUpdate
     * @request PUT:/api/services/app/abstractforecast/updateabstractforecast
     * @secure
     */
    servicesAppAbstractforecastUpdateabstractforecastUpdate: (
      data: UpdateAbstractForecastDto,
      params: RequestParams = {}
    ) =>
      this.request<AbstractForecastModel, any>({
        path: `/api/services/app/abstractforecast/updateabstractforecast`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Keycloak
     * @name ServicesAppKeycloakUserloginCreate
     * @request POST:/api/services/app/keycloak/userlogin
     * @secure
     */
    servicesAppKeycloakUserloginCreate: (data: LoginModel, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/services/app/keycloak/userlogin`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metric
     * @name ServicesAppMetricCreatemetricCreate
     * @request POST:/api/services/app/metric/createmetric
     * @secure
     */
    servicesAppMetricCreatemetricCreate: (data: CreateMetricDto, params: RequestParams = {}) =>
      this.request<MetricModel, any>({
        path: `/api/services/app/metric/createmetric`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metric
     * @name ServicesAppMetricUpdatemetricUpdate
     * @request PUT:/api/services/app/metric/updatemetric
     * @secure
     */
    servicesAppMetricUpdatemetricUpdate: (data: UpdateMetricDto, params: RequestParams = {}) =>
      this.request<MetricModel, any>({
        path: `/api/services/app/metric/updatemetric`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OriginalBudget
     * @name ServicesAppOriginalbudgetCreateCreate
     * @request POST:/api/services/app/originalbudget/create
     * @secure
     */
    servicesAppOriginalbudgetCreateCreate: (
      data: CreateOriginalBudgetDto,
      params: RequestParams = {}
    ) =>
      this.request<OriginalBudgetModel, any>({
        path: `/api/services/app/originalbudget/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OriginalBudget
     * @name ServicesAppOriginalbudgetGetallList
     * @request GET:/api/services/app/originalbudget/getall
     * @secure
     */
    servicesAppOriginalbudgetGetallList: (
      query?: {
        /** Giá trị tìm kiếm */
        Keywords?: string;
        /** Trường tìm kiếm */
        Filter?: Record<string, string | null>;
        /**
         * @format int32
         * @min 0
         * @max 2147483647
         */
        SkipCount?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MaxResultCount?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<OriginalBudgetModelPagedResultDto, any>({
        path: `/api/services/app/originalbudget/getall`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OriginalBudget
     * @name ServicesAppOriginalbudgetGetbudgetsList
     * @request GET:/api/services/app/originalbudget/getbudgets
     * @secure
     */
    servicesAppOriginalbudgetGetbudgetsList: (
      query?: {
        /** @format uuid */
        input?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BudgetPlanModel[], any>({
        path: `/api/services/app/originalbudget/getbudgets`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OriginalBudget
     * @name ServicesAppOriginalbudgetInsertorupdatebudgetplanCreate
     * @request POST:/api/services/app/originalbudget/insertorupdatebudgetplan
     * @secure
     */
    servicesAppOriginalbudgetInsertorupdatebudgetplanCreate: (
      data: UpdateBudgetPlan,
      params: RequestParams = {}
    ) =>
      this.request<boolean, any>({
        path: `/api/services/app/originalbudget/insertorupdatebudgetplan`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OriginalBudget
     * @name ServicesAppOriginalbudgetGetList
     * @request GET:/api/services/app/originalbudget/get
     * @secure
     */
    servicesAppOriginalbudgetGetList: (
      query?: {
        /** @format uuid */
        Id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<OriginalBudgetModel, any>({
        path: `/api/services/app/originalbudget/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OriginalBudget
     * @name ServicesAppOriginalbudgetUpdateUpdate
     * @request PUT:/api/services/app/originalbudget/update
     * @secure
     */
    servicesAppOriginalbudgetUpdateUpdate: (
      data: UpdateOriginalBudgetDto,
      params: RequestParams = {}
    ) =>
      this.request<OriginalBudgetModel, any>({
        path: `/api/services/app/originalbudget/update`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags OriginalBudget
     * @name ServicesAppOriginalbudgetDeleteDelete
     * @request DELETE:/api/services/app/originalbudget/delete
     * @secure
     */
    servicesAppOriginalbudgetDeleteDelete: (
      query?: {
        /** @format uuid */
        Id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/services/app/originalbudget/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name ServicesAppPlanCreateplanCreate
     * @summary Tạo kế hoạch mới
     * @request POST:/api/services/app/plan/createplan
     * @secure
     */
    servicesAppPlanCreateplanCreate: (data: CreatePlanDto, params: RequestParams = {}) =>
      this.request<PlanModel, any>({
        path: `/api/services/app/plan/createplan`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name ServicesAppPlanUpdateplanUpdate
     * @summary Cập nhật kế hoạch
     * @request PUT:/api/services/app/plan/updateplan
     * @secure
     */
    servicesAppPlanUpdateplanUpdate: (data: UpdatePlanDto, params: RequestParams = {}) =>
      this.request<PlanModel, any>({
        path: `/api/services/app/plan/updateplan`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name ServicesAppPlanDeleteplanDelete
     * @summary Xóa kế hoạch
     * @request DELETE:/api/services/app/plan/deleteplan
     * @secure
     */
    servicesAppPlanDeleteplanDelete: (
      query?: {
        /**
         * Id của kế hoạch cần xóa
         * @format uuid
         */
        id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/services/app/plan/deleteplan`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name ServicesAppPlanGetList
     * @summary Lấy thông tin kế hoạch theo Id
     * @request GET:/api/services/app/plan/get
     * @secure
     */
    servicesAppPlanGetList: (
      query?: {
        /**
         * Id của kế hoạch
         * @format uuid
         */
        id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlanModel, any>({
        path: `/api/services/app/plan/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name ServicesAppPlanGetplansList
     * @summary Lấy danh sách kế hoạch
     * @request GET:/api/services/app/plan/getplans
     * @secure
     */
    servicesAppPlanGetplansList: (
      query?: {
        /** Giá trị tìm kiếm */
        Keywords?: string;
        /** @format int32 */
        SkipCount?: number;
        /** @format int32 */
        MaxResultCount?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlanModelPagedResultDto, any>({
        path: `/api/services/app/plan/getplans`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PlanBudget
     * @name ServicesAppPlanbudgetCreateplanbudgetCreate
     * @request POST:/api/services/app/planbudget/createplanbudget
     * @secure
     */
    servicesAppPlanbudgetCreateplanbudgetCreate: (
      data: CreatePlanBudget,
      params: RequestParams = {}
    ) =>
      this.request<PlanBudgetModel, any>({
        path: `/api/services/app/planbudget/createplanbudget`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PlanBudget
     * @name ServicesAppPlanbudgetUpdateplanbudgetUpdate
     * @request PUT:/api/services/app/planbudget/updateplanbudget
     * @secure
     */
    servicesAppPlanbudgetUpdateplanbudgetUpdate: (
      data: UpdatePlanBudget,
      params: RequestParams = {}
    ) =>
      this.request<PlanBudgetModel, any>({
        path: `/api/services/app/planbudget/updateplanbudget`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PlanInsight
     * @name ServicesAppPlaninsightCreateCreate
     * @request POST:/api/services/app/planinsight/create
     * @secure
     */
    servicesAppPlaninsightCreateCreate: (data: CreatePlanInsightDto, params: RequestParams = {}) =>
      this.request<PlanInsightModel, any>({
        path: `/api/services/app/planinsight/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PlanInsight
     * @name ServicesAppPlaninsightAppendcustomersCreate
     * @request POST:/api/services/app/planinsight/appendcustomers
     * @secure
     */
    servicesAppPlaninsightAppendcustomersCreate: (
      data: CreateMonthliesByCustomerDto,
      params: RequestParams = {}
    ) =>
      this.request<PlanInsightModel, any>({
        path: `/api/services/app/planinsight/appendcustomers`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PlanInsight
     * @name ServicesAppPlaninsightGetList
     * @request GET:/api/services/app/planinsight/get
     * @secure
     */
    servicesAppPlaninsightGetList: (
      query?: {
        /** @format uuid */
        Id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlanInsightModel, any>({
        path: `/api/services/app/planinsight/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PlanInsight
     * @name ServicesAppPlaninsightGetallList
     * @request GET:/api/services/app/planinsight/getall
     * @secure
     */
    servicesAppPlaninsightGetallList: (
      query?: {
        /** Giá trị tìm kiếm */
        Keywords?: string;
        /** Trường tìm kiếm */
        Filter?: Record<string, string | null>;
        /**
         * @format int32
         * @min 0
         * @max 2147483647
         */
        SkipCount?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MaxResultCount?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlanInsightModelPagedResultDto, any>({
        path: `/api/services/app/planinsight/getall`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PlanInsight
     * @name ServicesAppPlaninsightUpdateUpdate
     * @request PUT:/api/services/app/planinsight/update
     * @secure
     */
    servicesAppPlaninsightUpdateUpdate: (data: UpdatePlanInsightDto, params: RequestParams = {}) =>
      this.request<PlanInsightModel, any>({
        path: `/api/services/app/planinsight/update`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PlanInsight
     * @name ServicesAppPlaninsightDeleteDelete
     * @request DELETE:/api/services/app/planinsight/delete
     * @secure
     */
    servicesAppPlaninsightDeleteDelete: (
      query?: {
        /** @format uuid */
        Id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/services/app/planinsight/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesInfo
     * @name ServicesAppSalesinfoCreateCreate
     * @request POST:/api/services/app/salesinfo/create
     * @secure
     */
    servicesAppSalesinfoCreateCreate: (data: CreateSalesMenDto, params: RequestParams = {}) =>
      this.request<SalesMenModel, any>({
        path: `/api/services/app/salesinfo/create`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesInfo
     * @name ServicesAppSalesinfoGetList
     * @request GET:/api/services/app/salesinfo/get
     * @secure
     */
    servicesAppSalesinfoGetList: (
      query?: {
        /** @format uuid */
        Id?: string;
        Ids?: string[];
        Keyword?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<SalesMenModel, any>({
        path: `/api/services/app/salesinfo/get`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesInfo
     * @name ServicesAppSalesinfoGetallList
     * @request GET:/api/services/app/salesinfo/getall
     * @secure
     */
    servicesAppSalesinfoGetallList: (
      query?: {
        /** Giá trị tìm kiếm */
        Keywords?: string;
        /** Trường tìm kiếm */
        Filter?: Record<string, string | null>;
        /**
         * @format int32
         * @min 0
         * @max 2147483647
         */
        SkipCount?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MaxResultCount?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<SalesMenModelPagedResultDto, any>({
        path: `/api/services/app/salesinfo/getall`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesInfo
     * @name ServicesAppSalesinfoGettemplateList
     * @request GET:/api/services/app/salesinfo/gettemplate
     * @secure
     */
    servicesAppSalesinfoGettemplateList: (
      query?: {
        /** @format int32 */
        SaleId?: number;
        /** @format date-time */
        Time?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PlanBudgetModel[], any>({
        path: `/api/services/app/salesinfo/gettemplate`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesInfo
     * @name ServicesAppSalesinfoGetagenciesList
     * @request GET:/api/services/app/salesinfo/getagencies
     * @secure
     */
    servicesAppSalesinfoGetagenciesList: (
      query?: {
        /** @format uuid */
        SaleManId?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<SaleAgencyModel[], any>({
        path: `/api/services/app/salesinfo/getagencies`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesInfo
     * @name ServicesAppSalesinfoUpdateUpdate
     * @request PUT:/api/services/app/salesinfo/update
     * @secure
     */
    servicesAppSalesinfoUpdateUpdate: (data: UpdateSalesMenDto, params: RequestParams = {}) =>
      this.request<SalesMenModel, any>({
        path: `/api/services/app/salesinfo/update`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SalesInfo
     * @name ServicesAppSalesinfoDeleteDelete
     * @request DELETE:/api/services/app/salesinfo/delete
     * @secure
     */
    servicesAppSalesinfoDeleteDelete: (
      query?: {
        /** @format uuid */
        Id?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/api/services/app/salesinfo/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),
  };
  odata = {
    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfos
     * @request GET:/odata/customerinfos
     * @secure
     */
    odataCustomerInfos: (params: RequestParams = {}) =>
      this.request<CustomerInfo[], any>({
        path: `/odata/customerinfos`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfos2
     * @request POST:/odata/customerinfos
     * @originalName odataCustomerInfos
     * @duplicate
     * @secure
     */
    odataCustomerInfos2: (data: CustomerInfo, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/odata/customerinfos`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosCount
     * @request GET:/odata/customerinfos/$count
     * @secure
     */
    odataCustomerInfosCount: (params: RequestParams = {}) =>
      this.request<CustomerInfo[], any>({
        path: `/odata/customerinfos/$count`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosKey
     * @request GET:/odata/customerinfos({key})
     * @secure
     */
    odataCustomerInfosKey: (
      key: string,
      query?: {
        /** @format uuid */
        key?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerInfoSingleResult, any>({
        path: `/odata/customerinfos(${key})`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosKey2
     * @request PATCH:/odata/customerinfos({key})
     * @originalName odataCustomerInfosKey
     * @duplicate
     * @secure
     */
    odataCustomerInfosKey2: (
      key: string,
      data: CustomerInfoDelta,
      query?: {
        /** @format uuid */
        key?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/odata/customerinfos(${key})`,
        method: 'PATCH',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosKey3
     * @request PUT:/odata/customerinfos({key})
     * @originalName odataCustomerInfosKey
     * @duplicate
     * @secure
     */
    odataCustomerInfosKey3: (
      key: string,
      data: CustomerInfo,
      query?: {
        /** @format uuid */
        key?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/odata/customerinfos(${key})`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosKey4
     * @request DELETE:/odata/customerinfos({key})
     * @originalName odataCustomerInfosKey
     * @duplicate
     * @secure
     */
    odataCustomerInfosKey4: (
      key: string,
      query?: {
        /** @format uuid */
        key?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/odata/customerinfos(${key})`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosKey5
     * @request GET:/odata/customerinfos/{key}
     * @originalName odataCustomerInfosKey
     * @duplicate
     * @secure
     */
    odataCustomerInfosKey5: (
      key: string,
      query?: {
        /** @format uuid */
        key?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerInfoSingleResult, any>({
        path: `/odata/customerinfos/${key}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosKey6
     * @request PATCH:/odata/customerinfos/{key}
     * @originalName odataCustomerInfosKey
     * @duplicate
     * @secure
     */
    odataCustomerInfosKey6: (
      key: string,
      data: CustomerInfoDelta,
      query?: {
        /** @format uuid */
        key?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/odata/customerinfos/${key}`,
        method: 'PATCH',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosKey7
     * @request PUT:/odata/customerinfos/{key}
     * @originalName odataCustomerInfosKey
     * @duplicate
     * @secure
     */
    odataCustomerInfosKey7: (
      key: string,
      data: CustomerInfo,
      query?: {
        /** @format uuid */
        key?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/odata/customerinfos/${key}`,
        method: 'PUT',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerInfos
     * @name OdataCustomerInfosKey8
     * @request DELETE:/odata/customerinfos/{key}
     * @originalName odataCustomerInfosKey
     * @duplicate
     * @secure
     */
    odataCustomerInfosKey8: (
      key: string,
      query?: {
        /** @format uuid */
        key?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/odata/customerinfos/${key}`,
        method: 'DELETE',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name OdataMetadata
     * @request GET:/odata/$metadata
     * @secure
     */
    odataMetadata: (params: RequestParams = {}) =>
      this.request<IEdmModel, any>({
        path: `/odata/$metadata`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Metadata
     * @name Odata
     * @request GET:/odata
     * @secure
     */
    odata: (params: RequestParams = {}) =>
      this.request<ODataServiceDocument, any>({
        path: `/odata`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
