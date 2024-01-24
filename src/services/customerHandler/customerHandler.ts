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

export interface AttributeModel {
  /** @format uuid */
  id?: string;
  name?: string | null;
  displayName?: string | null;
  dataType?: EDataType;
  isActive?: boolean;
  /** @format date-time */
  creationTime?: string;
}

export interface AttributeModelPagedResultDto {
  items?: AttributeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface AttributeModelPagedResultDtoSuccessResponseDto {
  data?: AttributeModelPagedResultDto;
  errorCodes?: string[] | null;
  isSuccess?: boolean;
}

export interface AttributeModelSuccessResponseDto {
  data?: AttributeModel;
  errorCodes?: string[] | null;
  isSuccess?: boolean;
}

export interface BillingCustomerModel {
  /** @format uuid */
  id?: string;
  /**
   * Id KH (đại lý).
   * @format uuid
   */
  customerId?: string | null;
  /**
   * Id KH (đại lý).
   * @format uuid
   */
  partyId?: string | null;
  /** Tên liên lạc. */
  companyName?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Mã số thuế. */
  taxCode?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /** Tên quốc gia. */
  countryName?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /** Tên vùng. */
  provinceName?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /** Tên quận. */
  districtName?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  /** Tên phường. */
  wardName?: string | null;
  /** Mặc định. */
  isDefault?: boolean;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
}

export interface BillingCustomerModelDataResponseDto {
  data?: BillingCustomerModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface BillingCustomerModelPagedResultDto {
  items?: BillingCustomerModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface BillingCustomerModelPagedResultDtoDataResponseDto {
  data?: BillingCustomerModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface BooleanDataResponseDto {
  data?: boolean;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface BooleanSuccessResponseDto {
  data?: boolean;
  errorCodes?: string[] | null;
  isSuccess?: boolean;
}

export interface BranchModel {
  /** @format uuid */
  id?: string;
  /** Tên party (thực thể/ đối tượng). */
  name?: string | null;
  /**
   * Id loại party (thực thể/ đối tượng).
   * @format uuid
   */
  partyTypeId?: string;
  /** Số ĐT. */
  telePhoneNumber?: string | null;
  /** Address. */
  addressLine?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  /** Tên loại party (thực thể/ đối tượng). */
  partyTypeName?: string | null;
  /** Đang hoạt động. */
  isActive?: boolean;
  /** Tên quốc gia. */
  countryName?: string | null;
  /** Tên tỉnh thành. */
  provinceName?: string | null;
  /** Tên quận huyện. */
  districtName?: string | null;
  /** Tên phường xã. */
  wardName?: string | null;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Id KH/nhân viên/chi nhánh.
   * @format uuid
   */
  partyRoleId?: string;
  /** Mã chi nhánh logistic. */
  branchCode?: string | null;
  /** @format uuid */
  contactMethodIsDefaultId?: string;
}

export interface BranchModelPagedResultDto {
  items?: BranchModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface BranchModelPagedResultDtoDataResponseDto {
  data?: BranchModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ContactMethodTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại phương thức liên lạc. */
  name?: string | null;
}

export interface ContactMethodTypeModelDataResponseDto {
  data?: ContactMethodTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ContactMethodTypeModelPagedResultDto {
  items?: ContactMethodTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ContactMethodTypeModelPagedResultDtoDataResponseDto {
  data?: ContactMethodTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CreateAttributeModel {
  name?: string | null;
  displayName?: string | null;
  dataType?: EDataType;
  isActive?: boolean;
}

export interface CreateAtttributeModel {
  /**
   * Id field.
   * @format uuid
   */
  attributeId?: string | null;
  /** Tên field. */
  attributeName?: string | null;
  /** Giá trị. */
  value?: string | null;
  dataType?: EDataType;
}

export interface CreateBillingCustomerModel {
  /**
   * Id KH (đại lý).
   * @format uuid
   */
  partyId?: string | null;
  /** Tên liên lạc. */
  companyName?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Tên liên lạc. */
  taxCode?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  /** Mặc định. */
  isDefault?: boolean;
}

export interface CreateContactMethodTypeModel {
  /** Tên loại phương thức liên lạc. */
  name?: string | null;
}

export interface CreateCustomerSegmentModel {
  /**
   * Id loại cụm khách hàng.
   * @format uuid
   */
  customerSegmentTypeId?: string;
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
}

export interface CreateCustomerSegmentTypeModel {
  /** Tên loại cụm khách hàng. */
  name?: string | null;
}

export interface CreateCustomerTypeGroupModel {
  /** Tên loại nhóm khách hàng. */
  name?: string | null;
}

export interface CreateCustomerTypeModel {
  /** Tên loại khách hàng. */
  name?: string | null;
  /**
   * Id loại nhóm khách hàng.
   * @format uuid
   */
  customerTypeGroupId?: string;
}

export interface CreateEmployeeTypeModel {
  /** Tên loại nhân viên. */
  name?: string | null;
  /** Diễn giải. */
  desc?: string | null;
}

export interface CreateMigrateCustomerModel {
  /** @format uuid */
  idPLAT?: string;
  /** @format int32 */
  idVML?: number;
}

export interface CreatePartyAffiliationModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
  /**
   * Id sub party (thực thể/ đối tượng con).
   * @format uuid
   */
  subPartyId?: string;
  /**
   * Id loại mối liên hệ giữa các party (thực thể/ đối tượng).
   * @format uuid
   */
  partyAffiliationTypeId?: string;
}

export interface CreatePartyAffiliationTypeModel {
  /** Tên loại mối liên hệ giữa các party (thực thể/ đối tượng). */
  name?: string | null;
  /** Mô tả loại mối liên hệ giữa các party (thực thể/ đối tượng). */
  description?: string | null;
}

export interface CreatePartyContactByRoleTypeModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string | null;
  /**
   * Id loại phương thức liên hệ.
   * @format uuid
   */
  contactMethodTypeId?: string | null;
  /** Tên liên lạc. */
  contactName?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  addressType?: EAddressType;
  /** Mặc định. */
  isDefault?: boolean;
  /**
   * Id loại role party (thực thể/ đối tượng).
   * @format uuid
   */
  partyRoleTypeId?: string | null;
}

export interface CreatePartyContactModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string | null;
  /**
   * Id loại phương thức liên hệ.
   * @format uuid
   */
  contactMethodTypeId?: string | null;
  /** Tên liên lạc. */
  contactName?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  addressType?: EAddressType;
  /** Mặc định. */
  isDefault?: boolean;
}

export interface CreatePartyIdentificationTypeModel {
  /** Tên loại định danh party (thực thể/ đối tượng). */
  name?: string | null;
}

export interface CreatePartyModel {
  /**
   * Id loại party.
   * @format uuid
   */
  partyTypeId?: string | null;
  /**
   * Loại role party.
   * @format uuid
   */
  partyRoleTypeId?: string | null;
  /**
   * Loại khách hàng (customer, agent...).
   * @format uuid
   */
  customerTypeId?: string | null;
  /**
   * Loại nhân viên (cs, cước, sales...).
   * @format uuid
   */
  employeeTypeId?: string | null;
  /** Tên khách hàng/ đại lý. */
  name?: string | null;
  /** Tên đầy đủ khách hàng/ đại lý. */
  fullName?: string | null;
  /** Số ĐT. */
  telePhoneNumber?: string | null;
  /** Mã số thuế. */
  taxCode?: string | null;
  /**
   * Ngày sinh.
   * @format date-time
   */
  dateOfBirth?: string | null;
  gender?: EGender;
  /** Ghi chú. */
  remark?: string | null;
  /**
   * Id loại phương thức liên hệ.
   * @format uuid
   */
  contactMethodTypeId?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Danh sách property dynamic. */
  attributes?: CreateAtttributeModel[] | null;
}

export interface CreatePartyRoleModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
  /**
   * Loại role party.
   * @format uuid
   */
  partyRoleTypeId?: string;
  /**
   * Loại khách hàng (customer, agent...).
   * @format uuid
   */
  customerTypeId?: string | null;
  /**
   * Loại nhân viên (sales, cs, cước...).
   * @format uuid
   */
  employeeTypeId?: string | null;
  /** Danh sách property dynamic. */
  attributes?: CreateAtttributeModel[] | null;
}

export interface CreatePartyRoleTypeModel {
  /** Tên loại role. */
  name?: string | null;
}

export interface CreatePartyTypeModel {
  /** Tên loại party (thực thể/ đối tượng). */
  name?: string | null;
}

export interface CreateTeamModel {
  /** Tên team. */
  name?: string | null;
  /**
   * Chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
  /**
   * Team cha.
   * @format uuid
   */
  parentId?: string | null;
  /** Mã. */
  code?: string | null;
  /** Loại đội. */
  teamType?: string | null;
  /** Trạng thái. */
  isActive?: boolean;
  /** Kênh. */
  isChannel?: boolean | null;
}

export interface CustomerDTCodeModel {
  dtCode?: string | null;
  /** @format uuid */
  partyId?: string;
  name?: string | null;
}

export interface CustomerDTCodeModelPagedResultDto {
  items?: CustomerDTCodeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerDTCodeModelPagedResultDtoDataResponseDto {
  data?: CustomerDTCodeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerSegmentDetailModel {
  /** @format uuid */
  id?: string;
  /**
   * Id loại cụm khách hàng.
   * @format uuid
   */
  customerSegmentTypeId?: string;
  /** Tên loại cụm khách hàng. */
  customerSegmentTypeName?: string | null;
  /**
   * Thứ tự.
   * @format int32
   */
  customerSegmentTypePriority?: number | null;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
}

export interface CustomerSegmentModel {
  /** @format uuid */
  id?: string;
  /**
   * Id khách hàng.
   * @format uuid
   */
  customerId?: string;
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string | null;
  /** Tên khách hàng. */
  customerName?: string | null;
  /**
   * Id loại cụm khách hàng.
   * @format uuid
   */
  customerSegmentTypeId?: string;
  /** Tên loại cụm khách hàng. */
  customerSegmentTypeName?: string | null;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
}

export interface CustomerSegmentModelDataResponseDto {
  data?: CustomerSegmentModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerSegmentModelListDataResponseDto {
  data?: CustomerSegmentModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerSegmentModelPagedResultDto {
  items?: CustomerSegmentModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerSegmentModelPagedResultDtoDataResponseDto {
  data?: CustomerSegmentModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerSegmentTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại cụm khách hàng. */
  name?: string | null;
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

export interface CustomerSegmentTypeModelDataResponseDto {
  data?: CustomerSegmentTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerSegmentTypeModelListDataResponseDto {
  data?: CustomerSegmentTypeModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerSegmentTypeModelPagedResultDto {
  items?: CustomerSegmentTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerSegmentTypeModelPagedResultDtoDataResponseDto {
  data?: CustomerSegmentTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerTypeGroupModel {
  /** @format uuid */
  id?: string;
  /** Tên loại nhóm khách hàng. */
  name?: string | null;
}

export interface CustomerTypeGroupModelDataResponseDto {
  data?: CustomerTypeGroupModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerTypeGroupModelPagedResultDto {
  items?: CustomerTypeGroupModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerTypeGroupModelPagedResultDtoDataResponseDto {
  data?: CustomerTypeGroupModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại khách hàng. */
  name?: string | null;
  desc?: string | null;
  /**
   * Id loại nhóm khách hàng.
   * @format uuid
   */
  customerTypeGroupId?: string;
}

export interface CustomerTypeModelDataResponseDto {
  data?: CustomerTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CustomerTypeModelPagedResultDto {
  items?: CustomerTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CustomerTypeModelPagedResultDtoDataResponseDto {
  data?: CustomerTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface DeletePartyModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  id?: string;
  /** Đang hoạt động. */
  isActive?: boolean;
}

/** @format int32 */
export enum EAddressType {
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum EDataType {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

/** @format int32 */
export enum EGender {
  Value1 = 1,
  Value2 = 2,
}

export interface EmployeeTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại nhân viên. */
  name?: string | null;
  /** Diễn giải. */
  desc?: string | null;
}

export interface EmployeeTypeModelDataResponseDto {
  data?: EmployeeTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface EmployeeTypeModelPagedResultDto {
  items?: EmployeeTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface EmployeeTypeModelPagedResultDtoDataResponseDto {
  data?: EmployeeTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** @format int32 */
export enum EntityChangeType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

export interface EntityHistoryChangeModel {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  changeTime?: string;
  changeType?: EntityChangeType;
  changeTypeName?: string | null;
  /** @format uuid */
  entityChangeSetId?: string | null;
  entityId?: string | null;
  entityTypeFullName?: string | null;
  propertyChanges?: EntityHistoryPropertyChangeModel[] | null;
  /** @format date-time */
  creationTime?: string;
  /** @format date-time */
  lastModificationTime?: string | null;
}

export interface EntityHistoryChangeModelPagedResultDto {
  items?: EntityHistoryChangeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface EntityHistoryChangeModelPagedResultDtoDataResponseDto {
  data?: EntityHistoryChangeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface EntityHistoryChangeSetModel {
  /** @format uuid */
  id?: string;
  browserInfo?: string | null;
  clientIpAddress?: string | null;
  clientName?: string | null;
  reason?: string | null;
  traceId?: string | null;
  spanId?: string | null;
  /** @format date-time */
  creationTime?: string;
  /** @format date-time */
  lastModificationTime?: string | null;
}

export interface EntityHistoryChangeSetModelPagedResultDto {
  items?: EntityHistoryChangeSetModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface EntityHistoryChangeSetModelPagedResultDtoDataResponseDto {
  data?: EntityHistoryChangeSetModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface EntityHistoryPropertyChangeModel {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  entityChangeId?: string | null;
  newValue?: string | null;
  originalValue?: string | null;
  propertyName?: string | null;
  propertyTypeFullName?: string | null;
  newValueHash?: string | null;
  originalValueHash?: string | null;
  /** @format date-time */
  creationTime?: string;
  /** @format date-time */
  lastModificationTime?: string | null;
}

export interface EntityHistoryPropertyChangeModelPagedResultDto {
  items?: EntityHistoryPropertyChangeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface EntityHistoryPropertyChangeModelPagedResultDtoDataResponseDto {
  data?: EntityHistoryPropertyChangeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface EnumGenderModel {
  /** @format int32 */
  key?: number;
  name?: string | null;
}

export interface EnumGenderModelListDataResponseDto {
  data?: EnumGenderModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface GetAllAttributeModel {
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
  name?: string | null;
  displayName?: string | null;
  isActive?: boolean | null;
}

export interface GetAllBillingCustomerModel {
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
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
  /** Tìm kiếm theo tên liên hệ/ số ĐT. */
  search?: string | null;
}

export interface GetAllBranchModel {
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
  /** Tên chi nhánh. */
  name?: string | null;
  isActive?: boolean | null;
}

export interface GetAllByHierarchicalModel {
  /** @format uuid */
  partyId?: string | null;
  partyAffiliationTypeIds?: string[] | null;
}

export interface GetAllByListIdModel {
  ids?: string[] | null;
}

export interface GetAllContactMethodTypeModel {
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
  /** Tên loại phương thức liên lạc. */
  name?: string | null;
}

export interface GetAllCustomerDTCodeModel {
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** @format int32 */
  maxResultCount?: number;
  dtCode?: string | null;
}

export interface GetAllCustomerModel {
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** Tên khách hàng/ đại lý. */
  name?: string | null;
  /** @format int32 */
  maxResultCount?: number;
  isActive?: boolean | null;
  agentLevel?: string | null;
  dtCode?: string | null;
}

export interface GetAllCustomerSegmentByCustomerModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
}

export interface GetAllCustomerSegmentModel {
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
  /** @format uuid */
  customerSegmentTypeId?: string | null;
}

export interface GetAllCustomerSegmentTypeModel {
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
  /** Tên loại cụm khách hàng. */
  name?: string | null;
}

export interface GetAllCustomerTypeGroupModel {
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
  /** Tên loại nhóm khách hàng. */
  name?: string | null;
}

export interface GetAllCustomerTypeModel {
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
  /** Tên loại khách hàng. */
  name?: string | null;
}

export interface GetAllEmployeeModel {
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
  /** Tên sales. */
  name?: string | null;
  /** Trạng thái. */
  isActive?: boolean | null;
}

export interface GetAllEmployeeTypeModel {
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
  /** Tên loại nhân viên. */
  name?: string | null;
  /** Diễn giải. */
  desc?: string | null;
}

export interface GetAllEntityHistoryChangeModel {
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
  /** @format uuid */
  entityId?: string;
  changeType?: EntityChangeType;
  /** @format date-time */
  fromDate?: string | null;
  /** @format date-time */
  toDate?: string | null;
}

export interface GetAllEntityHistoryChangeSetModel {
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
  /** @format uuid */
  entityId?: string;
  /** @format date-time */
  fromDate?: string | null;
  /** @format date-time */
  toDate?: string | null;
}

export interface GetAllEntityHistoryPropertyChangeModel {
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
  /** @format uuid */
  changeId?: string | null;
  /** @format date-time */
  fromDate?: string | null;
  /** @format date-time */
  toDate?: string | null;
}

export interface GetAllPartyAffiliationModel {
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
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string | null;
  /**
   * Id subparty (thực thể/ đối tượng) con.
   * @format uuid
   */
  subPartyId?: string | null;
  /**
   * Id loại mối quan hệ (thực thể/ đối tượng).
   * @format uuid
   */
  partyAffiliationTypeId?: string | null;
}

export interface GetAllPartyAffiliationTypeModel {
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
  /** Tên loại mối liên hệ giữa các party (thực thể/ đối tượng). */
  name?: string | null;
}

export interface GetAllPartyContactModel {
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
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
  /**
   * Id loại role party (thực thể/ đối tượng).
   * @format uuid
   */
  partyRoleTypeId?: string | null;
  /** Tìm kiếm theo tên liên hệ/ số ĐT. */
  search?: string | null;
  /**
   * Loai contact.
   * @format uuid
   */
  contactTypeId?: string | null;
}

export interface GetAllPartyIdentificationTypeModel {
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
  /** Tên loại định danh party (thực thể/ đối tượng). */
  name?: string | null;
}

export interface GetAllPartyModel {
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** Tìm kiếm theo tên/ cmnd/ mã số thuế. */
  search?: string | null;
  /**
   * Id loại party (thực thể/ đối tượng).
   * @format uuid
   */
  partyTypeId?: string | null;
  /**
   * Id loại role party (thực thể/ đối tượng).
   * @format uuid
   */
  partyRoleTypeId?: string | null;
  /** @format int32 */
  maxResultCount?: number;
  isActive?: boolean | null;
  agentLevel?: string | null;
}

export interface GetAllPartyRequestModel {
  /** @format uuid */
  customerSegmentTypeId?: string | null;
  /** @format uuid */
  branchId?: string | null;
  /** @format uuid */
  chanelId?: string | null;
  /** @format uuid */
  teamId?: string | null;
  /** @format uuid */
  salesId?: string | null;
}

export interface GetAllPartyRoleTypeModel {
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
  /** Tên loại role. */
  name?: string | null;
}

export interface GetAllPartyTypeModel {
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
  /** Tên loại party (thực thể/ đối tượng). */
  name?: string | null;
}

export interface GetAllTeamModel {
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
  /** Tên đội/ mã. */
  search?: string | null;
  /**
   * Chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
  /** Trạng thái. */
  isActive?: boolean | null;
  /** Kênh. */
  isChanel?: boolean | null;
}

export interface GetMultiplePartyContactsModel {
  /** Id party (thực thể/ đối tượng). */
  partyIds?: string[] | null;
}

export interface GuidListDataResponseDto {
  data?: string[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface MigrateCustomerModel {
  /** @format uuid */
  id?: string;
  /** @format uuid */
  idPLAT?: string;
  /** @format int32 */
  idVML?: number;
}

export interface MigrateCustomerModelDataResponseDto {
  data?: MigrateCustomerModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyAffiliationModel {
  /** @format uuid */
  id?: string;
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
  /** Tên party (thực thể/ đối tượng). */
  partyName?: string | null;
  /**
   * Id sub party (thực thể/ đối tượng con).
   * @format uuid
   */
  subPartyId?: string;
  /** Tên sub party (thực thể/ đối tượng). */
  subPartyName?: string | null;
  /**
   * Id loại mối liên hệ giữa các party (thực thể/ đối tượng).
   * @format uuid
   */
  partyAffiliationTypeId?: string;
  /** Tên loại mối liên hệ giữa các party (thực thể/ đối tượng). */
  partyAffiliationTypeName?: string | null;
  partyAffiliationTypeDescription?: string | null;
  /**
   * Ngày hiệu lực.
   * @format date-time
   */
  effectiveDate?: string;
  /**
   * Ngày hết hạn.
   * @format date-time
   */
  expirationDate?: string | null;
  partyAffiliationModels?: PartyAffiliationModel[] | null;
}

export interface PartyAffiliationModelDataResponseDto {
  data?: PartyAffiliationModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyAffiliationModelListDataResponseDto {
  data?: PartyAffiliationModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyAffiliationModelPagedResultDto {
  items?: PartyAffiliationModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PartyAffiliationModelPagedResultDtoDataResponseDto {
  data?: PartyAffiliationModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyAffiliationTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại mối liên hệ giữa các party (thực thể/ đối tượng). */
  name?: string | null;
  /** Mô tả loại mối liên hệ giữa các party (thực thể/ đối tượng). */
  description?: string | null;
}

export interface PartyAffiliationTypeModelDataResponseDto {
  data?: PartyAffiliationTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyAffiliationTypeModelPagedResultDto {
  items?: PartyAffiliationTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PartyAffiliationTypeModelPagedResultDtoDataResponseDto {
  data?: PartyAffiliationTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyContactModel {
  /** @format uuid */
  id?: string;
  /**
   * Id loại role party (thực thể/ đối tượng).
   * @format uuid
   */
  partyRoleTypeId?: string;
  /** Tên loại role party (thực thể/ đối tượng). */
  partyRoleTypeName?: string | null;
  /** Tên liên lạc. */
  contactName?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /** Tên quốc gia. */
  countryName?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /** Tên vùng. */
  provinceName?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /** Tên quận. */
  districtName?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  /** Tên phường. */
  wardName?: string | null;
  /** Mặc định. */
  isDefault?: boolean;
  /**
   * Id địa chỉ.
   * @format uuid
   */
  addressId?: string | null;
  /**
   * Id số đt.
   * @format uuid
   */
  telephoneId?: string | null;
  /**
   * Id email.
   * @format uuid
   */
  emailId?: string | null;
  /**
   * Id loại phương thức liên hệ.
   * @format uuid
   */
  contactMethodTypeId?: string;
  /** Tên loại phương thức liên hệ. */
  contactMethodTypeName?: string | null;
  addressType?: EAddressType;
  /** Tên loại địa chỉ. */
  addressTypeName?: string | null;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
}

export interface PartyContactModelDataResponseDto {
  data?: PartyContactModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyContactModelListDataResponseDto {
  data?: PartyContactModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyContactModelPagedResultDto {
  items?: PartyContactModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PartyContactModelPagedResultDtoDataResponseDto {
  data?: PartyContactModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyIdentificationTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại định danh party (thực thể/ đối tượng). */
  name?: string | null;
}

export interface PartyIdentificationTypeModelDataResponseDto {
  data?: PartyIdentificationTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyIdentificationTypeModelPagedResultDto {
  items?: PartyIdentificationTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PartyIdentificationTypeModelPagedResultDtoDataResponseDto {
  data?: PartyIdentificationTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyModel {
  /** @format uuid */
  id?: string;
  /** Tên party (thực thể/ đối tượng). */
  name?: string | null;
  /**
   * Id loại party (thực thể/ đối tượng).
   * @format uuid
   */
  partyTypeId?: string;
  /** Số ĐT. */
  telePhoneNumber?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /** Address. */
  addressLine?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  /** Mã số thuế. */
  taxCode?: string | null;
  /** Tên loại party (thực thể/ đối tượng). */
  partyTypeName?: string | null;
  partyTypeDesc?: string | null;
  /** Thông tin role party (thực thể/ đối tượng) được asign. */
  partyRoleAssginments?: PartyRoleAssignmentModel[] | null;
  /** Thông tin tập KH. */
  customerSegments?: CustomerSegmentDetailModel[] | null;
  /** Đang hoạt động. */
  isActive?: boolean;
  /**
   * Ngày sinh.
   * @format date-time
   */
  dateOfBirth?: string | null;
  gender?: EGender;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
}

export interface PartyModelDataResponseDto {
  data?: PartyModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyModelV2 {
  /** @format uuid */
  id?: string;
  name?: string | null;
  partyRoleAssginments?: PartyRoleAssignmentModelV2[] | null;
}

export interface PartyModelV2ListDataResponseDto {
  data?: PartyModelV2[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyRoleAssignmentModel {
  /** @format uuid */
  id?: string;
  /** Tên loại role. */
  partyRoleTypeName?: string | null;
  partyRoleTypeDesc?: string | null;
  /**
   * Id loại role.
   * @format uuid
   */
  partyRoleTypeId?: string;
  partyRole?: PartyRoleModel;
  /** @format date-time */
  effectiveDate?: string;
  /** @format date-time */
  expirationDate?: string | null;
  /** Danh sách property dynamic. */
  attributes?: Record<string, string | null>;
  /**
   * Id KH, chi nhanh, nhan vien.
   * @format uuid
   */
  partyRoleId?: string;
  branchTeamCode?: string | null;
}

export interface PartyRoleAssignmentModelV2 {
  /** @format uuid */
  id?: string;
  partyRoleTypeName?: string | null;
  attributes?: Record<string, string>;
  /** @format uuid */
  partyRoleId?: string;
  branchTeamCode?: string | null;
  teamCode?: string | null;
  /** @format uuid */
  teamId?: string | null;
  /** @format uuid */
  branchId?: string | null;
}

export interface PartyRoleModel {
  /** @format uuid */
  id?: string;
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
  /**
   * Loại role party.
   * @format uuid
   */
  partyRoleTypeId?: string;
  /**
   * Loại khách hàng (customer, agent...).
   * @format uuid
   */
  customerTypeId?: string | null;
  /** Tên loại khách hàng (customer, agent...). */
  customerTypeName?: string | null;
  /** Tên loại khách hàng (customer, agent...). */
  customerTypeDesc?: string | null;
  /**
   * Loại nhân viên (sales, cs...).
   * @format uuid
   */
  employeeTypeId?: string | null;
  /** Tên loại nhân viên (sales, cs...). */
  employeeTypeName?: string | null;
  employeeTypeDesc?: string | null;
  /** Vô danh. */
  anonymousFlag?: boolean;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
}

export interface PartyRoleModelDataResponseDto {
  data?: PartyRoleModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyRoleTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại role. */
  name?: string | null;
  desc?: string | null;
}

export interface PartyRoleTypeModelDataResponseDto {
  data?: PartyRoleTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyRoleTypeModelPagedResultDto {
  items?: PartyRoleTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PartyRoleTypeModelPagedResultDtoDataResponseDto {
  data?: PartyRoleTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartySearchModel {
  /** @format uuid */
  id?: string;
  /** Tên party (thực thể/ đối tượng). */
  name?: string | null;
  /**
   * Id loại party (thực thể/ đối tượng).
   * @format uuid
   */
  partyTypeId?: string;
  /** Số ĐT. */
  telePhoneNumber?: string | null;
  /** Mã số thuế. */
  taxCode?: string | null;
  /** Tên loại party (thực thể/ đối tượng). */
  partyTypeName?: string | null;
  /** Thông tin role party (thực thể/ đối tượng) được asign. */
  partyRoleAssginments?: PartyRoleAssignmentModel[] | null;
  /** Đang hoạt động. */
  isActive?: boolean;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
}

export interface PartySearchModelPagedResultDto {
  items?: PartySearchModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PartySearchModelPagedResultDtoDataResponseDto {
  data?: PartySearchModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyTypeModel {
  /** @format uuid */
  id?: string;
  /** Tên loại party (thực thể/ đối tượng). */
  name?: string | null;
}

export interface PartyTypeModelDataResponseDto {
  data?: PartyTypeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PartyTypeModelPagedResultDto {
  items?: PartyTypeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PartyTypeModelPagedResultDtoDataResponseDto {
  data?: PartyTypeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RoleBranchModel {
  /** @format uuid */
  id?: string;
  /**
   * Id chi nhánh.
   * @format uuid
   */
  partyId?: string;
  /** Vô danh. */
  anonymousFlag?: boolean;
}

export interface RoleBranchModelDataResponseDto {
  data?: RoleBranchModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RoleCustomerModel {
  /** @format uuid */
  id?: string;
  /**
   * Id khách hàng.
   * @format uuid
   */
  partyId?: string;
  /**
   * Id loại khách hàng.
   * @format uuid
   */
  customerTypeId?: string;
  /** Vô danh. */
  anonymousFlag?: boolean;
  /** Tên khách hàng/ đại lý. */
  name?: string | null;
  /** Id khách hàng. */
  customerDTCode?: string | null;
  /** Chủ khách hàng. */
  agencyCustomerName?: string | null;
  /** SĐT. */
  phoneNumber?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
  /** Tên chi nhánh. */
  branchName?: string | null;
  branchCode?: string | null;
  /**
   * Id Team.
   * @format uuid
   */
  teamId?: string | null;
  /** Tên đội. */
  teamName?: string | null;
  /** Mã đội. */
  teamCode?: string | null;
  /**
   * Id Sale.
   * @format uuid
   */
  saleId?: string | null;
  /** Tên sales. */
  saleName?: string | null;
  /** Hạng ĐL. */
  customerSegmentName?: string | null;
  /**
   * Id Hạng ĐL.
   * @format uuid
   */
  customerSegmentId?: string | null;
}

export interface RoleCustomerModelDataResponseDto {
  data?: RoleCustomerModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface RoleEmployeeModel {
  /** @format uuid */
  id?: string;
  /**
   * Id sales.
   * @format uuid
   */
  partyId?: string;
  /** Vô danh. */
  anonymousFlag?: boolean;
}

export interface RoleEmployeeModelDataResponseDto {
  data?: RoleEmployeeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface SearchAllPartyModel {
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  skipCount?: number;
  sorting?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Mã số thuế. */
  taxCode?: string | null;
  /** @format int32 */
  maxResultCount?: number;
}

export interface StringEnumDataTypeModel {
  key?: string | null;
  name?: string | null;
}

export interface StringEnumDataTypeModelListDataResponseDto {
  data?: StringEnumDataTypeModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface TeamModel {
  /** @format uuid */
  id?: string;
  /** Tên đội. */
  name?: string | null;
  /**
   * Id Chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
  /** Tên Chi nhánh. */
  branchName?: string | null;
  /**
   * Team cha.
   * @format uuid
   */
  parentId?: string | null;
  /** Tên team cha. */
  parentName?: string | null;
  /** Mã. */
  code?: string | null;
  /** Loại đội. */
  teamType?: string | null;
  /** Trạng thái. */
  isActive?: boolean;
  /** Kênh. */
  isChannel?: boolean;
  teams?: TeamModel[] | null;
}

export interface TeamModelDataResponseDto {
  data?: TeamModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface TeamModelListDataResponseDto {
  data?: TeamModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface TeamModelPagedResultDto {
  items?: TeamModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface TeamModelPagedResultDtoDataResponseDto {
  data?: TeamModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface UpdateAttributeModel {
  name?: string | null;
  displayName?: string | null;
  dataType?: EDataType;
  isActive?: boolean;
  /**
   * Id thuoc tinh.
   * @format uuid
   */
  id?: string;
}

export interface UpdateBillingCustomerModel {
  /**
   * Id KH (đại lý).
   * @format uuid
   */
  partyId?: string | null;
  /** Tên liên lạc. */
  companyName?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Tên liên lạc. */
  taxCode?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  /** Mặc định. */
  isDefault?: boolean;
  /**
   * Id thông tin hóa đơn của KH (đại lý).
   * @format uuid
   */
  id?: string;
}

export interface UpdateContactMethodTypeModel {
  /** Tên loại phương thức liên lạc. */
  name?: string | null;
  /**
   * Id loại phương thức liên lạc.
   * @format uuid
   */
  id?: string;
}

export interface UpdateCustomerSegmentModel {
  /**
   * Id cụm khách hàng.
   * @format uuid
   */
  id?: string;
  /**
   * Id loại cụm khách hàng.
   * @format uuid
   */
  customerSegmentTypeId?: string;
}

export interface UpdateCustomerSegmentTypeModel {
  /** Tên loại cụm khách hàng. */
  name?: string | null;
  /**
   * Id loại cụm khách hàng.
   * @format uuid
   */
  id?: string;
}

export interface UpdateCustomerTypeGroupModel {
  /** Tên loại nhóm khách hàng. */
  name?: string | null;
  /**
   * Id loại nhóm khách hàng.
   * @format uuid
   */
  id?: string;
}

export interface UpdateCustomerTypeModel {
  /** Tên loại khách hàng. */
  name?: string | null;
  /**
   * Id loại nhóm khách hàng.
   * @format uuid
   */
  customerTypeGroupId?: string;
  /**
   * Id loại khách hàng.
   * @format uuid
   */
  id?: string;
}

export interface UpdateEmployeeTypeModel {
  /** Diễn giải. */
  desc?: string | null;
  /**
   * Id loại nhân viên.
   * @format uuid
   */
  id?: string;
}

export interface UpdatePartyAffiliationModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
  /**
   * Id sub party (thực thể/ đối tượng con).
   * @format uuid
   */
  subPartyId?: string;
  /**
   * Id loại mối liên hệ giữa các party (thực thể/ đối tượng).
   * @format uuid
   */
  partyAffiliationTypeId?: string;
  /**
   * Id mối liên hệ giữa các party (thực thể/ đối tượng).
   * @format uuid
   */
  id?: string;
}

export interface UpdatePartyAffiliationTypeModel {
  /** Diễn giải. */
  desc?: string | null;
  /**
   * Id loại mối liên hệ giữa các party (thực thể/ đối tượng).
   * @format uuid
   */
  id?: string;
}

export interface UpdatePartyContactByRoleTypeModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string | null;
  /**
   * Id loại phương thức liên hệ.
   * @format uuid
   */
  contactMethodTypeId?: string | null;
  /** Tên liên lạc. */
  contactName?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  addressType?: EAddressType;
  /** Mặc định. */
  isDefault?: boolean;
  /**
   * Id loại role party (thực thể/ đối tượng).
   * @format uuid
   */
  partyRoleTypeId?: string | null;
  /**
   * Id phương thức liên hệ party.
   * @format uuid
   */
  id?: string;
}

export interface UpdatePartyContactModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string | null;
  /**
   * Id loại phương thức liên hệ.
   * @format uuid
   */
  contactMethodTypeId?: string | null;
  /** Tên liên lạc. */
  contactName?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /** Số ĐT. */
  telephoneNumber?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  addressType?: EAddressType;
  /** Mặc định. */
  isDefault?: boolean;
  /**
   * Id phương thức liên lạc của party (thực thể/ đối tượng).
   * @format uuid
   */
  id?: string;
}

export interface UpdatePartyIdentificationTypeModel {
  /** Tên loại định danh party (thực thể/ đối tượng). */
  name?: string | null;
  /**
   * Id loại định danh party (thực thể/ đối tượng).
   * @format uuid
   */
  id?: string;
}

export interface UpdatePartyModel {
  /**
   * Loại khách hàng (customer, agent...).
   * @format uuid
   */
  customerTypeId?: string | null;
  /**
   * Loại role party (thực thể/ đối tượng).
   * @format uuid
   */
  partyRoleTypeId?: string | null;
  /**
   * Loại nhân viên (cs, cước, sales...).
   * @format uuid
   */
  employeeTypeId?: string | null;
  /** Tên khách hàng/ đại lý. */
  name?: string | null;
  /** Tên đầy đủ khách hàng/ đại lý. */
  fullName?: string | null;
  /** Số ĐT. */
  telePhoneNumber?: string | null;
  /** Mã số thuế. */
  taxCode?: string | null;
  /**
   * Ngày sinh.
   * @format date-time
   */
  dateOfBirth?: string | null;
  gender?: EGender;
  /** Ghi chú. */
  remark?: string | null;
  /**
   * Id loại phương thức liên hệ.
   * @format uuid
   */
  contactMethodTypeId?: string | null;
  /** Email. */
  emailAddress?: string | null;
  /**
   * Id quốc gia.
   * @format uuid
   */
  countryId?: string | null;
  /**
   * Id vùng.
   * @format uuid
   */
  provinceId?: string | null;
  /**
   * Id quận.
   * @format uuid
   */
  districtId?: string | null;
  /**
   * Id phường.
   * @format uuid
   */
  wardId?: string | null;
  /** Tên đường. */
  addressLine?: string | null;
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  id?: string;
  /** Danh sách property dynamic. */
  attributes?: CreateAtttributeModel[] | null;
}

export interface UpdatePartyRoleModel {
  /**
   * Id party (thực thể/ đối tượng).
   * @format uuid
   */
  partyId?: string;
  /**
   * Loại role party.
   * @format uuid
   */
  partyRoleTypeId?: string;
  /**
   * Loại khách hàng (customer, agent...).
   * @format uuid
   */
  customerTypeId?: string | null;
  /**
   * Loại nhân viên (sales, cs, cước...).
   * @format uuid
   */
  employeeTypeId?: string | null;
  /** Danh sách property dynamic. */
  attributes?: CreateAtttributeModel[] | null;
  /**
   * Id role party (thực thể/ đối tượng).
   * @format uuid
   */
  id?: string;
}

export interface UpdatePartyRoleTypeModel {
  /** Tên loại role. */
  name?: string | null;
  /**
   * Id loại role.
   * @format uuid
   */
  id?: string;
}

export interface UpdatePartyTypeModel {
  /** Tên loại party (thực thể/ đối tượng). */
  name?: string | null;
  /**
   * Id loại party (thực thể/ đối tượng).
   * @format uuid
   */
  id?: string;
}

export interface UpdateTeamModel {
  /** Tên team. */
  name?: string | null;
  /**
   * Chi nhánh.
   * @format uuid
   */
  branchId?: string | null;
  /**
   * Team cha.
   * @format uuid
   */
  parentId?: string | null;
  /** Mã. */
  code?: string | null;
  /** Loại đội. */
  teamType?: string | null;
  /** Trạng thái. */
  isActive?: boolean;
  /** Kênh. */
  isChannel?: boolean | null;
  /**
   * Id team.
   * @format uuid
   */
  id?: string;
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
 * @title Customer Service (v1.1.16) - Testing
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  attribute = {
    /**
     * No description
     *
     * @tags Attribute
     * @name GetdatatypesList
     * @summary Danh sách loại dữ liệu.
     * @request GET:/attribute/getdatatypes
     * @secure
     */
    getdatatypesList: (
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EnumGenderModelListDataResponseDto, any>({
        path: `/attribute/getdatatypes`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attribute
     * @name GetallCreate
     * @summary Danh sách dynamic thuộc tính.
     * @request POST:/attribute/getall
     * @secure
     */
    getallCreate: (
      data: GetAllAttributeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AttributeModelPagedResultDtoSuccessResponseDto, any>({
        path: `/attribute/getall`,
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
     * @tags Attribute
     * @name GetAttribute
     * @summary Lấy thông tin chi tiết của dynamic thuộc tính.
     * @request GET:/attribute/get/{Id}
     * @secure
     */
    getAttribute: (
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
      this.request<AttributeModelSuccessResponseDto, any>({
        path: `/attribute/get/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Attribute
     * @name CreateCreate
     * @summary Tạo mới dynamic thuộc tính.
     * @request POST:/attribute/create
     * @secure
     */
    createCreate: (
      data: CreateAttributeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AttributeModelSuccessResponseDto, any>({
        path: `/attribute/create`,
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
     * @tags Attribute
     * @name UpdateUpdate
     * @summary Cập nhật dynamic thuộc tính.
     * @request PUT:/attribute/update
     * @secure
     */
    updateUpdate: (
      data: UpdateAttributeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AttributeModelSuccessResponseDto, any>({
        path: `/attribute/update`,
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
     * @tags Attribute
     * @name DeleteDelete
     * @summary Xóa cấu dynamic thuộc tính.
     * @request DELETE:/attribute/delete/{Id}
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
        path: `/attribute/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  billingcustomer = {
    /**
     * No description
     *
     * @tags BillingCustomer
     * @name GetallCreate
     * @summary Danh sách hóa đơn của khách hàng.
     * @request POST:/billingcustomer/getall
     * @secure
     */
    getallCreate: (
      data: GetAllBillingCustomerModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BillingCustomerModelPagedResultDtoDataResponseDto, any>({
        path: `/billingcustomer/getall`,
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
     * @tags BillingCustomer
     * @name GetbyidDetail
     * @summary Thông tin chi tiết xuất hóa đơn theo id.
     * @request GET:/billingcustomer/getbyid/{Id}
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
      this.request<BillingCustomerModelDataResponseDto, any>({
        path: `/billingcustomer/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags BillingCustomer
     * @name CreateCreate
     * @summary Tạo thông tin xuất hóa đơn theo KH.
     * @request POST:/billingcustomer/create
     * @secure
     */
    createCreate: (
      data: CreateBillingCustomerModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BillingCustomerModelDataResponseDto, any>({
        path: `/billingcustomer/create`,
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
     * @tags BillingCustomer
     * @name UpdateUpdate
     * @summary Cập nhật thông tin xuất hóa đơn theo KH.
     * @request PUT:/billingcustomer/update
     * @secure
     */
    updateUpdate: (
      data: UpdateBillingCustomerModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BillingCustomerModelDataResponseDto, any>({
        path: `/billingcustomer/update`,
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
     * @tags BillingCustomer
     * @name DeleteDelete
     * @summary Xóa liên hệ (sổ địa chỉ).
     * @request DELETE:/billingcustomer/delete
     * @secure
     */
    deleteDelete: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id thông tin hóa đơn của KH (đại lý).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/billingcustomer/delete`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  branch = {
    /**
     * No description
     *
     * @tags Branch
     * @name GetallCreate
     * @summary Danh sách chi nhánh.
     * @request POST:/branch/getall
     * @secure
     */
    getallCreate: (
      data: GetAllBranchModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BranchModelPagedResultDtoDataResponseDto, any>({
        path: `/branch/getall`,
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
     * @tags Branch
     * @name GetbyidDetail
     * @summary Thông tin chi tiết chi nhánh theo id.
     * @request GET:/branch/getbyid/{Id}
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
      this.request<PartyModelDataResponseDto, any>({
        path: `/branch/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name CreateCreate
     * @summary Tạo chi nhánh.
     * @request POST:/branch/create
     * @secure
     */
    createCreate: (
      data: CreatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/branch/create`,
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
     * @tags Branch
     * @name UpdateUpdate
     * @summary Cập nhật chi nhánh.
     * @request PUT:/branch/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/branch/update`,
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
     * @tags Branch
     * @name GetrolebranchbyidDetail
     * @summary Thông tin chi tiết role chi nhánh theo id.
     * @request GET:/branch/getrolebranchbyid/{branchId}
     * @secure
     */
    getrolebranchbyidDetail: (
      branchId: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RoleBranchModelDataResponseDto, any>({
        path: `/branch/getrolebranchbyid/${branchId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name CreaterolebranchCreate
     * @summary Tạo role theo chi nhánh.
     * @request POST:/branch/createrolebranch
     * @secure
     */
    createrolebranchCreate: (
      data: CreatePartyRoleModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyRoleModelDataResponseDto, any>({
        path: `/branch/createrolebranch`,
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
     * @tags Branch
     * @name UpdaterolebranchUpdate
     * @summary Cập nhật thông tin role chi nhánh.
     * @request PUT:/branch/updaterolebranch
     * @secure
     */
    updaterolebranchUpdate: (
      data: UpdatePartyRoleModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyRoleModelDataResponseDto, any>({
        path: `/branch/updaterolebranch`,
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
     * @tags Branch
     * @name DeleterolebranchDelete
     * @summary Xoá role chi nhánh.
     * @request DELETE:/branch/deleterolebranch
     * @secure
     */
    deleterolebranchDelete: (
      query?: {
        /**
         * Id party.
         * @format uuid
         */
        PartyId?: string;
        /**
         * Loại role party.
         * @format uuid
         */
        PartyRoleTypeId?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/branch/deleterolebranch`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name GetallcontactwithroleCreate
     * @summary Danh sách liên hệ (sổ địa chỉ).
     * @request POST:/branch/getallcontactwithrole
     * @secure
     */
    getallcontactwithroleCreate: (
      data: GetAllPartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelPagedResultDtoDataResponseDto, any>({
        path: `/branch/getallcontactwithrole`,
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
     * @tags Branch
     * @name GetcontactdetailwithrolebyidList
     * @summary Thông tin chi tiết liên hệ (sổ địa chỉ).
     * @request GET:/branch/getcontactdetailwithrolebyid
     * @secure
     */
    getcontactdetailwithrolebyidList: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id phương thức liên lạc của party (thực thể/ đối tượng).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/branch/getcontactdetailwithrolebyid`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branch
     * @name CreatecontactwithroleCreate
     * @summary Tạo liên hệ (sổ địa chỉ).
     * @request POST:/branch/createcontactwithrole
     * @secure
     */
    createcontactwithroleCreate: (
      data: CreatePartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/branch/createcontactwithrole`,
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
     * @tags Branch
     * @name UpdatecontactwithroleUpdate
     * @summary Cập nhật liên hệ (sổ địa chỉ).
     * @request PUT:/branch/updatecontactwithrole
     * @secure
     */
    updatecontactwithroleUpdate: (
      data: UpdatePartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/branch/updatecontactwithrole`,
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
     * @tags Branch
     * @name DeletecontactwithroleDelete
     * @summary Xóa liên hệ (sổ địa chỉ).
     * @request DELETE:/branch/deletecontactwithrole
     * @secure
     */
    deletecontactwithroleDelete: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id phương thức liên lạc của party (thực thể/ đối tượng).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/branch/deletecontactwithrole`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  contactmethodtype = {
    /**
     * No description
     *
     * @tags ContactMethodType
     * @name GetallCreate
     * @summary Danh sách loại phương thức liên hệ.
     * @request POST:/contactmethodtype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllContactMethodTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ContactMethodTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/contactmethodtype/getall`,
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
     * @tags ContactMethodType
     * @name GetbyidDetail
     * @summary Thôn tin chi tiết loại phương thức liên hệ.
     * @request GET:/contactmethodtype/getbyid/{Id}
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
      this.request<ContactMethodTypeModelDataResponseDto, any>({
        path: `/contactmethodtype/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ContactMethodType
     * @name CreateCreate
     * @summary Tạo loại phương thức liên hệ.
     * @request POST:/contactmethodtype/create
     * @secure
     */
    createCreate: (
      data: CreateContactMethodTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ContactMethodTypeModelDataResponseDto, any>({
        path: `/contactmethodtype/create`,
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
     * @tags ContactMethodType
     * @name UpdateUpdate
     * @summary Cập nhật loại phương thức liên hệ.
     * @request PUT:/contactmethodtype/update
     * @secure
     */
    updateUpdate: (
      data: UpdateContactMethodTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ContactMethodTypeModelDataResponseDto, any>({
        path: `/contactmethodtype/update`,
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
     * @tags ContactMethodType
     * @name DeleteDelete
     * @summary Xóa loại phương thức liên hệ.
     * @request DELETE:/contactmethodtype/delete/{Id}
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
        path: `/contactmethodtype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  customer = {
    /**
     * No description
     *
     * @tags Customer
     * @name GetallCreate
     * @summary Danh sách khách hàng.
     * @request POST:/customer/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCustomerModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartySearchModelPagedResultDtoDataResponseDto, any>({
        path: `/customer/getall`,
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
     * @tags Customer
     * @name GetbyidDetail
     * @summary Thông tin chi tiết khách hàng theo id.
     * @request GET:/customer/getbyid/{Id}
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
      this.request<PartyModelDataResponseDto, any>({
        path: `/customer/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CreateorganizationCreate
     * @summary Tạo khách hàng doanh nghiệp.
     * @request POST:/customer/createorganization
     * @secure
     */
    createorganizationCreate: (
      data: CreatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/customer/createorganization`,
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
     * @tags Customer
     * @name CreatepersonCreate
     * @summary Tạo khách hàng cá nhân.
     * @request POST:/customer/createperson
     * @secure
     */
    createpersonCreate: (
      data: CreatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/customer/createperson`,
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
     * @tags Customer
     * @name UpdateUpdate
     * @summary Cập nhật khách hàng.
     * @request PUT:/customer/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/customer/update`,
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
     * @tags Customer
     * @name GetrolecustomerbyidDetail
     * @summary Thông tin chi tiết role khách hàng theo id.
     * @request GET:/customer/getrolecustomerbyid/{customerId}
     * @secure
     */
    getrolecustomerbyidDetail: (
      customerId: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RoleCustomerModelDataResponseDto, any>({
        path: `/customer/getrolecustomerbyid/${customerId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name GetallcontactwithroleCreate
     * @summary Danh sách liên hệ (sổ địa chỉ).
     * @request POST:/customer/getallcontactwithrole
     * @secure
     */
    getallcontactwithroleCreate: (
      data: GetAllPartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelPagedResultDtoDataResponseDto, any>({
        path: `/customer/getallcontactwithrole`,
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
     * @tags Customer
     * @name GetcontactdetailwithrolebyidList
     * @summary Thông tin chi tiết liên hệ (sổ địa chỉ).
     * @request GET:/customer/getcontactdetailwithrolebyid
     * @secure
     */
    getcontactdetailwithrolebyidList: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id phương thức liên lạc của party (thực thể/ đối tượng).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/customer/getcontactdetailwithrolebyid`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name CreatecontactwithroleCreate
     * @summary Tạo liên hệ (sổ địa chỉ).
     * @request POST:/customer/createcontactwithrole
     * @secure
     */
    createcontactwithroleCreate: (
      data: CreatePartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/customer/createcontactwithrole`,
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
     * @tags Customer
     * @name UpdatecontactwithroleUpdate
     * @summary Cập nhật liên hệ (sổ địa chỉ).
     * @request PUT:/customer/updatecontactwithrole
     * @secure
     */
    updatecontactwithroleUpdate: (
      data: UpdatePartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/customer/updatecontactwithrole`,
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
     * @tags Customer
     * @name DeletecontactwithroleDelete
     * @summary Xóa liên hệ (sổ địa chỉ).
     * @request DELETE:/customer/deletecontactwithrole
     * @secure
     */
    deletecontactwithroleDelete: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id phương thức liên lạc của party (thực thể/ đối tượng).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/customer/deletecontactwithrole`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name MigratecustomervmlCreate
     * @summary Đông bộ dữ liệu KH.
     * @request POST:/customer/migratecustomervml
     * @secure
     */
    migratecustomervmlCreate: (
      data: CreateMigrateCustomerModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<MigrateCustomerModelDataResponseDto, any>({
        path: `/customer/migratecustomervml`,
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
     * @tags Customer
     * @name GetcustomerbyphoneDetail
     * @summary Thông tin chi tiết khách hàng theo sđt.
     * @request GET:/customer/getcustomerbyphone/{phone}
     * @secure
     */
    getcustomerbyphoneDetail: (
      phone: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/customer/getcustomerbyphone/${phone}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Customer
     * @name GetallcustomerbydtcodeCreate
     * @summary Danh sách khách hàng ma DT.
     * @request POST:/customer/getallcustomerbydtcode
     * @secure
     */
    getallcustomerbydtcodeCreate: (
      data: GetAllCustomerDTCodeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerDTCodeModelPagedResultDtoDataResponseDto, any>({
        path: `/customer/getallcustomerbydtcode`,
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
     * @tags Customer
     * @name GetpartiesmultisearchCreate
     * @summary Danh sách khách hàng.
     * @request POST:/customer/getpartiesmultisearch
     * @secure
     */
    getpartiesmultisearchCreate: (
      data: GetAllPartyRequestModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GuidListDataResponseDto, any>({
        path: `/customer/getpartiesmultisearch`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  customercheckfromacb = {
    /**
     * No description
     *
     * @tags CustomerCheckFromACB
     * @name CheckcustomervanumberDetail
     * @summary Kiểm tra thông tin mã VA của KH.
     * @request GET:/customercheckfromacb/checkcustomervanumber/{vaNumber}
     * @secure
     */
    checkcustomervanumberDetail: (
      vaNumber: string,
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
        path: `/customercheckfromacb/checkcustomervanumber/${vaNumber}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  customersegment = {
    /**
     * No description
     *
     * @tags CustomerSegment
     * @name GetallCreate
     * @summary Danh sách cụm khách hàng.
     * @request POST:/customersegment/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCustomerSegmentModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentModelPagedResultDtoDataResponseDto, any>({
        path: `/customersegment/getall`,
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
     * @tags CustomerSegment
     * @name GetbyidDetail
     * @summary Thông tin chi tiết cụm khách hàng.
     * @request GET:/customersegment/getbyid/{Id}
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
      this.request<CustomerSegmentModelDataResponseDto, any>({
        path: `/customersegment/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerSegment
     * @name CreateCreate
     * @summary Tạo cụm khách hàng.
     * @request POST:/customersegment/create
     * @secure
     */
    createCreate: (
      data: CreateCustomerSegmentModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentModelDataResponseDto, any>({
        path: `/customersegment/create`,
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
     * @tags CustomerSegment
     * @name UpdateUpdate
     * @summary Cập nhật cụm khách hàng.
     * @request PUT:/customersegment/update
     * @secure
     */
    updateUpdate: (
      data: UpdateCustomerSegmentModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentModelDataResponseDto, any>({
        path: `/customersegment/update`,
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
     * @tags CustomerSegment
     * @name DeleteDelete
     * @summary Xóa cụm khách hàng.
     * @request DELETE:/customersegment/delete/{Id}
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
        path: `/customersegment/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerSegment
     * @name GetbycustomeridDetail
     * @summary Danh sách tập khách hàng theo customerId.
     * @request GET:/customersegment/getbycustomerid/{CustomerId}
     * @secure
     */
    getbycustomeridDetail: (
      customerId: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentModelListDataResponseDto, any>({
        path: `/customersegment/getbycustomerid/${customerId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerSegment
     * @name GetcustomersegmentbycustomeridCreate
     * @summary Danh sách tập khách hàng theo partyId.
     * @request POST:/customersegment/getcustomersegmentbycustomerid
     * @secure
     */
    getcustomersegmentbycustomeridCreate: (
      data: GetAllCustomerSegmentByCustomerModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentModelListDataResponseDto, any>({
        path: `/customersegment/getcustomersegmentbycustomerid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  customersegmenttype = {
    /**
     * No description
     *
     * @tags CustomerSegmentType
     * @name GetallCreate
     * @summary Danh sách loại cụm khách hàng.
     * @request POST:/customersegmenttype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCustomerSegmentTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/customersegmenttype/getall`,
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
     * @tags CustomerSegmentType
     * @name GetCustomersegmenttype
     * @summary Thông tin chi tiết loại cụm khách hàng.
     * @request GET:/customersegmenttype/get/{Id}
     * @secure
     */
    getCustomersegmenttype: (
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
      this.request<CustomerSegmentTypeModelDataResponseDto, any>({
        path: `/customersegmenttype/get/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerSegmentType
     * @name CreateCreate
     * @summary Tạo loại cụm khách hàng.
     * @request POST:/customersegmenttype/create
     * @secure
     */
    createCreate: (
      data: CreateCustomerSegmentTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentTypeModelDataResponseDto, any>({
        path: `/customersegmenttype/create`,
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
     * @tags CustomerSegmentType
     * @name UpdateUpdate
     * @summary Cập nhật loại cụm khách hàng.
     * @request PUT:/customersegmenttype/update
     * @secure
     */
    updateUpdate: (
      data: UpdateCustomerSegmentTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentTypeModelDataResponseDto, any>({
        path: `/customersegmenttype/update`,
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
     * @tags CustomerSegmentType
     * @name DeleteDelete
     * @summary Xóa loại cụm khách hàng.
     * @request DELETE:/customersegmenttype/delete/{Id}
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
        path: `/customersegmenttype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerSegmentType
     * @name GetallbyidsCreate
     * @summary Danh sách loại cụm khách hàng theo ids.
     * @request POST:/customersegmenttype/getallbyids
     * @secure
     */
    getallbyidsCreate: (
      data: GetAllByListIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentTypeModelListDataResponseDto, any>({
        path: `/customersegmenttype/getallbyids`,
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
     * @tags CustomerSegmentType
     * @name GetallsegmenttyperecycleCreate
     * @summary Danh sách loại cụm khách hàng đã bị xóa.
     * @request POST:/customersegmenttype/getallsegmenttyperecycle
     * @secure
     */
    getallsegmenttyperecycleCreate: (
      data: GetAllCustomerSegmentTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/customersegmenttype/getallsegmenttyperecycle`,
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
     * @tags CustomerSegmentType
     * @name RestoresegmenttypeUpdate
     * @summary Khôi phục thông tin loại cụm khách hàng đã bị xóa.
     * @request PUT:/customersegmenttype/restoresegmenttype
     * @secure
     */
    restoresegmenttypeUpdate: (
      query?: {
        /** @format uuid */
        idSegmentType?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/customersegmenttype/restoresegmenttype`,
        method: 'PUT',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerSegmentType
     * @name PhysicaldeletesegmenttypeDelete
     * @summary Xóa vật lý (mất vĩnh viễn) loại cụm khách hàng.
     * @request DELETE:/customersegmenttype/physicaldeletesegmenttype
     * @secure
     */
    physicaldeletesegmenttypeDelete: (
      query?: {
        /** @format uuid */
        idSegmentType?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/customersegmenttype/physicaldeletesegmenttype`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  customertype = {
    /**
     * No description
     *
     * @tags CustomerType
     * @name GetallCreate
     * @summary Danh sách loại khách hàng.
     * @request POST:/customertype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCustomerTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/customertype/getall`,
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
     * @tags CustomerType
     * @name GetbyidDetail
     * @summary Thông tin chi tiết loại khách hàng.
     * @request GET:/customertype/getbyid/{Id}
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
      this.request<CustomerTypeModelDataResponseDto, any>({
        path: `/customertype/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerType
     * @name CreateCreate
     * @summary Tạo loại khách hàng.
     * @request POST:/customertype/create
     * @secure
     */
    createCreate: (
      data: CreateCustomerTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerTypeModelDataResponseDto, any>({
        path: `/customertype/create`,
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
     * @tags CustomerType
     * @name UpdateUpdate
     * @summary Cập nhật loại khách hàng.
     * @request PUT:/customertype/update
     * @secure
     */
    updateUpdate: (
      data: UpdateCustomerTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerTypeModelDataResponseDto, any>({
        path: `/customertype/update`,
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
     * @tags CustomerType
     * @name DeleteDelete
     * @summary Xóa loại khách hàng.
     * @request DELETE:/customertype/delete/{Id}
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
        path: `/customertype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  customertypegroup = {
    /**
     * No description
     *
     * @tags CustomerTypeGroup
     * @name GetallCreate
     * @summary Danh sách loại nhóm khách hàng.
     * @request POST:/customertypegroup/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCustomerTypeGroupModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerTypeGroupModelPagedResultDtoDataResponseDto, any>({
        path: `/customertypegroup/getall`,
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
     * @tags CustomerTypeGroup
     * @name GetbyidDetail
     * @summary Thông tin chi tiết loại nhóm khách hàng.
     * @request GET:/customertypegroup/getbyid/{Id}
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
      this.request<CustomerTypeGroupModelDataResponseDto, any>({
        path: `/customertypegroup/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomerTypeGroup
     * @name CreateCreate
     * @summary Tạo loại nhóm khách hàng.
     * @request POST:/customertypegroup/create
     * @secure
     */
    createCreate: (
      data: CreateCustomerTypeGroupModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerTypeGroupModelDataResponseDto, any>({
        path: `/customertypegroup/create`,
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
     * @tags CustomerTypeGroup
     * @name UpdateUpdate
     * @summary Cập nhật loại nhóm khách hàng.
     * @request PUT:/customertypegroup/update
     * @secure
     */
    updateUpdate: (
      data: UpdateCustomerTypeGroupModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerTypeGroupModelDataResponseDto, any>({
        path: `/customertypegroup/update`,
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
     * @tags CustomerTypeGroup
     * @name DeleteDelete
     * @summary Xóa loại nhóm khách hàng.
     * @request DELETE:/customertypegroup/delete/{Id}
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
        path: `/customertypegroup/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  employee = {
    /**
     * No description
     *
     * @tags Employee
     * @name GetallCreate
     * @summary Danh sách nhân viên.
     * @request POST:/employee/getall
     * @secure
     */
    getallCreate: (
      data: GetAllEmployeeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartySearchModelPagedResultDtoDataResponseDto, any>({
        path: `/employee/getall`,
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
     * @tags Employee
     * @name GetbyidDetail
     * @summary Thông tin chi tiết nhân viên theo id.
     * @request GET:/employee/getbyid/{Id}
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
      this.request<PartyModelDataResponseDto, any>({
        path: `/employee/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name CreateCreate
     * @summary Tạo nhân viên.
     * @request POST:/employee/create
     * @secure
     */
    createCreate: (
      data: CreatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/employee/create`,
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
     * @tags Employee
     * @name UpdateUpdate
     * @summary Cập nhật nhân viên.
     * @request PUT:/employee/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/employee/update`,
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
     * @tags Employee
     * @name GetroleemployeebyidDetail
     * @summary Thông tin chi tiết role nhân viên theo id.
     * @request GET:/employee/getroleemployeebyid/{employeeId}
     * @secure
     */
    getroleemployeebyidDetail: (
      employeeId: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RoleEmployeeModelDataResponseDto, any>({
        path: `/employee/getroleemployeebyid/${employeeId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name GetallcontactwithroleCreate
     * @summary Danh sách liên hệ (sổ địa chỉ).
     * @request POST:/employee/getallcontactwithrole
     * @secure
     */
    getallcontactwithroleCreate: (
      data: GetAllPartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelPagedResultDtoDataResponseDto, any>({
        path: `/employee/getallcontactwithrole`,
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
     * @tags Employee
     * @name GetcontactdetailwithrolebyidList
     * @summary Thông tin chi tiết liên hệ (sổ địa chỉ).
     * @request GET:/employee/getcontactdetailwithrolebyid
     * @secure
     */
    getcontactdetailwithrolebyidList: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id phương thức liên lạc của party (thực thể/ đối tượng).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/employee/getcontactdetailwithrolebyid`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name CreatecontactwithroleCreate
     * @summary Tạo liên hệ (sổ địa chỉ).
     * @request POST:/employee/createcontactwithrole
     * @secure
     */
    createcontactwithroleCreate: (
      data: CreatePartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/employee/createcontactwithrole`,
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
     * @tags Employee
     * @name UpdatecontactwithroleUpdate
     * @summary Cập nhật liên hệ (sổ địa chỉ).
     * @request PUT:/employee/updatecontactwithrole
     * @secure
     */
    updatecontactwithroleUpdate: (
      data: UpdatePartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/employee/updatecontactwithrole`,
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
     * @tags Employee
     * @name DeletecontactwithroleDelete
     * @summary Xóa liên hệ (sổ địa chỉ).
     * @request DELETE:/employee/deletecontactwithrole
     * @secure
     */
    deletecontactwithroleDelete: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id phương thức liên lạc của party (thực thể/ đối tượng).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/employee/deletecontactwithrole`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name GetemployeebyemailDetail
     * @summary Thông tin chi tiết nhân viên theo email.
     * @request GET:/employee/getemployeebyemail/{email}
     * @secure
     */
    getemployeebyemailDetail: (
      email: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/employee/getemployeebyemail/${email}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  employeetype = {
    /**
     * No description
     *
     * @tags EmployeeType
     * @name GetallCreate
     * @summary Danh sách loại nhân viên.
     * @request POST:/employeetype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllEmployeeTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EmployeeTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/employeetype/getall`,
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
     * @tags EmployeeType
     * @name GetbyidDetail
     * @summary Thông tin chi tiết loại nhân viên.
     * @request GET:/employeetype/getbyid/{Id}
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
      this.request<EmployeeTypeModelDataResponseDto, any>({
        path: `/employeetype/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmployeeType
     * @name CreateCreate
     * @summary Tạo loại nhân viên.
     * @request POST:/employeetype/create
     * @secure
     */
    createCreate: (
      data: CreateEmployeeTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EmployeeTypeModelDataResponseDto, any>({
        path: `/employeetype/create`,
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
     * @tags EmployeeType
     * @name UpdateUpdate
     * @summary Cập nhật loại nhân viên.
     * @request PUT:/employeetype/update
     * @secure
     */
    updateUpdate: (
      data: UpdateEmployeeTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EmployeeTypeModelDataResponseDto, any>({
        path: `/employeetype/update`,
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
     * @tags EmployeeType
     * @name DeleteDelete
     * @summary Xóa loại nhân viên.
     * @request DELETE:/employeetype/delete/{Id}
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
        path: `/employeetype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  entityhistorychanges = {
    /**
     * No description
     *
     * @tags EntityHistoryChanges
     * @name EnumdatatypeList
     * @request GET:/entityhistorychanges/enumdatatype
     * @secure
     */
    enumdatatypeList: (
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<StringEnumDataTypeModelListDataResponseDto, any>({
        path: `/entityhistorychanges/enumdatatype`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntityHistoryChanges
     * @name GetallchangesetbyidCreate
     * @request POST:/entityhistorychanges/getallchangesetbyid
     * @secure
     */
    getallchangesetbyidCreate: (
      data: GetAllEntityHistoryChangeSetModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EntityHistoryChangeSetModelPagedResultDtoDataResponseDto, any>({
        path: `/entityhistorychanges/getallchangesetbyid`,
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
     * @tags EntityHistoryChanges
     * @name GetallchangebyidCreate
     * @request POST:/entityhistorychanges/getallchangebyid
     * @secure
     */
    getallchangebyidCreate: (
      data: GetAllEntityHistoryChangeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EntityHistoryChangeModelPagedResultDtoDataResponseDto, any>({
        path: `/entityhistorychanges/getallchangebyid`,
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
     * @tags EntityHistoryChanges
     * @name GetallpropertychangebychangeidCreate
     * @request POST:/entityhistorychanges/getallpropertychangebychangeid
     * @secure
     */
    getallpropertychangebychangeidCreate: (
      data: GetAllEntityHistoryPropertyChangeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EntityHistoryPropertyChangeModelPagedResultDtoDataResponseDto, any>({
        path: `/entityhistorychanges/getallpropertychangebychangeid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  party = {
    /**
     * No description
     *
     * @tags Party
     * @name GetgendersList
     * @summary Danh sách giới tính.
     * @request GET:/party/getgenders
     * @secure
     */
    getgendersList: (
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EnumGenderModelListDataResponseDto, any>({
        path: `/party/getgenders`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Party
     * @name GetaddresstypeList
     * @summary Danh sách loại địa chỉ.
     * @request GET:/party/getaddresstype
     * @secure
     */
    getaddresstypeList: (
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<EnumGenderModelListDataResponseDto, any>({
        path: `/party/getaddresstype`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Party
     * @name SearchallpartyCreate
     * @summary Tìm kiếm party (thực thể/ đối tượng).
     * @request POST:/party/searchallparty
     * @secure
     */
    searchallpartyCreate: (
      data: SearchAllPartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartySearchModelPagedResultDtoDataResponseDto, any>({
        path: `/party/searchallparty`,
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
     * @tags Party
     * @name GetallCreate
     * @summary Danh sách party (thực thể/ đối tượng).
     * @request POST:/party/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartySearchModelPagedResultDtoDataResponseDto, any>({
        path: `/party/getall`,
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
     * @tags Party
     * @name GetbyidDetail
     * @summary Thông tin chi tiết party (thực thể/ đối tượng) theo id.
     * @request GET:/party/getbyid/{Id}
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
      this.request<PartyModelDataResponseDto, any>({
        path: `/party/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Party
     * @name CreateCreate
     * @summary Tạo party (thực thể/ đối tượng).
     * @request POST:/party/create
     * @secure
     */
    createCreate: (
      data: CreatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/party/create`,
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
     * @tags Party
     * @name UpdateUpdate
     * @summary Cập nhật party (thực thể/ đối tượng).
     * @request PUT:/party/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/party/update`,
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
     * @tags Party
     * @name GetallcontactCreate
     * @summary Danh sách liên hệ (sổ địa chỉ).
     * @request POST:/party/getallcontact
     * @secure
     */
    getallcontactCreate: (
      data: GetAllPartyContactModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelPagedResultDtoDataResponseDto, any>({
        path: `/party/getallcontact`,
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
     * @tags Party
     * @name GetcontactdetailbyidList
     * @summary Thông tin chi tiết liên hệ (sổ địa chỉ).
     * @request GET:/party/getcontactdetailbyid
     * @secure
     */
    getcontactdetailbyidList: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id phương thức liên lạc của party (thực thể/ đối tượng).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/party/getcontactdetailbyid`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Party
     * @name GetmultiplecontactdetailsCreate
     * @summary Lấy danh sách chi tiết liên hệ theo danh sách party id
     * @request POST:/party/getmultiplecontactdetails
     * @secure
     */
    getmultiplecontactdetailsCreate: (
      data: GetMultiplePartyContactsModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelListDataResponseDto, any>({
        path: `/party/getmultiplecontactdetails`,
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
     * @tags Party
     * @name CreatecontactCreate
     * @summary Tạo liên hệ (sổ địa chỉ).
     * @request POST:/party/createcontact
     * @secure
     */
    createcontactCreate: (
      data: CreatePartyContactByRoleTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/party/createcontact`,
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
     * @tags Party
     * @name UpdatecontactUpdate
     * @summary Cập nhật liên hệ (sổ địa chỉ).
     * @request PUT:/party/updatecontact
     * @secure
     */
    updatecontactUpdate: (
      data: UpdatePartyContactByRoleTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyContactModelDataResponseDto, any>({
        path: `/party/updatecontact`,
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
     * @tags Party
     * @name DeletecontactDelete
     * @summary Xóa liên hệ (sổ địa chỉ).
     * @request DELETE:/party/deletecontact
     * @secure
     */
    deletecontactDelete: (
      query?: {
        /**
         * Id party (thực thể/ đối tượng).
         * @format uuid
         */
        PartyId?: string;
        /**
         * Id phương thức liên lạc của party (thực thể/ đối tượng).
         * @format uuid
         */
        Id?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/party/deletecontact`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Party
     * @name ActivepartyUpdate
     * @summary Bật/ tắt trạng thái hoạt động party (thực thể/ đối tượng).
     * @request PUT:/party/activeparty
     * @secure
     */
    activepartyUpdate: (
      data: DeletePartyModel,
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
        path: `/party/activeparty`,
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
     * @tags Party
     * @name CreatepartyroleCreate
     * @summary Tạo role cho party.
     * @request POST:/party/createpartyrole
     * @secure
     */
    createpartyroleCreate: (
      data: CreatePartyRoleModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyRoleModelDataResponseDto, any>({
        path: `/party/createpartyrole`,
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
     * @tags Party
     * @name UpdatepartyroleUpdate
     * @summary Cập nhật role cho party.
     * @request PUT:/party/updatepartyrole
     * @secure
     */
    updatepartyroleUpdate: (
      data: UpdatePartyRoleModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyRoleModelDataResponseDto, any>({
        path: `/party/updatepartyrole`,
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
     * @tags Party
     * @name DeletepartyroleDelete
     * @summary Xóa role cho party.
     * @request DELETE:/party/deletepartyrole
     * @secure
     */
    deletepartyroleDelete: (
      query?: {
        /**
         * Id party.
         * @format uuid
         */
        PartyId?: string;
        /**
         * Loại role party.
         * @format uuid
         */
        PartyRoleTypeId?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/party/deletepartyrole`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Party
     * @name GetpartybyphoneDetail
     * @summary Thông tin chi tiết khách hàng theo sđt.
     * @request GET:/party/getpartybyphone/{phone}
     * @secure
     */
    getpartybyphoneDetail: (
      phone: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/party/getpartybyphone/${phone}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Party
     * @name GetpartyroleDetail
     * @summary Thông tin chi tiết khách hàng theo idRole.
     * @request GET:/party/getpartyrole/{idRole}
     * @secure
     */
    getpartyroleDetail: (
      idRole: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/party/getpartyrole/${idRole}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Party
     * @name GetpartybyidrolesCreate
     * @summary Thông tin chi tiết khách hàng theo idRoles.
     * @request POST:/party/getpartybyidroles
     * @secure
     */
    getpartybyidrolesCreate: (
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
      this.request<PartyModelV2ListDataResponseDto, any>({
        path: `/party/getpartybyidroles`,
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
     * @tags Party
     * @name CreatecustomerpersonCreate
     * @summary Kiểm tra và tạp KH cá nhân.
     * @request POST:/party/createcustomerperson
     * @secure
     */
    createcustomerpersonCreate: (
      data: CreatePartyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyModelDataResponseDto, any>({
        path: `/party/createcustomerperson`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  partyaffiliation = {
    /**
     * No description
     *
     * @tags PartyAffiliation
     * @name GetallCreate
     * @summary Danh sách mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request POST:/partyaffiliation/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPartyAffiliationModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationModelPagedResultDtoDataResponseDto, any>({
        path: `/partyaffiliation/getall`,
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
     * @tags PartyAffiliation
     * @name GetbyidDetail
     * @summary Thông tin chi tiết mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request GET:/partyaffiliation/getbyid/{Id}
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
      this.request<PartyAffiliationModelDataResponseDto, any>({
        path: `/partyaffiliation/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PartyAffiliation
     * @name CreateCreate
     * @summary Tạo mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request POST:/partyaffiliation/create
     * @secure
     */
    createCreate: (
      data: CreatePartyAffiliationModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationModelDataResponseDto, any>({
        path: `/partyaffiliation/create`,
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
     * @tags PartyAffiliation
     * @name UpdateUpdate
     * @summary Cập nhật mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request PUT:/partyaffiliation/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyAffiliationModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationModelDataResponseDto, any>({
        path: `/partyaffiliation/update`,
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
     * @tags PartyAffiliation
     * @name DeleteDelete
     * @summary Xóa mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request DELETE:/partyaffiliation/delete/{Id}
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
        path: `/partyaffiliation/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PartyAffiliation
     * @name GetallbyhierarchicalCreate
     * @summary Danh sách mối liên hệ giữa các party (thực thể/ đối tượng) theo cây phân cấp.
     * @request POST:/partyaffiliation/getallbyhierarchical
     * @secure
     */
    getallbyhierarchicalCreate: (
      data: GetAllByHierarchicalModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationModelListDataResponseDto, any>({
        path: `/partyaffiliation/getallbyhierarchical`,
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
     * @tags PartyAffiliation
     * @name GetbysubpartyDetail
     * @summary Thông tin chi tiết mối liên hệ giữa các party (thực thể/ đối tượng) theo subparty.
     * @request GET:/partyaffiliation/getbysubparty/{partyId}
     * @secure
     */
    getbysubpartyDetail: (
      partyId: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationModelDataResponseDto, any>({
        path: `/partyaffiliation/getbysubparty/${partyId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PartyAffiliation
     * @name GetallsalesCreate
     * @summary Danh sách mối liên hệ giữa sales các agency.
     * @request POST:/partyaffiliation/getallsales
     * @secure
     */
    getallsalesCreate: (
      data: GetAllPartyAffiliationModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationModelPagedResultDtoDataResponseDto, any>({
        path: `/partyaffiliation/getallsales`,
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
     * @tags PartyAffiliation
     * @name GetallaffiliationagencyCreate
     * @summary Danh sách mối liên hệ giữa các party (thực thể/ đối tượng) agency.
     * @request POST:/partyaffiliation/getallaffiliationagency
     * @secure
     */
    getallaffiliationagencyCreate: (
      data: GetAllPartyAffiliationModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationModelPagedResultDtoDataResponseDto, any>({
        path: `/partyaffiliation/getallaffiliationagency`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  partyaffiliationtype = {
    /**
     * No description
     *
     * @tags PartyAffiliationType
     * @name GetallCreate
     * @summary Danh sách loại mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request POST:/partyaffiliationtype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPartyAffiliationTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/partyaffiliationtype/getall`,
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
     * @tags PartyAffiliationType
     * @name GetbyidDetail
     * @summary Thông tin chi tiết loại mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request GET:/partyaffiliationtype/getbyid/{Id}
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
      this.request<PartyAffiliationTypeModelDataResponseDto, any>({
        path: `/partyaffiliationtype/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PartyAffiliationType
     * @name CreateCreate
     * @summary Tạo loại mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request POST:/partyaffiliationtype/create
     * @secure
     */
    createCreate: (
      data: CreatePartyAffiliationTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationTypeModelDataResponseDto, any>({
        path: `/partyaffiliationtype/create`,
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
     * @tags PartyAffiliationType
     * @name UpdateUpdate
     * @summary Cập nhật loại mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request PUT:/partyaffiliationtype/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyAffiliationTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyAffiliationTypeModelDataResponseDto, any>({
        path: `/partyaffiliationtype/update`,
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
     * @tags PartyAffiliationType
     * @name DeleteDelete
     * @summary Xóa loại mối liên hệ giữa các party (thực thể/ đối tượng).
     * @request DELETE:/partyaffiliationtype/delete/{Id}
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
        path: `/partyaffiliationtype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  partyidentificationtype = {
    /**
     * No description
     *
     * @tags PartyIdentificationType
     * @name GetallCreate
     * @summary Danh sách loại định danh.
     * @request POST:/partyidentificationtype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPartyIdentificationTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyIdentificationTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/partyidentificationtype/getall`,
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
     * @tags PartyIdentificationType
     * @name GetbyidDetail
     * @summary Thông tin chi tiết loại định danh.
     * @request GET:/partyidentificationtype/getbyid/{Id}
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
      this.request<PartyIdentificationTypeModelDataResponseDto, any>({
        path: `/partyidentificationtype/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PartyIdentificationType
     * @name CreateCreate
     * @summary Tạo loại định danh.
     * @request POST:/partyidentificationtype/create
     * @secure
     */
    createCreate: (
      data: CreatePartyIdentificationTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyIdentificationTypeModelDataResponseDto, any>({
        path: `/partyidentificationtype/create`,
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
     * @tags PartyIdentificationType
     * @name UpdateUpdate
     * @summary Cập nhật loại định danh.
     * @request PUT:/partyidentificationtype/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyIdentificationTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyIdentificationTypeModelDataResponseDto, any>({
        path: `/partyidentificationtype/update`,
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
     * @tags PartyIdentificationType
     * @name DeleteDelete
     * @summary Xóa loại định danh.
     * @request DELETE:/partyidentificationtype/delete/{Id}
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
        path: `/partyidentificationtype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  partyroletype = {
    /**
     * No description
     *
     * @tags PartyRoleType
     * @name GetallCreate
     * @summary Danh sách loại role.
     * @request POST:/partyroletype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPartyRoleTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyRoleTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/partyroletype/getall`,
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
     * @tags PartyRoleType
     * @name GetbyidDetail
     * @summary Thông tin chi tiết loại role.
     * @request GET:/partyroletype/getbyid/{Id}
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
      this.request<PartyRoleTypeModelDataResponseDto, any>({
        path: `/partyroletype/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PartyRoleType
     * @name CreateCreate
     * @summary Tạo loại role.
     * @request POST:/partyroletype/create
     * @secure
     */
    createCreate: (
      data: CreatePartyRoleTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyRoleTypeModelDataResponseDto, any>({
        path: `/partyroletype/create`,
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
     * @tags PartyRoleType
     * @name UpdateUpdate
     * @summary Cập nhật loại role.
     * @request PUT:/partyroletype/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyRoleTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyRoleTypeModelDataResponseDto, any>({
        path: `/partyroletype/update`,
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
     * @tags PartyRoleType
     * @name DeleteDelete
     * @summary Xóa loại role.
     * @request DELETE:/partyroletype/delete/{Id}
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
        path: `/partyroletype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  partytype = {
    /**
     * No description
     *
     * @tags PartyType
     * @name GetallCreate
     * @summary Danh sách loại party (thực thể/ đối tượng).
     * @request POST:/partytype/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPartyTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyTypeModelPagedResultDtoDataResponseDto, any>({
        path: `/partytype/getall`,
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
     * @tags PartyType
     * @name GetbyidDetail
     * @summary Thông tin chi tiết loại party (thực thể/ đối tượng).
     * @request GET:/partytype/getbyid/{Id}
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
      this.request<PartyTypeModelDataResponseDto, any>({
        path: `/partytype/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PartyType
     * @name CreateCreate
     * @summary Tạo loại party (thực thể/ đối tượng).
     * @request POST:/partytype/create
     * @secure
     */
    createCreate: (
      data: CreatePartyTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyTypeModelDataResponseDto, any>({
        path: `/partytype/create`,
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
     * @tags PartyType
     * @name UpdateUpdate
     * @summary Cập nhật loại party (thực thể/ đối tượng).
     * @request PUT:/partytype/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePartyTypeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PartyTypeModelDataResponseDto, any>({
        path: `/partytype/update`,
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
     * @tags PartyType
     * @name DeleteDelete
     * @summary Xóa loại party (thực thể/ đối tượng).
     * @request DELETE:/partytype/delete/{Id}
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
        path: `/partytype/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  team = {
    /**
     * No description
     *
     * @tags Team
     * @name GetallCreate
     * @summary Danh sách đội.
     * @request POST:/team/getall
     * @secure
     */
    getallCreate: (
      data: GetAllTeamModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<TeamModelPagedResultDtoDataResponseDto, any>({
        path: `/team/getall`,
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
     * @tags Team
     * @name GetbyidDetail
     * @summary Thông tin chi tiết đội.
     * @request GET:/team/getbyid/{Id}
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
      this.request<EmployeeTypeModelDataResponseDto, any>({
        path: `/team/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name CreateCreate
     * @summary Tạo đội.
     * @request POST:/team/create
     * @secure
     */
    createCreate: (
      data: CreateTeamModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<TeamModelDataResponseDto, any>({
        path: `/team/create`,
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
     * @tags Team
     * @name UpdateUpdate
     * @summary Cập nhật đội.
     * @request PUT:/team/update
     * @secure
     */
    updateUpdate: (
      data: UpdateTeamModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<TeamModelDataResponseDto, any>({
        path: `/team/update`,
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
     * @tags Team
     * @name DeleteDelete
     * @summary Xóa đội.
     * @request DELETE:/team/delete/{Id}
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
        path: `/team/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Team
     * @name GetallteambyidsCreate
     * @summary Danh sách đội theo ids.
     * @request POST:/team/getallteambyids
     * @secure
     */
    getallteambyidsCreate: (
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
      this.request<TeamModelListDataResponseDto, any>({
        path: `/team/getallteambyids`,
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
