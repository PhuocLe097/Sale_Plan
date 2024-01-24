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

export interface AddProductBundleColectionInput {
  /**
   * Id bộ sản phẩm
   * @format uuid
   */
  productBundleId?: string;
  /** Danh sách sản phẩm trong bộ sản phẩm */
  productBundleColections?: ProductBundleColectionInput[] | null;
}

export interface AddProductRelatedModel {
  /** @format uuid */
  productId?: string;
  productRelateds?: CreateProductRelated[] | null;
}

/** ApplicationCategorySettingModel */
export interface ApplicationCategorySettingModel {
  /** @format uuid */
  id?: string;
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /** Kích hoạt */
  isActive?: boolean;
  /**
   * License Id
   * @format uuid
   */
  licenseId?: string | null;
  /** CategoryModel */
  category?: CategoryModel;
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

export interface ApplicationCategorySettingModelDataResponseDto {
  /** ApplicationCategorySettingModel */
  data?: ApplicationCategorySettingModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ApplicationCategorySettingModelPagedResultDto {
  items?: ApplicationCategorySettingModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ApplicationCategorySettingModelPagedResultDtoDataResponseDto {
  data?: ApplicationCategorySettingModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** ApplicationProductSettingModel */
export interface ApplicationProductSettingModel {
  /** @format uuid */
  id?: string;
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /** Tên danh mục. */
  categoryName?: string | null;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Kích hoạt */
  isActive?: boolean;
  product?: ProductModel;
  /**
   * License Id
   * @format uuid
   */
  licenseId?: string | null;
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

export interface ApplicationProductSettingModelDataResponseDto {
  /** ApplicationProductSettingModel */
  data?: ApplicationProductSettingModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ApplicationProductSettingModelPagedResultDto {
  items?: ApplicationProductSettingModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ApplicationProductSettingModelPagedResultDtoDataResponseDto {
  data?: ApplicationProductSettingModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** Tạo liên kết sản phẩm */
export interface ApplyProductRelatedInput {
  relatedType?: ERelatedType;
  /**
   * Id sản phẩm chính
   * @format uuid
   */
  productPrimaryId?: string;
  /** Danh sách id sản phẩm liên kết */
  productRelatedIds?: string[] | null;
}

/** BestSellingProductModel */
export interface BestSellingProductModel {
  /** @format uuid */
  id?: string;
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /** Tên danh mục. */
  categoryName?: string | null;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Tên sản phẩm. */
  productName?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
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

export interface BestSellingProductModelDataResponseDto {
  /** BestSellingProductModel */
  data?: BestSellingProductModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface BestSellingProductModelPagedResultDto {
  items?: BestSellingProductModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface BestSellingProductModelPagedResultDtoDataResponseDto {
  data?: BestSellingProductModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface BooleanDataResponseDto {
  data?: boolean;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** BrandModel */
export interface BrandModel {
  /** @format uuid */
  id?: string;
  /** Tên thương hiệu sản phẩm. */
  name?: string | null;
  /** Slug thương hiệu sản phẩm. */
  slug?: string | null;
  /** Mô tả thương hiệu sản phẩm. */
  description?: string | null;
  /** Cho phép được công khai. */
  isPublished?: boolean;
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

export interface BrandModelDataResponseDto {
  /** BrandModel */
  data?: BrandModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface BrandModelPagedResultDto {
  items?: BrandModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface BrandModelPagedResultDtoDataResponseDto {
  data?: BrandModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** CategoryDynamicPropertyModel */
export interface CategoryDynamicPropertyDataModel {
  /** @format uuid */
  id?: string;
  /**
   * Id tính chất danh mục.
   * @format uuid
   */
  categoryDynamicPropertyId?: string;
  /** Tên tính chất danh mục. */
  name?: string | null;
  dataType?: EDataType;
  /** Tên hiển thị. */
  displayName?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
  /** Giá trị của tính chất danh mục. */
  value?: string | null;
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

export interface CategoryDynamicPropertyDataModelDataResponseDto {
  /** CategoryDynamicPropertyModel */
  data?: CategoryDynamicPropertyDataModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CategoryDynamicPropertyDataModelPagedResultDto {
  items?: CategoryDynamicPropertyDataModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CategoryDynamicPropertyDataModelPagedResultDtoDataResponseDto {
  data?: CategoryDynamicPropertyDataModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** CategoryDynamicPropertyModel */
export interface CategoryDynamicPropertyModel {
  /** @format uuid */
  id?: string;
  /** Tên tính chất danh mục. */
  name?: string | null;
  dataType?: EDataType;
  /** Tển hiển thị. */
  displayName?: string | null;
  /** Kich hoạt */
  isActive?: boolean;
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

export interface CategoryDynamicPropertyModelDataResponseDto {
  /** CategoryDynamicPropertyModel */
  data?: CategoryDynamicPropertyModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CategoryDynamicPropertyModelPagedResultDto {
  items?: CategoryDynamicPropertyModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CategoryDynamicPropertyModelPagedResultDtoDataResponseDto {
  data?: CategoryDynamicPropertyModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CategoryGroupModel {
  /** Slug danh mục sản phẩm. */
  slug?: string | null;
  /** Tên danh mục sản phẩm. */
  name?: string | null;
  /** Mô tả danh mục sản phẩm. */
  description?: string | null;
  /** Meta title danh mục sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword danh mục sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description danh mục sản phẩm. */
  metaDescription?: string | null;
  /**
   * Thứ tự hiển thị danh mục sản phẩm.
   * @format int32
   */
  displayOrder?: number | null;
  /** Cho phép hiển thị trong menu. */
  includeMenu?: boolean | null;
  /** Anh. */
  thumbnail?: string | null;
  /** Cho phép công khai. */
  isPublished?: boolean | null;
  categories?: CategoryGroupModel[] | null;
}

/** CategoryModel */
export interface CategoryModel {
  /** @format uuid */
  id?: string;
  /** Tên danh mục sản phẩm. */
  name?: string | null;
  /** Slug danh mục sản phẩm. */
  slug?: string | null;
  /** Mô tả danh mục sản phẩm. */
  description?: string | null;
  /** Meta title danh mục sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword danh mục sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description danh mục sản phẩm. */
  metaDescription?: string | null;
  /**
   * Thứ tự hiển thị danh mục sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /**
   * Id danh mục sản phẩm cha.
   * @format uuid
   */
  parentId?: string | null;
  /** Tên danh mục sản phẩm cha. */
  parentName?: string | null;
  /** Cho phép hiển thị trong menu. */
  includeMenu?: boolean;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /** Anh. */
  thumbnail?: string | null;
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
  /** Dạm sách danh mục sản phẩm con. */
  categories?: CategoryModel[] | null;
  /** Danh sách tính chất danh mục. */
  categoryDynamicProperties?: CategoryDynamicPropertyDataModel[] | null;
}

export interface CategoryModelDataResponseDto {
  /** CategoryModel */
  data?: CategoryModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CategoryModelListDataResponseDto {
  data?: CategoryModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CategoryModelPagedResultDto {
  items?: CategoryModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CategoryModelPagedResultDtoDataResponseDto {
  data?: CategoryModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface CategoryRecycleModel {
  /** @format uuid */
  id?: string;
  /** Tên danh mục sản phẩm. */
  name?: string | null;
  /** Slug danh mục sản phẩm. */
  slug?: string | null;
  /** Mô tả danh mục sản phẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị danh mục sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /**
   * Id danh mục sản phẩm cha.
   * @format uuid
   */
  parentId?: string | null;
  /** Tên danh mục sản phẩm cha. */
  parentName?: string | null;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Ngày xóa.
   * @format date-time
   */
  lastModificationTime?: string | null;
}

export interface CategoryRecycleModelPagedResultDto {
  items?: CategoryRecycleModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface CategoryRecycleModelPagedResultDtoDataResponseDto {
  data?: CategoryRecycleModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** Create ApplicationCategorySettingModel */
export interface CreateApplicationCategorySettingModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /** Kích hoạt */
  isActive?: boolean;
  /**
   * License Id
   * @format uuid
   */
  licenseId?: string | null;
}

/** Create ApplicationProductSettingModel */
export interface CreateApplicationProductSettingModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Kích hoạt */
  isActive?: boolean;
  /**
   * License Id
   * @format uuid
   */
  licenseId?: string | null;
}

/** Create BestSellingProductModel */
export interface CreateBestSellingProductModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Kích hoạt. */
  isActive?: boolean;
}

/** Create BrandModel */
export interface CreateBrandModel {
  /** Tên thương hiệu sản phẩm. */
  name?: string | null;
  /** Slug thương hiệu sản phẩm. */
  slug?: string | null;
  /** Mô tả thương hiệu sản phẩm. */
  description?: string | null;
  /** Cho phép được công khai. */
  isPublished?: boolean;
}

export interface CreateBundleInput {
  /**
   * ID sản phẩm
   * @format uuid
   */
  productId?: string;
  /** Mô tả */
  description?: string | null;
  /** Danh sách sản phẩm trong bộ sản phẩm */
  bundleColections?: ProductBundleColectionInput[] | null;
}

/** Create CategoryDynamicProperty */
export interface CreateCategoryDynamicPropertyDataModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /**
   * Id tính chất danh mục.
   * @format uuid
   */
  categoryDynamicPropertyId?: string;
  /** Giá trị thuộc tính danh mục. */
  value?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
}

/** Create CategoryDynamicPropertyModel */
export interface CreateCategoryDynamicPropertyModel {
  /** Tên tính chất danh mục. */
  name?: string | null;
  dataType?: EDataType;
  /** Tên hiển thị. */
  displayName?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
}

export interface CreateCategoryGroupModel {
  /** Slug danh mục sản phẩm. */
  slug?: string | null;
  /** Tên danh mục sản phẩm. */
  name?: string | null;
  /** Mô tả danh mục sản phẩm. */
  description?: string | null;
  /** Meta title danh mục sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword danh mục sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description danh mục sản phẩm. */
  metaDescription?: string | null;
  /**
   * Thứ tự hiển thị danh mục sản phẩm.
   * @format int32
   */
  displayOrder?: number | null;
  /** Cho phép hiển thị trong menu. */
  includeMenu?: boolean | null;
  /** Anh. */
  thumbnail?: string | null;
  /** Cho phép công khai. */
  isPublished?: boolean | null;
  categories?: CategoryGroupModel[] | null;
}

/** Create CategoryModel */
export interface CreateCategoryModel {
  /** Slug danh mục sản phẩm. */
  slug?: string | null;
  /** Tên danh mục sản phẩm. */
  name?: string | null;
  /** Mô tả danh mục sản phẩm. */
  description?: string | null;
  /** Meta title danh mục sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword danh mục sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description danh mục sản phẩm. */
  metaDescription?: string | null;
  /**
   * Thứ tự hiển thị danh mục sản phẩm.
   * @format int32
   */
  displayOrder?: number | null;
  /**
   * Id danh mục sản phầm cha.
   * @format uuid
   */
  parentId?: string | null;
  /** Cho phép hiển thị trong menu. */
  includeMenu?: boolean | null;
  /** Anh. */
  thumbnail?: string | null;
  /** Cho phép công khai. */
  isPublished?: boolean | null;
}

/** Create NewProductReleaseModel */
export interface CreateNewProductReleaseModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Kích hoạt. */
  isActive?: boolean;
}

/** Create PriceListAssignmentModel */
export interface CreatePriceListAssignmentModel {
  /**
   * The price list identifier.
   * @format uuid
   */
  priceListId?: string;
  /**
   * The customer segment type identifier.
   * @format uuid
   */
  customerSegmentTypeId?: string;
  /** Tthe condition expression. */
  conditionExpression?: string | null;
}

/** Create PriceListModel */
export interface CreatePriceListModel {
  /**
   * Currency Id.
   * @format uuid
   */
  currencyId?: string;
  /** Price list name */
  name?: string | null;
  /** Price list description. */
  description?: string | null;
  /**
   * Price list priority.
   * @format int32
   */
  priority?: number;
  /** Trạng thái hoạt động. */
  isActive?: boolean;
}

/** Create PriceModel */
export interface CreatePriceModel {
  /**
   * Id bảng giá.
   * @format uuid
   */
  priceListId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string;
  /**
   * Giá.
   * @format double
   */
  basePrice?: number;
  /**
   * Giá bán.
   * @format double
   */
  salePrice?: number | null;
  /**
   * Số lượng.
   * @format int32
   */
  minQuantity?: number;
  /**
   * Ngày bắt đầu.
   * @format date-time
   */
  startDate?: string | null;
  /**
   * Ngày kết thúc.
   * @format date-time
   */
  endDate?: string | null;
  computePrice?: EComputePrice;
  /**
   * Giảm giá theo %.
   * @format double
   */
  percent?: number | null;
  /** Mô tả. */
  description?: string | null;
}

/** Create ProductAttribute */
export interface CreateProductAttribute {
  /**
   * Id thuộc tính sản phẩm.
   * @format uuid
   */
  attributeId?: string;
  /** Giá trị thuộc tính sản phẩm. */
  value?: string | null;
}

/** Create ProductAttributeGroupModel */
export interface CreateProductAttributeGroupModel {
  /** Tên nhóm thuộc tính sản phẩm. */
  name?: string | null;
}

/** Create ProductAttributeModel */
export interface CreateProductAttributeModel {
  /**
   * Id nhóm thuộc tính sản phẩm.
   * @format uuid
   */
  productAttributeGroupId?: string;
  /** Tên thuộc tính sản phẩm. */
  name?: string | null;
}

/** Create ProductCategory */
export interface CreateProductCategory {
  /**
   * Id danh mục sản phẩm.
   * @format uuid
   */
  categoryId?: string;
}

/** Create ProductDynamicProperty */
export interface CreateProductDynamicPropertyDataModel {
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /**
   * Id tính chất sản phẩm.
   * @format uuid
   */
  productDynamicPropertyId?: string;
  /** Giá trị thuộc tính sản phẩm. */
  value?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
}

/** Create ProductDynamicPropertyModel */
export interface CreateProductDynamicPropertyModel {
  /** Tên tính chất sản phẩm. */
  name?: string | null;
  dataType?: EDataType;
  /** Tển hiển thị. */
  displayName?: string | null;
  /** Kich hoạt */
  isActive?: boolean;
}

/** Create ProductFeatureItemModel */
export interface CreateProductFeatureItemModel {
  /**
   * Id tính năng nổi bật sản phẩm.
   * @format uuid
   */
  productFeatureId?: string;
  /** Hình ảnh. */
  image?: string | null;
  /** Tiêu đề. */
  title?: string | null;
  /** Mô tả ngắn. */
  shortDescription?: string | null;
}

/** Create ProductFeatureModel */
export interface CreateProductFeatureModel {
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Mô tả. */
  description?: string | null;
}

export interface CreateProductGiftInput {
  productGiftType?: EProductGiftType;
  /**
   * Số lượng sản phẩm tặng
   * @format int32
   */
  maxChoice?: number;
  /** mô tả gói quà tặng */
  description?: string | null;
  /**
   * Ngày bắt đầu hiệu lực
   * @format date-time
   */
  effectStartDate?: string | null;
  /**
   * Ngày kết thúc hiệu lực
   * @format date-time
   */
  effectEndDate?: string | null;
  /** Danh sách sản phẩm tặng */
  giftItems?: CreateProductGiftItemInput[] | null;
}

export interface CreateProductGiftItemInput {
  /**
   * Số lượng sản phẩm tặng
   * @format float
   */
  quantity?: number | null;
  /**
   * Id sản phẩm tặng
   * @format uuid
   */
  productId?: string;
}

/** Create ProductMedia */
export interface CreateProductMedia {
  /** Url hình ảnh/ video sản phẩm. */
  url?: string | null;
  /** Tiêu để hình ảnh/ video sản phẩm. */
  title?: string | null;
  /** Mô tả hình ảnh/ video sản phẩm. */
  description?: string | null;
  mediaType?: EMediaType;
}

/** Create ProductModel */
export interface CreateProductModel {
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Meta title sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description sản phẩm. */
  metaDescription?: string | null;
  /** Mô tả ngắn sản phẩm. */
  shortDescription?: string | null;
  /** Mô tả sản sẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /**
   * Thời gian công khai sản phẩm.
   * @format date-time
   */
  publishedTime?: string | null;
  /** cho phép quản lý tồn kho. */
  stockTrackingIsEnabled?: boolean | null;
  /**
   * Số lượng sản phẩm.
   * @format int32
   */
  stockQuantity?: number | null;
  /** Sku sản phẩm. */
  sku?: string | null;
  /** Gtin sản phẩm. */
  gtin?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string | null;
  productType?: EProductType;
  /** Hình ảnh thumbnail. */
  thumbnail?: string | null;
  /** Đánh dấu sản phẩm mới. */
  markAsNew?: boolean | null;
  /**
   * Ngày bắt đầu đánh dấu sản phẩm mới.
   * @format date-time
   */
  markAsNewStartDate?: string | null;
  /**
   * Ngày kết thúc đánh dấu sản phẩm mới.
   * @format date-time
   */
  markAsNewEndDate?: string | null;
  /** Danh sách thuộc tính sản phẩm. */
  attributes?: CreateProductAttribute[] | null;
  /** Danh sách danh mục sản phẩm. */
  categories?: CreateProductCategory[] | null;
  /** Danh sách nhóm. */
  tags?: CreateProductTag[] | null;
  /** Danh sách hình ảnh/video sản phẩm. */
  medias?: CreateProductMedia[] | null;
  productRelateds?: CreateProductRelated[] | null;
  productOption?: CreateProductOption[] | null;
}

export interface CreateProductOption {
  name?: string | null;
  value?: string | null;
}

/** Biến thể sản phẩm */
export interface CreateProductRelated {
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Meta title sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description sản phẩm. */
  metaDescription?: string | null;
  /** Mô tả ngắn sản phẩm. */
  shortDescription?: string | null;
  /** Mô tả sản sẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /**
   * Thời gian công khai sản phẩm.
   * @format date-time
   */
  publishedTime?: string | null;
  /** cho phép quản lý tồn kho. */
  stockTrackingIsEnabled?: boolean | null;
  /**
   * Số lượng sản phẩm.
   * @format int32
   */
  stockQuantity?: number | null;
  /** Sku sản phẩm. */
  sku?: string | null;
  /** Gtin sản phẩm. */
  gtin?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string | null;
  /** Hình ảnh thumbnail. */
  thumbnail?: string | null;
  /** Đánh dấu sản phẩm mới. */
  markAsNew?: boolean | null;
  /**
   * Ngày bắt đầu đánh dấu sản phẩm mới.
   * @format date-time
   */
  markAsNewStartDate?: string | null;
  /**
   * Ngày kết thúc đánh dấu sản phẩm mới.
   * @format date-time
   */
  markAsNewEndDate?: string | null;
  /** Danh sách thuộc tính sản phẩm. */
  attributes?: CreateProductAttribute[] | null;
  /** Danh sách danh mục sản phẩm. */
  categories?: CreateProductCategory[] | null;
  /** Danh sách nhóm. */
  tags?: CreateProductTag[] | null;
  /** Danh sách hình ảnh/video sản phẩm. */
  medias?: CreateProductMedia[] | null;
  relatedType?: ERelatedType;
}

/** Create ProductTag */
export interface CreateProductTag {
  /**
   * Id nhóm.
   * @format uuid
   */
  tagId?: string;
}

/** Create ProductTemplateModel */
export interface CreateProductTemplateModel {
  /** Tên mẫu sản phẩm. */
  name?: string | null;
  /** Danh sách Id thuộc tính sản phẩm. */
  attributeIds?: string[] | null;
}

/** Create ProductUnitModel */
export interface CreateProductUnitModel {
  /** Tên đơn vị tính sản phẩm. */
  name?: string | null;
}

export interface CreateProductWithPropertiesModel {
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Meta title sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description sản phẩm. */
  metaDescription?: string | null;
  /** Mô tả ngắn sản phẩm. */
  shortDescription?: string | null;
  /** Mô tả sản sẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /**
   * Thời gian công khai sản phẩm.
   * @format date-time
   */
  publishedTime?: string | null;
  /** cho phép quản lý tồn kho. */
  stockTrackingIsEnabled?: boolean | null;
  /**
   * Số lượng sản phẩm.
   * @format int32
   */
  stockQuantity?: number | null;
  /** Sku sản phẩm. */
  sku?: string | null;
  /** Gtin sản phẩm. */
  gtin?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string | null;
  productType?: EProductType;
  /** Hình ảnh thumbnail. */
  thumbnail?: string | null;
  /** Đánh dấu sản phẩm mới. */
  markAsNew?: boolean | null;
  /**
   * Ngày bắt đầu đánh dấu sản phẩm mới.
   * @format date-time
   */
  markAsNewStartDate?: string | null;
  /**
   * Ngày kết thúc đánh dấu sản phẩm mới.
   * @format date-time
   */
  markAsNewEndDate?: string | null;
  /** Danh sách thuộc tính sản phẩm. */
  attributes?: CreateProductAttribute[] | null;
  /** Danh sách danh mục sản phẩm. */
  categories?: CreateProductCategory[] | null;
  /** Danh sách nhóm. */
  tags?: CreateProductTag[] | null;
  /** Danh sách hình ảnh/video sản phẩm. */
  medias?: CreateProductMedia[] | null;
  productRelateds?: CreateProductRelated[] | null;
  productOption?: CreateProductOption[] | null;
  productUnitName?: string | null;
  /** Danh sách thuộc tính sản phẩm. */
  properties?: Record<string, string>;
}

export interface CreatePurchasedProductModel {
  /** @format uuid */
  partyId?: string;
  /** @format uuid */
  productId?: string;
  productName?: string | null;
  thumbnail?: string | null;
  /** @format double */
  price?: number;
  /** @format double */
  salePrice?: number | null;
}

export interface CreateTagModel {
  /** Tên. */
  name?: string | null;
  /**
   * Loại.
   * @format int32
   */
  type?: number;
  /** Trạng thái. */
  isActive?: boolean;
}

export interface CustomerSegmentInPriceList {
  existed?: boolean;
  isDeleted?: boolean;
}

export interface CustomerSegmentInPriceListDataResponseDto {
  data?: CustomerSegmentInPriceList;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface DynamicEntity {
  /** @format int64 */
  id?: number;
  /**
   * @minLength 0
   * @maxLength 256
   */
  entityFullName?: string | null;
  /** @format int64 */
  dynamicPropertyId?: number;
  dynamicProperty?: DynamicProperty;
}

export interface DynamicEntityValue {
  /** @format int64 */
  id?: number;
  /** @minLength 1 */
  value: string;
  entityId?: string | null;
  /** @format int64 */
  dynamicEntityId: number;
  dynamicEntity?: DynamicEntity;
}

export interface DynamicEntityValueListDataResponseDto {
  data?: DynamicEntityValue[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface DynamicProperty {
  /** @format int64 */
  id?: number;
  /**
   * @minLength 0
   * @maxLength 256
   */
  propertyName?: string | null;
  displayName?: string | null;
  inputType?: string | null;
}

/** @format int32 */
export enum EComputePrice {
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
export enum EMediaType {
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum EProductGiftType {
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum EProductType {
  Value1000 = 1000,
  Value2000 = 2000,
  Value3000 = 3000,
}

/** @format int32 */
export enum ERelatedType {
  Value2000 = 2000,
  Value3000 = 3000,
}

/** @format int32 */
export enum ESortType {
  Value1 = 1,
  Value2 = 2,
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

/** EnumDataType Model */
export interface EnumDataTypeModel {
  /**
   * Key định danh.
   * @format int32
   */
  key?: number;
  /** Kiểu dữ liệu. */
  name?: string | null;
}

export interface EnumDataTypeModelListDataResponseDto {
  data?: EnumDataTypeModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** Get All ApplicationCategorySettingModel */
export interface GetAllApplicationCategorySettingModel {
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
  /** Tìm kiếm. */
  query?: string | null;
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string | null;
  /**
   * License Id
   * @format uuid
   */
  licenseId?: string | null;
}

/** Get All ApplicationProductSettingModel */
export interface GetAllApplicationProductSettingModel {
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
  /** Tìm kiếm. */
  query?: string | null;
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string | null;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string | null;
  /**
   * License Id
   * @format uuid
   */
  licenseId?: string | null;
}

/** Get All BestSellingProductModel */
export interface GetAllBestSellingProductModel {
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
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string | null;
  /**
   * Id sản phẩm thường.
   * @format uuid
   */
  productId?: string | null;
  /** Kích hoạt. */
  isActive?: boolean | null;
  /** Tìm kiếm. */
  query?: string | null;
}

/** Get All BrandModel */
export interface GetAllBrandModel {
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
  /** Tên thương hiệu sản phẩm. */
  name?: string | null;
}

export interface GetAllByProductModel {
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
  /** @format uuid */
  productId?: string;
}

/** Get All CategoryModel */
export interface GetAllCategoryByLicenseIdModel {
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
  /** Tên danh mục sản phẩm. */
  name?: string | null;
}

/** Get All CategoryModel */
export interface GetAllCategoryDynamicPropertyDataModel {
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
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /** Tên danh mục. */
  name?: string | null;
}

/** Get All CategoryDynamicPropertyModel */
export interface GetAllCategoryDynamicPropertyModel {
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
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string | null;
  /** Tên tính chất danh mục. */
  name?: string | null;
}

/** Get All CategoryModel */
export interface GetAllCategoryModel {
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
  /** Tên danh mục sản phẩm. */
  name?: string | null;
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

export interface GetAllGiftModel {
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
  productGiftType?: EProductGiftType;
  /**
   * Ngày bắt đầu hiệu lực
   * @format date-time
   */
  effectStartDate?: string | null;
  /**
   * Ngày kết thúc hiệu lực
   * @format date-time
   */
  effectEndDate?: string | null;
}

/** Get All NewProductReleaseModel */
export interface GetAllNewProductReleaseModel {
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
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string | null;
  /**
   * Id sản phẩm thường.
   * @format uuid
   */
  productId?: string | null;
  /** Kích hoạt. */
  isActive?: boolean | null;
  /** Tìm kiếm. */
  query?: string | null;
}

/** Get All PriceListAssignmentModel */
export interface GetAllPriceListAssignmentModel {
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
   * The price list identifier.
   * @format uuid
   */
  priceListId?: string | null;
  /**
   * The customer segment type identifier.
   * @format uuid
   */
  customerSegmentTypeId?: string | null;
}

/** Get All PriceListModel */
export interface GetAllPriceListModel {
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
   * The currency identifier.
   * @format uuid
   */
  currencyId?: string | null;
  /** Price list name. */
  name?: string | null;
}

/** Get All PriceModel */
export interface GetAllPriceModel {
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
   * Tên đơn vị tính sản phẩm.
   * @format uuid
   */
  priceListId?: string | null;
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string | null;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string | null;
  /**
   * Ngày bắt đầu.
   * @format date-time
   */
  startDate?: string | null;
  /**
   * Ngày kết thúc.
   * @format date-time
   */
  endDate?: string | null;
}

/** Get AllProductAttributeGroupModel */
export interface GetAllProductAttributeGroupModel {
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
  /** Tên nhóm thuộc tính sản phẩm. */
  name?: string | null;
}

/** Get All ProductAttributeModel */
export interface GetAllProductAttributeModel {
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
   * Nhóm thuộc tính sản phẩm.
   * @format uuid
   */
  productAttributeGroupId?: string | null;
  /** Tên thuộc tính sản phẩm. */
  name?: string | null;
}

/** Get All ProductModel */
export interface GetAllProductByLicenseIdModel {
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
  /** Lọc theo sản phẩm bán chạy. */
  isBestSelling?: boolean | null;
  /** Lọc theo sản phẩm hôm nay. */
  isNewRelease?: boolean | null;
  /** Lọc theo sản phẩm đã mua. */
  isBought?: boolean | null;
  /**
   * Id khách hàng.
   * @format uuid
   */
  customerId?: string | null;
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /**
   * Id danh mục sản phẩm.
   * @format uuid
   */
  categoryId?: string | null;
  /**
   * Id nhóm sản phẩm.
   * @format uuid
   */
  tagId?: string | null;
  /**
   * nhóm sản phẩm.
   * @format int32
   */
  tagType?: number | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /** Cho phép công khai. */
  isPublished?: boolean | null;
  priceSort?: ESortType;
  /**
   * Từ ngày.
   * @format date-time
   */
  fromPublishedTime?: string | null;
  /**
   * Đến ngày.
   * @format date-time
   */
  toPublishedTime?: string | null;
}

/** Get All ProductModel */
export interface GetAllProductByListIdModel {
  /** The list currency ids. */
  ids?: string[] | null;
}

/** Get All ProductModel */
export interface GetAllProductDynamicPropertyDataModel {
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
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Tên sản phẩm. */
  name?: string | null;
}

/** Get All ProductDynamicPropertyModel */
export interface GetAllProductDynamicPropertyModel {
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
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string | null;
  /** Tên tính chất sản phẩm. */
  name?: string | null;
}

/** Get All ProductFeatureItemModel */
export interface GetAllProductFeatureItemModel {
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
   * Id tính năng nổi bật sản phẩm.
   * @format uuid
   */
  productFeatureId?: string | null;
  /** Tiêu đề. */
  query?: string | null;
}

/** Get All ProductFeatureModel */
export interface GetAllProductFeatureModel {
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
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string | null;
}

/** Get All ProductModel */
export interface GetAllProductModel {
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
   * Id khách hàng.
   * @format uuid
   */
  customerId?: string | null;
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /**
   * Id danh mục sản phẩm.
   * @format uuid
   */
  categoryId?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /** Cho phép công khai. */
  isPublished?: boolean | null;
  /**
   * Từ ngày.
   * @format date-time
   */
  fromPublishedTime?: string | null;
  /**
   * Đến ngày.
   * @format date-time
   */
  toPublishedTime?: string | null;
  priceSort?: ESortType;
  productShouldBe?: ProductShouldBe;
}

/** Get All ProductTemplateModel */
export interface GetAllProductTemplateModel {
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
  /** Tên mẫu sản phẩm. */
  name?: string | null;
}

/** Get All ProductUnitModel */
export interface GetAllProductUnitModel {
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
  /** Tên đơn vị tính sản phẩm. */
  name?: string | null;
}

export interface GetAllTagModel {
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
  /** @format int32 */
  type?: number | null;
  isActive?: boolean | null;
}

export interface GetMultipleProductDynamicPropertiesDataModel {
  /** Id sản phẩm. */
  productIds?: string[] | null;
}

export interface GetMultipleProductDynamicPropertiesModel {
  /** Id sản phẩm. */
  productIds?: string[] | null;
}

export interface GetProductBundle {
  /** @format uuid */
  productId?: string;
  bundleIds?: string[] | null;
}

/** Get ProductModel */
export interface GetProductModel {
  /** Lấy thông tin thương hiệu. */
  shouldBeHadBrand?: boolean;
  /** Lasy thông tin media */
  shouldBeHadMedias?: boolean;
  /** Lấy thông tin phân loại sản phẩm. */
  shouldBeHadCategories?: boolean;
  /** Lấy thông tin nhóm sản phẩm. */
  shouldBeHadTags?: boolean;
  /** Lấy thông tin thuộc tính sản phẩm. */
  shouldBeHadDynamicProperty?: boolean;
  /** Lấy thông tin giá sản phẩm. */
  shouldBeHadPrices?: boolean;
  /** Lấy thông tin thuộc tính sản phẩm. */
  shouldBeHadAttribute?: boolean;
  /** lấy thông tin đơn vị sản phẩm. */
  shouldBeHadUnit?: boolean;
  /** Lấy thông tin đặc tính sản phẩm. */
  shouldBeHadFeature?: boolean;
  /** Lấy thông tin sản phẩm liên quan. */
  shouldBeHadRelateds?: boolean;
  /** Lấy thông tin combo. */
  shouldBeHadBundles?: boolean;
  /** Lấy thông tin quà tặng. */
  shouldBeHadGifts?: boolean;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  id?: string;
  /**
   * Id khách hàng.
   * @format uuid
   */
  customerId?: string | null;
}

/** Get ProductPriceModel */
export interface GetProductPriceModel {
  /**
   * Id khách hàng.
   * @format uuid
   */
  customerId?: string | null;
  /** Danh sách mã sản phẩm. */
  productIds?: string[] | null;
}

export interface GiftItemModel {
  /** @format uuid */
  id?: string;
  /**
   * Số lượng sản phẩm tặng
   * @format float
   */
  quantity?: number;
  /** Tên sản phẩm tặng */
  productName?: string | null;
  /**
   * Id sản phẩm tặng
   * @format uuid
   */
  giftRelatedId?: string;
}

export interface GiftModel {
  /** @format uuid */
  id?: string;
  /**
   * Số lượng sản phẩm tặng
   * @format int32
   */
  maxChoice?: number;
  /** mô tả gói quà tặng */
  description?: string | null;
  /**
   * Ngày bắt đầu hiệu lực
   * @format date-time
   */
  effectStartDate?: string | null;
  /**
   * Ngày kết thúc hiệu lực
   * @format date-time
   */
  effectEndDate?: string | null;
  /** Danh sách sản phẩm tặng */
  giftItems?: GiftItemModel[] | null;
}

export interface GiftModelDataResponseDto {
  data?: GiftModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface GiftModelPagedResultDto {
  items?: GiftModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface GiftModelPagedResultDtoDataResponseDto {
  data?: GiftModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface Int32DataResponseDto {
  /** @format int32 */
  data?: number;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface MappingProductGift {
  /**
   * Id gói quà tặng
   * @format uuid
   */
  giftId?: string;
  /** Danh sách id sản phẩm */
  productIds?: string[] | null;
}

export interface MappingProductGiftItem {
  /**
   * Id gói quà tặng
   * @format uuid
   */
  giftId?: string;
  /** Danh sách id sản phẩm */
  product?: CreateProductGiftItemInput[] | null;
}

/** NewProductReleaseModel */
export interface NewProductReleaseModel {
  /** @format uuid */
  id?: string;
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /** Tên danh mục. */
  categoryName?: string | null;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Tên sản phẩm. */
  productName?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
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

export interface NewProductReleaseModelDataResponseDto {
  /** NewProductReleaseModel */
  data?: NewProductReleaseModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface NewProductReleaseModelPagedResultDto {
  items?: NewProductReleaseModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface NewProductReleaseModelPagedResultDtoDataResponseDto {
  data?: NewProductReleaseModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** PriceListAssignment */
export interface PriceListAssignmentModel {
  /** @format uuid */
  id?: string;
  /**
   * The price list identifier.
   * @format uuid
   */
  priceListId?: string;
  /**
   * The customer segment type identifier.
   * @format uuid
   */
  customerSegmentTypeId?: string;
  /** The name of the customer segment type. */
  customerSegmentTypeName?: string | null;
  /** Tthe condition expression. */
  conditionExpression?: string | null;
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

export interface PriceListAssignmentModelDataResponseDto {
  /** PriceListAssignment */
  data?: PriceListAssignmentModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PriceListAssignmentModelPagedResultDto {
  items?: PriceListAssignmentModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PriceListAssignmentModelPagedResultDtoDataResponseDto {
  data?: PriceListAssignmentModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PriceListByProductModel {
  /** @format uuid */
  id?: string;
  /** Price list name */
  name?: string | null;
  /**
   * Currency Id.
   * @format uuid
   */
  currencyId?: string;
  /** Currency Name. */
  currencyName?: string | null;
  /**
   * Id tập KH.
   * @format uuid
   */
  segmentTypeId?: string | null;
  /** Tên tập KH. */
  segmentTypeName?: string | null;
  /**
   * Giá bán.
   * @format double
   */
  basePrice?: number;
  /**
   * Giá bán.
   * @format double
   */
  salePrice?: number | null;
  /**
   * Ngày bắt đầu.
   * @format date-time
   */
  startDate?: string | null;
  /**
   * Ngày kết thúc.
   * @format date-time
   */
  endDate?: string | null;
  /**
   * Ngày tạo giá.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Người tạo giá.
   * @format uuid
   */
  creationBy?: string;
  /**
   * Id bảng giá.
   * @format uuid
   */
  priceListId?: string | null;
}

export interface PriceListByProductModelPagedResultDto {
  items?: PriceListByProductModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PriceListByProductModelPagedResultDtoDataResponseDto {
  data?: PriceListByProductModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** PriceList */
export interface PriceListModel {
  /** @format uuid */
  id?: string;
  /**
   * Currency Id.
   * @format uuid
   */
  currencyId?: string;
  /** Currency Name. */
  currencyName?: string | null;
  /** The currency iso code. */
  currencyIsoCode?: string | null;
  /** The currency symbol. */
  currencySymbol?: string | null;
  /** Price list name */
  name?: string | null;
  /** Price list description. */
  description?: string | null;
  /**
   * Price list priority.
   * @format int32
   */
  priority?: number;
  /**
   * Creation time.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Last modification time.
   * @format date-time
   */
  lastModificationTime?: string | null;
  /** Trạng thái hoạt động. */
  isActive?: boolean;
}

export interface PriceListModelDataResponseDto {
  /** PriceList */
  data?: PriceListModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PriceListModelPagedResultDto {
  items?: PriceListModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PriceListModelPagedResultDtoDataResponseDto {
  data?: PriceListModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PriceListRecycleModel {
  /** @format uuid */
  id?: string;
  /**
   * Thứ tự ưu tiên.
   * @format int32
   */
  priority?: number;
  /**
   * Id tiền tệ.
   * @format uuid
   */
  currencyId?: string;
  /** Tên tiền tệ. */
  currencyName?: string | null;
  /** Tên bảng giá */
  name?: string | null;
  /** Mô tả bảng giá. */
  description?: string | null;
  /**
   * Ngày tạo.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Ngày xóa.
   * @format date-time
   */
  lastModificationTime?: string | null;
}

export interface PriceListRecycleModelPagedResultDto {
  items?: PriceListRecycleModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PriceListRecycleModelPagedResultDtoDataResponseDto {
  data?: PriceListRecycleModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** Price */
export interface PriceModel {
  /** @format uuid */
  id?: string;
  /**
   * Id bảng giá.
   * @format uuid
   */
  priceListId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Tên sản phẩm. */
  productName?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string;
  /** Tên đơn vị tính. */
  productUnitName?: string | null;
  /**
   * Giá.
   * @format double
   */
  basePrice?: number;
  /**
   * Giá bán.
   * @format double
   */
  salePrice?: number | null;
  /**
   * Số lượng.
   * @format int32
   */
  minQuantity?: number;
  /**
   * Ngày bắt đầu.
   * @format date-time
   */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** Mô tả. */
  description?: string | null;
  computePrice?: EComputePrice;
  /**
   * Giảm giá theo %.
   * @format double
   */
  percent?: number | null;
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

export interface PriceModelDataResponseDto {
  /** Price */
  data?: PriceModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PriceModelPagedResultDto {
  items?: PriceModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface PriceModelPagedResultDtoDataResponseDto {
  data?: PriceModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** ProductAttributeGroupModel */
export interface ProductAttributeGroupModel {
  /** @format uuid */
  id?: string;
  /** Tên nhóm thuộc tính sản phẩm. */
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

export interface ProductAttributeGroupModelDataResponseDto {
  /** ProductAttributeGroupModel */
  data?: ProductAttributeGroupModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductAttributeGroupModelPagedResultDto {
  items?: ProductAttributeGroupModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductAttributeGroupModelPagedResultDtoDataResponseDto {
  data?: ProductAttributeGroupModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** ProductAttributeModel */
export interface ProductAttributeModel {
  /** @format uuid */
  id?: string;
  /** Tên thuộc tính sản phẩm. */
  name?: string | null;
  /**
   * Id nhóm thuộc tính sản phẩm.
   * @format uuid
   */
  productAttributeGroupId?: string;
  /** Tên nhóm thuộc tính sản phẩm. */
  productAttributeGroupName?: string | null;
  /** Giá trị của thuộc tính sản phẩm. */
  value?: string | null;
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

export interface ProductAttributeModelDataResponseDto {
  /** ProductAttributeModel */
  data?: ProductAttributeModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductAttributeModelPagedResultDto {
  items?: ProductAttributeModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductAttributeModelPagedResultDtoDataResponseDto {
  data?: ProductAttributeModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductBundleColectionInput {
  /** Là sản phẩm chính */
  isPrimary?: boolean;
  /**
   * Số lượng
   * @format float
   */
  quantity?: number;
  /**
   * ID sản phẩm
   * @format uuid
   */
  productId?: string;
}

export interface ProductBundleColectionModel {
  /** @format uuid */
  id?: string;
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên thương hiệu sản phẩm. */
  brandName?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Meta title sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description sản phẩm. */
  metaDescription?: string | null;
  /** Mô tả ngắn sản phẩm. */
  shortDescription?: string | null;
  /** Mô tả sản phẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /**
   * Thời gian công khái.
   * @format date-time
   */
  publishedTime?: string | null;
  /** Cho phép quản lý tồn kho. */
  stockTrackingIsEnabled?: boolean | null;
  /**
   * Số lượng sản phẩm.
   * @format int32
   */
  stockQuantity?: number | null;
  /** SKU sản phẩm. */
  sku?: string | null;
  /** Gtin sản phẩm. */
  gtin?: string | null;
  /**
   * Ngày tạo sản phẩm.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Ngày cập nhật sản phẩm.
   * @format date-time
   */
  lastModificationTime?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string;
  /** Tên đơn vị tính sản phẩm. */
  productUnitName?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  productType?: EProductType;
  /** Anh. */
  thumbnail?: string | null;
  markAsNew?: boolean | null;
  /** @format date-time */
  markAsNewStartDate?: string | null;
  /** @format date-time */
  markAsNewEndDate?: string | null;
  /** Danh sách thuộc tính sản phẩm. */
  productAttributes?: ProductAttributeModel[] | null;
  /** Danh sách danh mục sản phẩm. */
  productCategories?: ProductCategoryModel[] | null;
  /** Danh sách hình ảnh/ video sản phẩm. */
  productMedias?: ProductMediaModel[] | null;
  /** Danh sách tính chất sản phẩm. */
  productDynamicProperties?: ProductDynamicPropertyDataModel[] | null;
  /** ProductFeatureModel */
  productFeature?: ProductFeatureModel;
  /** Danh sách khuyến mãi. */
  promotions?: PromotionModel[] | null;
  /**
   * Là sản phẩm chính
   * @default false
   */
  isPrimary?: boolean;
  /**
   * Số lượng sản phẩm trong combo.
   * @format float
   */
  quantity?: number;
}

export interface ProductBundleModel {
  /** @format uuid */
  id?: string;
  /** Mô tả combo. */
  description?: string | null;
  /** Danh sách sản phẩm trong combo. */
  productBundleColections?: ProductBundleColectionModel[] | null;
}

export interface ProductBundleModelListDataResponseDto {
  data?: ProductBundleModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** ProductCategoryModel */
export interface ProductCategoryModel {
  /** @format uuid */
  id?: string;
  /**
   * Id danh mục sản phẩm.
   * @format uuid
   */
  categoryId?: string;
  /** Tên danh mục sản phẩm. */
  categoryName?: string | null;
}

/** ProductDynamicPropertyModel */
export interface ProductDynamicPropertyDataModel {
  /** @format uuid */
  id?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /**
   * Id tính chất sản phẩm.
   * @format uuid
   */
  productDynamicPropertyId?: string;
  /** Tên tính chất sản phẩm. */
  name?: string | null;
  dataType?: EDataType;
  /** Tên hiển thị. */
  displayName?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
  /** Giá trị của tính chất sản phẩm. */
  value?: string | null;
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

export interface ProductDynamicPropertyDataModelDataResponseDto {
  /** ProductDynamicPropertyModel */
  data?: ProductDynamicPropertyDataModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductDynamicPropertyDataModelListDataResponseDto {
  data?: ProductDynamicPropertyDataModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductDynamicPropertyDataModelPagedResultDto {
  items?: ProductDynamicPropertyDataModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductDynamicPropertyDataModelPagedResultDtoDataResponseDto {
  data?: ProductDynamicPropertyDataModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** ProductDynamicPropertyModel */
export interface ProductDynamicPropertyModel {
  /** @format uuid */
  id?: string;
  /** Tên tính chất sản phẩm. */
  name?: string | null;
  dataType?: EDataType;
  /** Tên hiển thị. */
  displayName?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
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

export interface ProductDynamicPropertyModelDataResponseDto {
  /** ProductDynamicPropertyModel */
  data?: ProductDynamicPropertyModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductDynamicPropertyModelListDataResponseDto {
  data?: ProductDynamicPropertyModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductDynamicPropertyModelPagedResultDto {
  items?: ProductDynamicPropertyModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductDynamicPropertyModelPagedResultDtoDataResponseDto {
  data?: ProductDynamicPropertyModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** ProductFeatureItemModel */
export interface ProductFeatureItemModel {
  /** @format uuid */
  id?: string;
  /**
   * Id tính năng nổi bật sản phẩm.
   * @format uuid
   */
  productFeatureId?: string;
  /** Hình ảnh. */
  image?: string | null;
  /** Tiêu đề. */
  title?: string | null;
  /** Mô tả ngắn. */
  shortDescription?: string | null;
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

export interface ProductFeatureItemModelDataResponseDto {
  /** ProductFeatureItemModel */
  data?: ProductFeatureItemModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductFeatureItemModelPagedResultDto {
  items?: ProductFeatureItemModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductFeatureItemModelPagedResultDtoDataResponseDto {
  data?: ProductFeatureItemModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** ProductFeatureModel */
export interface ProductFeatureModel {
  /** @format uuid */
  id?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Mô tả tính năng nổi bật. */
  description?: string | null;
  /** Danh sách tính năng nổi bật. */
  productFeatureItems?: ProductFeatureItemModel[] | null;
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

export interface ProductFeatureModelDataResponseDto {
  /** ProductFeatureModel */
  data?: ProductFeatureModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductFeatureModelPagedResultDto {
  items?: ProductFeatureModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductFeatureModelPagedResultDtoDataResponseDto {
  data?: ProductFeatureModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductGiftItemModel {
  /** @format uuid */
  id?: string;
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên thương hiệu sản phẩm. */
  brandName?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Meta title sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description sản phẩm. */
  metaDescription?: string | null;
  /** Mô tả ngắn sản phẩm. */
  shortDescription?: string | null;
  /** Mô tả sản phẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /**
   * Thời gian công khái.
   * @format date-time
   */
  publishedTime?: string | null;
  /** Cho phép quản lý tồn kho. */
  stockTrackingIsEnabled?: boolean | null;
  /**
   * Số lượng sản phẩm.
   * @format int32
   */
  stockQuantity?: number | null;
  /** SKU sản phẩm. */
  sku?: string | null;
  /** Gtin sản phẩm. */
  gtin?: string | null;
  /**
   * Ngày tạo sản phẩm.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Ngày cập nhật sản phẩm.
   * @format date-time
   */
  lastModificationTime?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string;
  /** Tên đơn vị tính sản phẩm. */
  productUnitName?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  productType?: EProductType;
  /** Anh. */
  thumbnail?: string | null;
  markAsNew?: boolean | null;
  /** @format date-time */
  markAsNewStartDate?: string | null;
  /** @format date-time */
  markAsNewEndDate?: string | null;
  /** Danh sách thuộc tính sản phẩm. */
  productAttributes?: ProductAttributeModel[] | null;
  /** Danh sách danh mục sản phẩm. */
  productCategories?: ProductCategoryModel[] | null;
  /** Danh sách hình ảnh/ video sản phẩm. */
  productMedias?: ProductMediaModel[] | null;
  /** Danh sách tính chất sản phẩm. */
  productDynamicProperties?: ProductDynamicPropertyDataModel[] | null;
  /** ProductFeatureModel */
  productFeature?: ProductFeatureModel;
  /** Danh sách khuyến mãi. */
  promotions?: PromotionModel[] | null;
  /**
   * Số lượng
   * @format float
   */
  quantity?: number;
}

export interface ProductGiftModel {
  /** @format uuid */
  id?: string;
  /**
   * Số lượng quà tặng được chọn.
   * @format int32
   */
  maxChoice?: number;
  /** Mô tả gói quà tặng. */
  description?: string | null;
  /**
   * Ngày bắt đầu hiệu lực.
   * @format date-time
   */
  effectStartDate?: string | null;
  /**
   * Ngày kết thúc hiệu lực.
   * @format date-time
   */
  effectEndDate?: string | null;
  /** Danh sách quà tặng. */
  productGiftItems?: ProductGiftItemModel[] | null;
}

/** ProductMediaModel */
export interface ProductMediaModel {
  /** @format uuid */
  id?: string;
  /** URL hình ảnh/video sản phẩm. */
  url?: string | null;
  /** Tiêu đề hình ảnh/video sản phẩm. */
  title?: string | null;
  /** Mô tả hình ảnh/video sản phẩm. */
  description?: string | null;
  mediaType?: EMediaType;
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

export interface ProductModel {
  /** @format uuid */
  id?: string;
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên thương hiệu sản phẩm. */
  brandName?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Meta title sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description sản phẩm. */
  metaDescription?: string | null;
  /** Mô tả ngắn sản phẩm. */
  shortDescription?: string | null;
  /** Mô tả sản phẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /**
   * Thời gian công khái.
   * @format date-time
   */
  publishedTime?: string | null;
  /** Cho phép quản lý tồn kho. */
  stockTrackingIsEnabled?: boolean | null;
  /**
   * Số lượng sản phẩm.
   * @format int32
   */
  stockQuantity?: number | null;
  /** SKU sản phẩm. */
  sku?: string | null;
  /** Gtin sản phẩm. */
  gtin?: string | null;
  /**
   * Ngày tạo sản phẩm.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Ngày cập nhật sản phẩm.
   * @format date-time
   */
  lastModificationTime?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string;
  /** Tên đơn vị tính sản phẩm. */
  productUnitName?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  productType?: EProductType;
  /** Anh. */
  thumbnail?: string | null;
  markAsNew?: boolean | null;
  /** @format date-time */
  markAsNewStartDate?: string | null;
  /** @format date-time */
  markAsNewEndDate?: string | null;
  /** Danh sách thuộc tính sản phẩm. */
  productAttributes?: ProductAttributeModel[] | null;
  /** Danh sách danh mục sản phẩm. */
  productCategories?: ProductCategoryModel[] | null;
  /** Danh sách hình ảnh/ video sản phẩm. */
  productMedias?: ProductMediaModel[] | null;
  /** Danh sách tính chất sản phẩm. */
  productDynamicProperties?: ProductDynamicPropertyDataModel[] | null;
  /** ProductFeatureModel */
  productFeature?: ProductFeatureModel;
  /** Danh sách khuyến mãi. */
  promotions?: PromotionModel[] | null;
  /** Danh sách combo item. */
  productBundle?: ProductBundleModel[] | null;
  /** Danh sách sản phẩm liên quan. */
  productRelateds?: ProductRelatedModel[] | null;
  /** Danh sách quà tặng. */
  gifts?: ProductGiftModel[] | null;
  /** Danh sách nhóm. */
  tags?: ProductTagModel[] | null;
  /** Danh sách thuộc tính sản phẩm. */
  productOptions?: ProductOptionModel[] | null;
}

export interface ProductModelDataResponseDto {
  data?: ProductModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductModelListDataResponseDto {
  data?: ProductModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductModelPagedResultDto {
  items?: ProductModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductModelPagedResultDtoDataResponseDto {
  data?: ProductModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductOptionModel {
  /** @format uuid */
  id?: string;
  /** Tên tùy chọn sản phẩm. */
  name?: string | null;
  /**
   * Id Sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Danh sách giá trị tùy chọn sản phẩm. */
  values?: string[] | null;
}

/** ProductPriceModel */
export interface ProductPriceModel {
  /** @format uuid */
  productId?: string;
  productName?: string | null;
  /** @format double */
  productPrice?: number;
  /** @format double */
  salePrice?: number | null;
  thumbnail?: string | null;
  /** @format int32 */
  productType?: number;
}

export interface ProductPriceModelListDataResponseDto {
  data?: ProductPriceModel[] | null;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductRecycleModel {
  /** @format uuid */
  id?: string;
  /** SKU sản phẩm. */
  sku?: string | null;
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên thương hiệu sản phẩm. */
  brandName?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Danh sách danh mục sản phẩm. */
  productCategories?: ProductCategoryModel[] | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string;
  /** Tên đơn vị tính sản phẩm. */
  productUnitName?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  /**
   * Ngày tạo sản phẩm.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Ngày xóa.
   * @format date-time
   */
  lastModificationTime?: string | null;
}

export interface ProductRecycleModelPagedResultDto {
  items?: ProductRecycleModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductRecycleModelPagedResultDtoDataResponseDto {
  data?: ProductRecycleModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductRelatedModel {
  /** @format uuid */
  id?: string;
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên thương hiệu sản phẩm. */
  brandName?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Meta title sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description sản phẩm. */
  metaDescription?: string | null;
  /** Mô tả ngắn sản phẩm. */
  shortDescription?: string | null;
  /** Mô tả sản phẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /**
   * Thời gian công khái.
   * @format date-time
   */
  publishedTime?: string | null;
  /** Cho phép quản lý tồn kho. */
  stockTrackingIsEnabled?: boolean | null;
  /**
   * Số lượng sản phẩm.
   * @format int32
   */
  stockQuantity?: number | null;
  /** SKU sản phẩm. */
  sku?: string | null;
  /** Gtin sản phẩm. */
  gtin?: string | null;
  /**
   * Ngày tạo sản phẩm.
   * @format date-time
   */
  creationTime?: string;
  /**
   * Ngày cập nhật sản phẩm.
   * @format date-time
   */
  lastModificationTime?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string;
  /** Tên đơn vị tính sản phẩm. */
  productUnitName?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  productType?: EProductType;
  /** Anh. */
  thumbnail?: string | null;
  markAsNew?: boolean | null;
  /** @format date-time */
  markAsNewStartDate?: string | null;
  /** @format date-time */
  markAsNewEndDate?: string | null;
  /** Danh sách thuộc tính sản phẩm. */
  productAttributes?: ProductAttributeModel[] | null;
  /** Danh sách danh mục sản phẩm. */
  productCategories?: ProductCategoryModel[] | null;
  /** Danh sách hình ảnh/ video sản phẩm. */
  productMedias?: ProductMediaModel[] | null;
  /** Danh sách tính chất sản phẩm. */
  productDynamicProperties?: ProductDynamicPropertyDataModel[] | null;
  /** ProductFeatureModel */
  productFeature?: ProductFeatureModel;
  /** Danh sách khuyến mãi. */
  promotions?: PromotionModel[] | null;
  relatedType?: ERelatedType;
}

export interface ProductShouldBe {
  /** Lấy thông tin thương hiệu. */
  shouldBeHadBrand?: boolean;
  /** Lasy thông tin media */
  shouldBeHadMedias?: boolean;
  /** Lấy thông tin phân loại sản phẩm. */
  shouldBeHadCategories?: boolean;
  /** Lấy thông tin nhóm sản phẩm. */
  shouldBeHadTags?: boolean;
  /** Lấy thông tin thuộc tính sản phẩm. */
  shouldBeHadDynamicProperty?: boolean;
  /** Lấy thông tin giá sản phẩm. */
  shouldBeHadPrices?: boolean;
  /** Lấy thông tin thuộc tính sản phẩm. */
  shouldBeHadAttribute?: boolean;
  /** lấy thông tin đơn vị sản phẩm. */
  shouldBeHadUnit?: boolean;
  /** Lấy thông tin đặc tính sản phẩm. */
  shouldBeHadFeature?: boolean;
  /** Lấy thông tin sản phẩm liên quan. */
  shouldBeHadRelateds?: boolean;
  /** Lấy thông tin combo. */
  shouldBeHadBundles?: boolean;
  /** Lấy thông tin quà tặng. */
  shouldBeHadGifts?: boolean;
}

export interface ProductTagModel {
  /** @format uuid */
  id?: string;
  /** Tên nhóm sản phẩm. */
  name?: string | null;
  /** @format int32 */
  type?: number;
}

/** ProductTemplateModel */
export interface ProductTemplateModel {
  /** @format uuid */
  id?: string;
  /** Tên mẫu sản phẩm. */
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
  /** Danh sách thuộc tính sản phẩm theo mẫu sản phẩm. */
  productTemplateProductAttributes?: ProductTemplateProductAttributeModel[] | null;
}

export interface ProductTemplateModelDataResponseDto {
  /** ProductTemplateModel */
  data?: ProductTemplateModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductTemplateModelPagedResultDto {
  items?: ProductTemplateModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductTemplateModelPagedResultDtoDataResponseDto {
  data?: ProductTemplateModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** ProductTemplate ProductAttributeModel */
export interface ProductTemplateProductAttributeModel {
  /**
   * Id thuộc tính sản phẩm.
   * @format uuid
   */
  productAttributeId?: string;
  /** Tên thuộc tính sản phẩm. */
  productAttributeName?: string | null;
}

/** ProductUnit */
export interface ProductUnitModel {
  /** @format uuid */
  id?: string;
  /** Tên đơn vị tính sản phẩm. */
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

export interface ProductUnitModelDataResponseDto {
  /** ProductUnit */
  data?: ProductUnitModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface ProductUnitModelPagedResultDto {
  items?: ProductUnitModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface ProductUnitModelPagedResultDtoDataResponseDto {
  data?: ProductUnitModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface PromotionModel {
  /** @format int32 */
  id?: number;
  promoName?: string | null;
  description?: string | null;
  value?: string | null;
  key?: string | null;
  dynamicDescriptions?: string[] | null;
  dynamicRuleDescriptions?: string[] | null;
  /** @format date-time */
  beginDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface RemoveProductBundleColectionInput {
  /**
   * ID bộ sản phẩm
   * @format uuid
   */
  productBundleId?: string;
  /** Danh sách ID sản phẩm trong bộ sản phẩm */
  productBundleColectionIds?: string[] | null;
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

export interface TagModel {
  /** @format uuid */
  id?: string;
  /** Tên nhóm sản phẩm. */
  name?: string | null;
  /**
   * Loại.
   * @format int32
   */
  type?: number;
  /** Trạng thái. */
  isActive?: boolean;
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

export interface TagModelDataResponseDto {
  data?: TagModel;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

export interface TagModelPagedResultDto {
  items?: TagModel[] | null;
  /** @format int32 */
  totalCount?: number;
}

export interface TagModelPagedResultDtoDataResponseDto {
  data?: TagModelPagedResultDto;
  isSuccess?: boolean;
  errorCodes?: string[] | null;
}

/** Update ApplicationCategorySettingModel */
export interface UpdateApplicationCategorySettingModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /** Kích hoạt */
  isActive?: boolean;
  /**
   * License Id
   * @format uuid
   */
  licenseId?: string | null;
  /**
   * Id setting.
   * @format uuid
   */
  id?: string;
}

/** Update ApplicationProductSettingModel */
export interface UpdateApplicationProductSettingModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Kích hoạt */
  isActive?: boolean;
  /**
   * License Id
   * @format uuid
   */
  licenseId?: string | null;
  /**
   * Id setting.
   * @format uuid
   */
  id?: string;
}

/** Update BestSellingProductModel */
export interface UpdateBestSellingProductModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Kích hoạt. */
  isActive?: boolean;
  /**
   * Id combo sản phẩm.
   * @format uuid
   */
  id?: string;
}

/** Update BrandModel */
export interface UpdateBrandModel {
  /** Tên thương hiệu sản phẩm. */
  name?: string | null;
  /** Slug thương hiệu sản phẩm. */
  slug?: string | null;
  /** Mô tả thương hiệu sản phẩm. */
  description?: string | null;
  /** Cho phép được công khai. */
  isPublished?: boolean;
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  id?: string;
}

export interface UpdateBundleInput {
  /**
   * ID sản phẩm
   * @format uuid
   */
  productId?: string;
  /** Mô tả */
  description?: string | null;
  /** Danh sách sản phẩm trong bộ sản phẩm */
  bundleColections?: ProductBundleColectionInput[] | null;
  /**
   * ID bộ sản phẩm
   * @format uuid
   */
  id?: string;
}

/** Create CategoryDynamicProperty */
export interface UpdateCategoryDynamicPropertyDataModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /**
   * Id tính chất danh mục.
   * @format uuid
   */
  categoryDynamicPropertyId?: string;
  /** Giá trị thuộc tính danh mục. */
  value?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
  /**
   * Id danh mục danh mục.
   * @format uuid
   */
  id?: string;
}

/** Update CategoryDynamicPropertyModel */
export interface UpdateCategoryDynamicPropertyModel {
  /** Tên tính chất danh mục. */
  name?: string | null;
  dataType?: EDataType;
  /** Tên hiển thị. */
  displayName?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
  /**
   * Id tính chất danh mục.
   * @format uuid
   */
  id?: string;
}

/** Update CategoryModel */
export interface UpdateCategoryModel {
  /** Slug danh mục sản phẩm. */
  slug?: string | null;
  /** Tên danh mục sản phẩm. */
  name?: string | null;
  /** Mô tả danh mục sản phẩm. */
  description?: string | null;
  /** Meta title danh mục sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword danh mục sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description danh mục sản phẩm. */
  metaDescription?: string | null;
  /**
   * Thứ tự hiển thị danh mục sản phẩm.
   * @format int32
   */
  displayOrder?: number | null;
  /**
   * Id danh mục sản phầm cha.
   * @format uuid
   */
  parentId?: string | null;
  /** Cho phép hiển thị trong menu. */
  includeMenu?: boolean | null;
  /** Anh. */
  thumbnail?: string | null;
  /** Cho phép công khai. */
  isPublished?: boolean | null;
  /**
   * Id danh mục sản phẩm.
   * @format uuid
   */
  id?: string;
}

export interface UpdateGiftModel {
  productGiftType?: EProductGiftType;
  /**
   * Số lượng sản phẩm tặng
   * @format int32
   */
  maxChoice?: number;
  /** mô tả gói quà tặng */
  description?: string | null;
  /**
   * Ngày bắt đầu hiệu lực
   * @format date-time
   */
  effectStartDate?: string | null;
  /**
   * Ngày kết thúc hiệu lực
   * @format date-time
   */
  effectEndDate?: string | null;
  /** @format uuid */
  id?: string;
}

/** Update NewProductReleaseModel */
export interface UpdateNewProductReleaseModel {
  /**
   * Id danh mục.
   * @format uuid
   */
  categoryId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Kích hoạt. */
  isActive?: boolean;
  /**
   * Id combo sản phẩm.
   * @format uuid
   */
  id?: string;
}

/** Update PriceListAssignmentModel */
export interface UpdatePriceListAssignmentModel {
  /**
   * The price list identifier.
   * @format uuid
   */
  priceListId?: string;
  /**
   * The customer segment type identifier.
   * @format uuid
   */
  customerSegmentTypeId?: string;
  /** Tthe condition expression. */
  conditionExpression?: string | null;
  /**
   * Id of the entity.
   * @format uuid
   */
  id?: string;
}

/** Update PriceListModel */
export interface UpdatePriceListModel {
  /**
   * Currency Id.
   * @format uuid
   */
  currencyId?: string;
  /** Price list name */
  name?: string | null;
  /** Price list description. */
  description?: string | null;
  /**
   * Price list priority.
   * @format int32
   */
  priority?: number;
  /** Trạng thái hoạt động. */
  isActive?: boolean;
  /**
   * Price list Id.
   * @format uuid
   */
  id?: string;
}

/** Update PriceModel */
export interface UpdatePriceModel {
  /**
   * Id bảng giá.
   * @format uuid
   */
  priceListId?: string;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string;
  /**
   * Giá.
   * @format double
   */
  basePrice?: number;
  /**
   * Giá bán.
   * @format double
   */
  salePrice?: number | null;
  /**
   * Số lượng.
   * @format int32
   */
  minQuantity?: number;
  /**
   * Ngày bắt đầu.
   * @format date-time
   */
  startDate?: string | null;
  /**
   * Ngày kết thúc.
   * @format date-time
   */
  endDate?: string | null;
  computePrice?: EComputePrice;
  /**
   * Giảm giá theo %.
   * @format double
   */
  percent?: number | null;
  /** Mô tả. */
  description?: string | null;
  /**
   * Id giá.
   * @format uuid
   */
  id?: string;
}

/** Update ProductAttributeGroupModel */
export interface UpdateProductAttributeGroupModel {
  /** Tên nhóm thuộc tính sản phẩm. */
  name?: string | null;
  /**
   * Id nhóm thuộc tính sản phẩm.
   * @format uuid
   */
  id?: string;
}

/** Update ProductAttributeModel */
export interface UpdateProductAttributeModel {
  /**
   * Id nhóm thuộc tính sản phẩm.
   * @format uuid
   */
  productAttributeGroupId?: string;
  /** Tên thuộc tính sản phẩm. */
  name?: string | null;
  /**
   * Id thuộc tính sản phẩm.
   * @format uuid
   */
  id?: string;
}

/** Create ProductDynamicProperty */
export interface UpdateProductDynamicPropertyDataModel {
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /**
   * Id tính chất sản phẩm.
   * @format uuid
   */
  productDynamicPropertyId?: string;
  /** Giá trị thuộc tính sản phẩm. */
  value?: string | null;
  /** Kích hoạt. */
  isActive?: boolean;
  /**
   * Id danh mục sản phẩm.
   * @format uuid
   */
  id?: string;
}

/** Update ProductDynamicPropertyModel */
export interface UpdateProductDynamicPropertyModel {
  /** Tên tính chất sản phẩm. */
  name?: string | null;
  dataType?: EDataType;
  /** Tển hiển thị. */
  displayName?: string | null;
  /** Kich hoạt */
  isActive?: boolean;
  /**
   * Id tính chất sản phẩm.
   * @format uuid
   */
  id?: string;
}

/** Update ProductFeatureItemModel */
export interface UpdateProductFeatureItemModel {
  /**
   * Id tính năng nổi bật sản phẩm.
   * @format uuid
   */
  productFeatureId?: string;
  /** Hình ảnh. */
  image?: string | null;
  /** Tiêu đề. */
  title?: string | null;
  /** Mô tả ngắn. */
  shortDescription?: string | null;
  /**
   * Id tính năng nổi bật sản phẩm.
   * @format uuid
   */
  id?: string;
}

/** Update ProductFeatureModel */
export interface UpdateProductFeatureModel {
  /**
   * Id sản phẩm.
   * @format uuid
   */
  productId?: string;
  /** Mô tả. */
  description?: string | null;
  /**
   * Id tính năng nổi bật.
   * @format uuid
   */
  id?: string;
}

/** Update ProductMedia */
export interface UpdateProductMedia {
  /**
   * Id hình ảnh/ video sản phẩm.
   * @format uuid
   */
  id?: string | null;
  /** Url hình ảnh/ video sản phẩm. */
  url?: string | null;
  /** Tiêu để hình ảnh/ video sản phẩm. */
  title?: string | null;
  /** Mô tả hình ảnh/ video sản phẩm. */
  description?: string | null;
  mediaType?: EMediaType;
}

/** Update ProductModel */
export interface UpdateProductModel {
  /**
   * Id thương hiệu sản phẩm.
   * @format uuid
   */
  brandId?: string | null;
  /** Tên sản phẩm. */
  name?: string | null;
  /**
   * Giá sản phẩm.
   * @format double
   */
  price?: number;
  /**
   * Giá sale sản phẩm.
   * @format double
   */
  salePrice?: number | null;
  /** Slug sản phẩm. */
  slug?: string | null;
  /** Meta title sản phẩm. */
  metaTitle?: string | null;
  /** Meta keyword sản phẩm. */
  metaKeyword?: string | null;
  /** Meta description sản phẩm. */
  metaDescription?: string | null;
  /** Mô tả ngắn sản phẩm. */
  shortDescription?: string | null;
  /** Mô tả sản sẩm. */
  description?: string | null;
  /**
   * Thứ tự hiển thị sản phẩm.
   * @format int32
   */
  displayOrder?: number;
  /** Cho phép công khai. */
  isPublished?: boolean;
  /**
   * Thời gian công khai sản phẩm.
   * @format date-time
   */
  publishedTime?: string | null;
  /** cho phép quản lý tồn kho. */
  stockTrackingIsEnabled?: boolean | null;
  /**
   * Số lượng sản phẩm.
   * @format int32
   */
  stockQuantity?: number | null;
  /** Sku sản phẩm. */
  sku?: string | null;
  /** Gtin sản phẩm. */
  gtin?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  productUnitId?: string | null;
  productType?: EProductType;
  /** Hình ảnh thumbnail. */
  thumbnail?: string | null;
  /** Đánh dấu sản phẩm mới. */
  markAsNew?: boolean | null;
  /**
   * Ngày bắt đầu đánh dấu sản phẩm mới.
   * @format date-time
   */
  markAsNewStartDate?: string | null;
  /**
   * Ngày kết thúc đánh dấu sản phẩm mới.
   * @format date-time
   */
  markAsNewEndDate?: string | null;
  /** Danh sách hình ảnh/video sản phẩm. */
  medias?: UpdateProductMedia[] | null;
  productRelateds?: CreateProductRelated[] | null;
  productOption?: CreateProductOption[] | null;
  /**
   * Id sản phẩm.
   * @format uuid
   */
  id?: string;
  /** Danh sách thuộc tính sản phẩm. */
  attributes?: CreateProductAttribute[] | null;
  /** Danh sách danh mục sản phẩm. */
  categories?: CreateProductCategory[] | null;
  tags?: CreateProductTag[] | null;
}

/** Update ProductTemplateModel */
export interface UpdateProductTemplateModel {
  /** Tên mẫu sản phẩm. */
  name?: string | null;
  /** Danh sách Id thuộc tính sản phẩm. */
  attributeIds?: string[] | null;
  /**
   * Id mẫu sản phẩm.
   * @format uuid
   */
  id?: string;
}

/** Update ProductUnitModel */
export interface UpdateProductUnitModel {
  /** Tên đơn vị tính sản phẩm. */
  name?: string | null;
  /**
   * Id đơn vị tính sản phẩm.
   * @format uuid
   */
  id?: string;
}

export interface UpdateTagModel {
  /**
   * Id.
   * @format uuid
   */
  id?: string;
  /** Tên. */
  name?: string | null;
  /** Trạng thái. */
  isActive?: boolean;
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
 * @title Catalog Service (v1.2.3) - Testing
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  applicationcategorysetting = {
    /**
     * No description
     *
     * @tags ApplicationCategorySetting
     * @name GetallCreate
     * @summary Danh sách cấu hình danh mục.
     * @request POST:/applicationcategorysetting/getall
     * @secure
     */
    getallCreate: (
      data: GetAllApplicationCategorySettingModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApplicationCategorySettingModelPagedResultDtoDataResponseDto, any>({
        path: `/applicationcategorysetting/getall`,
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
     * @tags ApplicationCategorySetting
     * @name GetbyidDetail
     * @summary Lấy thông tin chi tiết cấu hình danh mục.
     * @request GET:/applicationcategorysetting/getbyid/{Id}
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
      this.request<ApplicationCategorySettingModelDataResponseDto, any>({
        path: `/applicationcategorysetting/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApplicationCategorySetting
     * @name CreateCreate
     * @summary Tạo mới cấu hình danh mục.
     * @request POST:/applicationcategorysetting/create
     * @secure
     */
    createCreate: (
      data: CreateApplicationCategorySettingModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApplicationCategorySettingModelDataResponseDto, any>({
        path: `/applicationcategorysetting/create`,
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
     * @tags ApplicationCategorySetting
     * @name UpdateUpdate
     * @summary Cập nhật cấu hình danh mục.
     * @request PUT:/applicationcategorysetting/update
     * @secure
     */
    updateUpdate: (
      data: UpdateApplicationCategorySettingModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApplicationCategorySettingModelDataResponseDto, any>({
        path: `/applicationcategorysetting/update`,
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
     * @tags ApplicationCategorySetting
     * @name DeleteDelete
     * @summary Xóa cấu hình danh mục.
     * @request DELETE:/applicationcategorysetting/delete/{Id}
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
        path: `/applicationcategorysetting/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  applicationproductsetting = {
    /**
     * No description
     *
     * @tags ApplicationProductSetting
     * @name GetallCreate
     * @summary Danh sách cấu hình sản phẩm.
     * @request POST:/applicationproductsetting/getall
     * @secure
     */
    getallCreate: (
      data: GetAllApplicationProductSettingModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApplicationProductSettingModelPagedResultDtoDataResponseDto, any>({
        path: `/applicationproductsetting/getall`,
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
     * @tags ApplicationProductSetting
     * @name GetbyidDetail
     * @summary Lấy thông tin chi tiết cấu hình sản phẩm.
     * @request GET:/applicationproductsetting/getbyid/{Id}
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
      this.request<ApplicationProductSettingModelDataResponseDto, any>({
        path: `/applicationproductsetting/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApplicationProductSetting
     * @name CreateCreate
     * @summary Tạo mới cấu hình sản phẩm.
     * @request POST:/applicationproductsetting/create
     * @secure
     */
    createCreate: (
      data: CreateApplicationProductSettingModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApplicationProductSettingModelDataResponseDto, any>({
        path: `/applicationproductsetting/create`,
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
     * @tags ApplicationProductSetting
     * @name UpdateUpdate
     * @summary Cập nhật cấu hình sản phẩm.
     * @request PUT:/applicationproductsetting/update
     * @secure
     */
    updateUpdate: (
      data: UpdateApplicationProductSettingModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ApplicationProductSettingModelDataResponseDto, any>({
        path: `/applicationproductsetting/update`,
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
     * @tags ApplicationProductSetting
     * @name DeleteDelete
     * @summary Xóa cấu hình sản phẩm.
     * @request DELETE:/applicationproductsetting/delete/{Id}
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
        path: `/applicationproductsetting/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  bestsellingproduct = {
    /**
     * No description
     *
     * @tags BestSellingProduct
     * @name GetallCreate
     * @summary Danh sách cấu hình sản phẩm.
     * @request POST:/bestsellingproduct/getall
     * @secure
     */
    getallCreate: (
      data: GetAllBestSellingProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BestSellingProductModelPagedResultDtoDataResponseDto, any>({
        path: `/bestsellingproduct/getall`,
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
     * @tags BestSellingProduct
     * @name GetbyidDetail
     * @summary Lấy thông tin chi tiết cấu hình sản phẩm.
     * @request GET:/bestsellingproduct/getbyid/{Id}
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
      this.request<BestSellingProductModelDataResponseDto, any>({
        path: `/bestsellingproduct/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags BestSellingProduct
     * @name CreateCreate
     * @summary Tạo mới cấu hình sản phẩm.
     * @request POST:/bestsellingproduct/create
     * @secure
     */
    createCreate: (
      data: CreateBestSellingProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BestSellingProductModelDataResponseDto, any>({
        path: `/bestsellingproduct/create`,
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
     * @tags BestSellingProduct
     * @name UpdateUpdate
     * @summary Cập nhật cấu hình sản phẩm.
     * @request PUT:/bestsellingproduct/update
     * @secure
     */
    updateUpdate: (
      data: UpdateBestSellingProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BestSellingProductModelDataResponseDto, any>({
        path: `/bestsellingproduct/update`,
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
     * @tags BestSellingProduct
     * @name DeleteDelete
     * @summary Xóa cấu hình sản phẩm.
     * @request DELETE:/bestsellingproduct/delete/{Id}
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
        path: `/bestsellingproduct/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  brand = {
    /**
     * No description
     *
     * @tags Brand
     * @name GetallCreate
     * @summary Danh sách thương hiệu sản phẩm.
     * @request POST:/brand/getall
     * @secure
     */
    getallCreate: (
      data: GetAllBrandModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BrandModelPagedResultDtoDataResponseDto, any>({
        path: `/brand/getall`,
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
     * @tags Brand
     * @name GetbyidDetail
     * @summary Lấy thông tin chi tiết thương hiệu sản phẩm.
     * @request GET:/brand/getbyid/{Id}
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
      this.request<BrandModelDataResponseDto, any>({
        path: `/brand/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Brand
     * @name CreateCreate
     * @summary Tạo mới thương hiệu sản phẩm.
     * @request POST:/brand/create
     * @secure
     */
    createCreate: (
      data: CreateBrandModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BrandModelDataResponseDto, any>({
        path: `/brand/create`,
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
     * @tags Brand
     * @name UpdateUpdate
     * @summary Cập nhật thương hiệu sản phẩm.
     * @request PUT:/brand/update
     * @secure
     */
    updateUpdate: (
      data: UpdateBrandModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BrandModelDataResponseDto, any>({
        path: `/brand/update`,
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
     * @tags Brand
     * @name DeleteDelete
     * @summary Xóa thương hiệu sản phẩm.
     * @request DELETE:/brand/delete/{Id}
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
        path: `/brand/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  bundle = {
    /**
     * No description
     *
     * @tags Bundle
     * @name CreatebundleCreate
     * @summary Danh sách cấu hình danh mục.
     * @request POST:/bundle/createbundle
     * @secure
     */
    createbundleCreate: (
      data: CreateBundleInput,
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
        path: `/bundle/createbundle`,
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
     * @tags Bundle
     * @name UpdatebundleCreate
     * @summary Cập nhật thông tin gói sản phẩm.
     * @request POST:/bundle/updatebundle
     * @secure
     */
    updatebundleCreate: (
      data: UpdateBundleInput,
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
        path: `/bundle/updatebundle`,
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
     * @tags Bundle
     * @name DeletebundleDelete
     * @summary Xóa gói sản phẩm.
     * @request DELETE:/bundle/deletebundle/{Id}
     * @secure
     */
    deletebundleDelete: (
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
        path: `/bundle/deletebundle/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bundle
     * @name RemoveproductbundlecolectionDelete
     * @summary Xóa phần tử trong gói sản phẩm.
     * @request DELETE:/bundle/removeproductbundlecolection
     * @secure
     */
    removeproductbundlecolectionDelete: (
      data: RemoveProductBundleColectionInput,
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
        path: `/bundle/removeproductbundlecolection`,
        method: 'DELETE',
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
     * @tags Bundle
     * @name AddproductbundlecolectionCreate
     * @summary Xóa phần tử trong gói sản phẩm.
     * @request POST:/bundle/addproductbundlecolection
     * @secure
     */
    addproductbundlecolectionCreate: (
      data: AddProductBundleColectionInput,
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
        path: `/bundle/addproductbundlecolection`,
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
     * @tags Bundle
     * @name GetallbundleCreate
     * @summary Xóa phần tử trong gói sản phẩm.
     * @request POST:/bundle/getallbundle
     * @secure
     */
    getallbundleCreate: (
      data: GetProductBundle,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductBundleModelListDataResponseDto, any>({
        path: `/bundle/getallbundle`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  category = {
    /**
     * No description
     *
     * @tags Category
     * @name GetallCreate
     * @summary Danh sách danh mục sản phẩm.
     * @request POST:/category/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCategoryModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryModelPagedResultDtoDataResponseDto, any>({
        path: `/category/getall`,
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
     * @tags Category
     * @name GetbyidDetail
     * @summary Thông tin chi tiết danh mục sản phẩm.
     * @request GET:/category/getbyid/{Id}
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
      this.request<CategoryModelDataResponseDto, any>({
        path: `/category/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name GetallbyhierarchicalList
     * @summary Danh sách danh mục sản phẩm theo phân cấp.
     * @request GET:/category/getallbyhierarchical
     * @secure
     */
    getallbyhierarchicalList: (
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryModelPagedResultDtoDataResponseDto, any>({
        path: `/category/getallbyhierarchical`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CreateCreate
     * @summary Tạo mới danh mục sản phẩm.
     * @request POST:/category/create
     * @secure
     */
    createCreate: (
      data: CreateCategoryModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryModelDataResponseDto, any>({
        path: `/category/create`,
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
     * @tags Category
     * @name CreateCreategroupCreate
     * @request POST:/category/create/creategroup
     * @secure
     */
    createCreategroupCreate: (
      data: CreateCategoryGroupModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryModelDataResponseDto, any>({
        path: `/category/create/creategroup`,
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
     * @tags Category
     * @name UpdateUpdate
     * @summary Cập nhật danh mục sản phẩm.
     * @request PUT:/category/update
     * @secure
     */
    updateUpdate: (
      data: UpdateCategoryModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryModelDataResponseDto, any>({
        path: `/category/update`,
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
     * @tags Category
     * @name DeleteDelete
     * @summary Xóa danh mục sản phẩm.
     * @request DELETE:/category/delete/{Id}
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
        path: `/category/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name GetallcategorydynamicpropertyCreate
     * @summary Danh sách tính chất danh mục.
     * @request POST:/category/getallcategorydynamicproperty
     * @secure
     */
    getallcategorydynamicpropertyCreate: (
      data: GetAllCategoryDynamicPropertyDataModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryDynamicPropertyDataModelPagedResultDtoDataResponseDto, any>({
        path: `/category/getallcategorydynamicproperty`,
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
     * @tags Category
     * @name CreatecategorydynamicpropertyCreate
     * @summary Tạo mới tính chất danh mục.
     * @request POST:/category/createcategorydynamicproperty
     * @secure
     */
    createcategorydynamicpropertyCreate: (
      data: CreateCategoryDynamicPropertyDataModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryDynamicPropertyDataModelDataResponseDto, any>({
        path: `/category/createcategorydynamicproperty`,
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
     * @tags Category
     * @name UpdatecategorydynamicpropertyUpdate
     * @summary Chỉnh sửa tính chất danh mục.
     * @request PUT:/category/updatecategorydynamicproperty
     * @secure
     */
    updatecategorydynamicpropertyUpdate: (
      data: UpdateCategoryDynamicPropertyDataModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryDynamicPropertyDataModelDataResponseDto, any>({
        path: `/category/updatecategorydynamicproperty`,
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
     * @tags Category
     * @name DeletecategorydynamicpropertyDelete
     * @summary Xóa tính chất danh mục.
     * @request DELETE:/category/deletecategorydynamicproperty/{Id}
     * @secure
     */
    deletecategorydynamicpropertyDelete: (
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
      this.request<CategoryModelListDataResponseDto, any>({
        path: `/category/deletecategorydynamicproperty/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name GetallcategoryrecycleCreate
     * @summary Danh sách danh mục sản phẩm đã bị xóa.
     * @request POST:/category/getallcategoryrecycle
     * @secure
     */
    getallcategoryrecycleCreate: (
      data: GetAllCategoryModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryRecycleModelPagedResultDtoDataResponseDto, any>({
        path: `/category/getallcategoryrecycle`,
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
     * @tags Category
     * @name RestorecategoryUpdate
     * @summary Khôi phục thông tin danh mục sản phẩm đã bị xóa.
     * @request PUT:/category/restorecategory
     * @secure
     */
    restorecategoryUpdate: (
      query?: {
        /** @format uuid */
        idCategory?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/category/restorecategory`,
        method: 'PUT',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name PhysicaldeletecategoryDelete
     * @summary Xóa vật lý (mất vĩnh viễn) danh mục sản phẩm.
     * @request DELETE:/category/physicaldeletecategory
     * @secure
     */
    physicaldeletecategoryDelete: (
      query?: {
        /** @format uuid */
        idCategory?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/category/physicaldeletecategory`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name GetallbylicenseidCreate
     * @summary Danh sách danh mục theo LicenseId.
     * @request POST:/category/getallbylicenseid
     * @secure
     */
    getallbylicenseidCreate: (
      data: GetAllCategoryByLicenseIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryModelPagedResultDtoDataResponseDto, any>({
        path: `/category/getallbylicenseid`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  categorydynamicproperty = {
    /**
     * No description
     *
     * @tags CategoryDynamicProperty
     * @name GetallCreate
     * @summary Danh sách tính chất danh mục.
     * @request POST:/categorydynamicproperty/getall
     * @secure
     */
    getallCreate: (
      data: GetAllCategoryDynamicPropertyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryDynamicPropertyModelPagedResultDtoDataResponseDto, any>({
        path: `/categorydynamicproperty/getall`,
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
     * @tags CategoryDynamicProperty
     * @name GetbyidDetail
     * @summary Thông tin chi tiết tính chất danh mục.
     * @request GET:/categorydynamicproperty/getbyid/{Id}
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
      this.request<CategoryDynamicPropertyModelDataResponseDto, any>({
        path: `/categorydynamicproperty/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags CategoryDynamicProperty
     * @name CreateCreate
     * @summary Tạo mới tính chất danh mục.
     * @request POST:/categorydynamicproperty/create
     * @secure
     */
    createCreate: (
      data: CreateCategoryDynamicPropertyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryDynamicPropertyModelDataResponseDto, any>({
        path: `/categorydynamicproperty/create`,
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
     * @tags CategoryDynamicProperty
     * @name UpdateUpdate
     * @summary Cập nhật thông tin tính chất danh mục.
     * @request PUT:/categorydynamicproperty/update
     * @secure
     */
    updateUpdate: (
      data: UpdateCategoryDynamicPropertyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CategoryDynamicPropertyModelDataResponseDto, any>({
        path: `/categorydynamicproperty/update`,
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
     * @tags CategoryDynamicProperty
     * @name DeleteDelete
     * @summary Xóa tính chất danh mục.
     * @request DELETE:/categorydynamicproperty/delete/{Id}
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
        path: `/categorydynamicproperty/delete/${id}`,
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
  gift = {
    /**
     * No description
     *
     * @tags Gift
     * @name GetallCreate
     * @summary Danh sách quà tặng
     * @request POST:/gift/getall
     * @secure
     */
    getallCreate: (
      data: GetAllGiftModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GiftModelPagedResultDtoDataResponseDto, any>({
        path: `/gift/getall`,
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
     * @tags Gift
     * @name GetbyidDetail
     * @summary Thông tin chi tiết quà tặng.
     * @request GET:/gift/getbyid/{Id}
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
      this.request<GiftModelDataResponseDto, any>({
        path: `/gift/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Gift
     * @name CreateCreate
     * @summary Tạo mới quà tặng.
     * @request POST:/gift/create
     * @secure
     */
    createCreate: (
      data: CreateProductGiftInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GiftModelDataResponseDto, any>({
        path: `/gift/create`,
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
     * @tags Gift
     * @name UpdateUpdate
     * @summary Cập nhật quà tặng.
     * @request PUT:/gift/update
     * @secure
     */
    updateUpdate: (
      data: UpdateGiftModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GiftModelDataResponseDto, any>({
        path: `/gift/update`,
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
     * @tags Gift
     * @name DeleteDelete
     * @summary Xóa quà tặng.
     * @request DELETE:/gift/delete/{Id}
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
        path: `/gift/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Gift
     * @name ApplyproductgiftitemsCreate
     * @summary Thêm item quà tặng
     * @request POST:/gift/applyproductgiftitems
     * @secure
     */
    applyproductgiftitemsCreate: (
      data: MappingProductGiftItem,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GiftModelDataResponseDto, any>({
        path: `/gift/applyproductgiftitems`,
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
     * @tags Gift
     * @name RemoveproductgiftitemDelete
     * @summary Xóa item quà tặng
     * @request DELETE:/gift/removeproductgiftitem
     * @secure
     */
    removeproductgiftitemDelete: (
      data: MappingProductGift,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GiftModelDataResponseDto, any>({
        path: `/gift/removeproductgiftitem`,
        method: 'DELETE',
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
     * @tags Gift
     * @name ApplyproductgiftCreate
     * @summary Thêm sản phẩm vào gói quà tặng
     * @request POST:/gift/applyproductgift
     * @secure
     */
    applyproductgiftCreate: (
      data: MappingProductGift,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GiftModelDataResponseDto, any>({
        path: `/gift/applyproductgift`,
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
     * @tags Gift
     * @name RemoveproductgiftDelete
     * @summary Xoá sản phẩm vào gói quà tặng
     * @request DELETE:/gift/removeproductgift
     * @secure
     */
    removeproductgiftDelete: (
      data: MappingProductGift,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GiftModelDataResponseDto, any>({
        path: `/gift/removeproductgift`,
        method: 'DELETE',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  newproductrelease = {
    /**
     * No description
     *
     * @tags NewProductRelease
     * @name GetallCreate
     * @summary Danh sách sản phẩm mới.
     * @request POST:/newproductrelease/getall
     * @secure
     */
    getallCreate: (
      data: GetAllNewProductReleaseModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<NewProductReleaseModelPagedResultDtoDataResponseDto, any>({
        path: `/newproductrelease/getall`,
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
     * @tags NewProductRelease
     * @name GetbyidDetail
     * @summary Lấy thông tin chi tiết sản phẩm mới.
     * @request GET:/newproductrelease/getbyid/{Id}
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
      this.request<NewProductReleaseModelDataResponseDto, any>({
        path: `/newproductrelease/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags NewProductRelease
     * @name CreateCreate
     * @summary Tạo mới sản phẩm mới.
     * @request POST:/newproductrelease/create
     * @secure
     */
    createCreate: (
      data: CreateNewProductReleaseModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<NewProductReleaseModelDataResponseDto, any>({
        path: `/newproductrelease/create`,
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
     * @tags NewProductRelease
     * @name UpdateUpdate
     * @summary Cập nhật sản phẩm mới.
     * @request PUT:/newproductrelease/update
     * @secure
     */
    updateUpdate: (
      data: UpdateNewProductReleaseModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<NewProductReleaseModelDataResponseDto, any>({
        path: `/newproductrelease/update`,
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
     * @tags NewProductRelease
     * @name DeleteDelete
     * @summary Xóa sản phẩm mới.
     * @request DELETE:/newproductrelease/delete/{Id}
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
        path: `/newproductrelease/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  price = {
    /**
     * No description
     *
     * @tags Price
     * @name GetallCreate
     * @summary Danh sách giá.
     * @request POST:/price/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPriceModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceModelPagedResultDtoDataResponseDto, any>({
        path: `/price/getall`,
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
     * @tags Price
     * @name GetbyidDetail
     * @summary Thông tin chi tiết giá.
     * @request GET:/price/getbyid/{Id}
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
      this.request<PriceModelDataResponseDto, any>({
        path: `/price/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Price
     * @name CreateCreate
     * @summary Tạo mới giá.
     * @request POST:/price/create
     * @secure
     */
    createCreate: (
      data: CreatePriceModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceModelDataResponseDto, any>({
        path: `/price/create`,
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
     * @tags Price
     * @name UpdateUpdate
     * @summary Cập nhật giá.
     * @request PUT:/price/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePriceModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceModelDataResponseDto, any>({
        path: `/price/update`,
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
     * @tags Price
     * @name DeleteDelete
     * @summary Xóa giá.
     * @request DELETE:/price/delete/{Id}
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
        path: `/price/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  pricelist = {
    /**
     * No description
     *
     * @tags PriceList
     * @name GetallCreate
     * @summary Danh sách bảng giá.
     * @request POST:/pricelist/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPriceListModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListModelPagedResultDtoDataResponseDto, any>({
        path: `/pricelist/getall`,
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
     * @tags PriceList
     * @name GetbyidDetail
     * @summary Thông tin chi tiết bảng giá.
     * @request GET:/pricelist/getbyid/{Id}
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
      this.request<PriceListModelDataResponseDto, any>({
        path: `/pricelist/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceList
     * @name CreateCreate
     * @summary Tạo mới bảng giá.
     * @request POST:/pricelist/create
     * @secure
     */
    createCreate: (
      data: CreatePriceListModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListModelDataResponseDto, any>({
        path: `/pricelist/create`,
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
     * @tags PriceList
     * @name UpdateUpdate
     * @summary Cập nhật bảng giá.
     * @request PUT:/pricelist/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePriceListModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListModelDataResponseDto, any>({
        path: `/pricelist/update`,
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
     * @tags PriceList
     * @name DeleteDelete
     * @summary Xóa bảng giá.
     * @request DELETE:/pricelist/delete/{Id}
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
        path: `/pricelist/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceList
     * @name GetallbyproductCreate
     * @summary Danh sách bảng giá theo sản phẩm.
     * @request POST:/pricelist/getallbyproduct
     * @secure
     */
    getallbyproductCreate: (
      data: GetAllByProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListByProductModelPagedResultDtoDataResponseDto, any>({
        path: `/pricelist/getallbyproduct`,
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
     * @tags PriceList
     * @name GetallpricelistrecycleCreate
     * @summary Danh sách bảng giá đã bị xóa.
     * @request POST:/pricelist/getallpricelistrecycle
     * @secure
     */
    getallpricelistrecycleCreate: (
      data: GetAllPriceListModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListRecycleModelPagedResultDtoDataResponseDto, any>({
        path: `/pricelist/getallpricelistrecycle`,
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
     * @tags PriceList
     * @name RestorepricelistUpdate
     * @summary Khôi phục thông tin bảng giá đã bị xóa.
     * @request PUT:/pricelist/restorepricelist
     * @secure
     */
    restorepricelistUpdate: (
      query?: {
        /** @format uuid */
        idPriceList?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/pricelist/restorepricelist`,
        method: 'PUT',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceList
     * @name PhysicaldeletepricelistDelete
     * @summary Xóa vật lý (mất vĩnh viễn) bảnh giá.
     * @request DELETE:/pricelist/physicaldeletepricelist
     * @secure
     */
    physicaldeletepricelistDelete: (
      query?: {
        /** @format uuid */
        idPriceList?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/pricelist/physicaldeletepricelist`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceList
     * @name GetbynameDetail
     * @summary Thông tin chi tiết bảng giá theo name.
     * @request GET:/pricelist/getbyname/{name}
     * @secure
     */
    getbynameDetail: (
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
      this.request<PriceListModelDataResponseDto, any>({
        path: `/pricelist/getbyname/${name}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceList
     * @name GetmaxpriorityList
     * @summary Lay max Priority.
     * @request GET:/pricelist/getmaxpriority
     * @secure
     */
    getmaxpriorityList: (
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Int32DataResponseDto, any>({
        path: `/pricelist/getmaxpriority`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  pricelistassignment = {
    /**
     * No description
     *
     * @tags PriceListAssignment
     * @name GetallCreate
     * @summary Danh sách giá quy cho cụm KH.
     * @request POST:/pricelistassignment/getall
     * @secure
     */
    getallCreate: (
      data: GetAllPriceListAssignmentModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListAssignmentModelPagedResultDtoDataResponseDto, any>({
        path: `/pricelistassignment/getall`,
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
     * @tags PriceListAssignment
     * @name GetbyidDetail
     * @summary Thông tin chi tiết giá quy cho cụm KH.
     * @request GET:/pricelistassignment/getbyid/{Id}
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
      this.request<PriceListAssignmentModelDataResponseDto, any>({
        path: `/pricelistassignment/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceListAssignment
     * @name CreateCreate
     * @summary Tạo mới giá quy cho cụm KH.
     * @request POST:/pricelistassignment/create
     * @secure
     */
    createCreate: (
      data: CreatePriceListAssignmentModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListAssignmentModelDataResponseDto, any>({
        path: `/pricelistassignment/create`,
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
     * @tags PriceListAssignment
     * @name UpdateUpdate
     * @summary Cập nhật thông tin giá quy cho cụm KH.
     * @request PUT:/pricelistassignment/update
     * @secure
     */
    updateUpdate: (
      data: UpdatePriceListAssignmentModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PriceListAssignmentModelDataResponseDto, any>({
        path: `/pricelistassignment/update`,
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
     * @tags PriceListAssignment
     * @name DeleteDelete
     * @summary Xóa đơn giá quy cho cụm KH.
     * @request DELETE:/pricelistassignment/delete/{Id}
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
        path: `/pricelistassignment/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PriceListAssignment
     * @name CheckcustomersegmentinpricelistDetail
     * @request GET:/pricelistassignment/checkcustomersegmentinpricelist/{idSegmentType}
     * @secure
     */
    checkcustomersegmentinpricelistDetail: (
      idSegmentType: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<CustomerSegmentInPriceListDataResponseDto, any>({
        path: `/pricelistassignment/checkcustomersegmentinpricelist/${idSegmentType}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  product = {
    /**
     * No description
     *
     * @tags Product
     * @name EnumdatatypeList
     * @summary Danh sách kiểu dữ liệu
     * @request GET:/product/enumdatatype
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
      this.request<EnumDataTypeModelListDataResponseDto, any>({
        path: `/product/enumdatatype`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name GetallbylistidCreate
     * @summary Danh sách sản phẩm theo danh sách Id
     * @request POST:/product/getallbylistid
     * @secure
     */
    getallbylistidCreate: (
      data: GetAllProductByListIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelListDataResponseDto, any>({
        path: `/product/getallbylistid`,
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
     * @tags Product
     * @name GetallCreate
     * @summary Danh sách sản phẩm.
     * @request POST:/product/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelPagedResultDtoDataResponseDto, any>({
        path: `/product/getall`,
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
     * @tags Product
     * @name PostProduct
     * @summary Thông tin chi tiết sản phẩm.
     * @request POST:/product/get
     * @secure
     */
    postProduct: (
      data: GetProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelDataResponseDto, any>({
        path: `/product/get`,
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
     * @tags Product
     * @name CreateCreate
     * @summary Tạo mới sản phẩm.
     * @request POST:/product/create
     * @secure
     */
    createCreate: (
      data: CreateProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelDataResponseDto, any>({
        path: `/product/create`,
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
     * @tags Product
     * @name CreatewithpropertiesCreate
     * @summary Tạo mới sản phẩm.
     * @request POST:/product/createwithproperties
     * @secure
     */
    createwithpropertiesCreate: (
      data: CreateProductWithPropertiesModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelDataResponseDto, any>({
        path: `/product/createwithproperties`,
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
     * @tags Product
     * @name CreateorupdateCreate
     * @request POST:/product/createorupdate
     * @secure
     */
    createorupdateCreate: (
      data: CreateProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelDataResponseDto, any>({
        path: `/product/createorupdate`,
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
     * @tags Product
     * @name UpdateUpdate
     * @summary Cập nhật sản phẩm.
     * @request PUT:/product/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelDataResponseDto, any>({
        path: `/product/update`,
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
     * @tags Product
     * @name DeleteDelete
     * @summary Xóa sản phẩm.
     * @request DELETE:/product/delete/{Id}
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
        path: `/product/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name GetproductpriceCreate
     * @summary Danh sách giá sản phẩm.
     * @request POST:/product/getproductprice
     * @secure
     */
    getproductpriceCreate: (
      data: GetProductPriceModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductPriceModelListDataResponseDto, any>({
        path: `/product/getproductprice`,
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
     * @tags Product
     * @name GetallproductdynamicpropertyCreate
     * @summary Danh sách tính chất sản phẩm.
     * @request POST:/product/getallproductdynamicproperty
     * @secure
     */
    getallproductdynamicpropertyCreate: (
      data: GetAllProductDynamicPropertyDataModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductDynamicPropertyDataModelPagedResultDtoDataResponseDto, any>({
        path: `/product/getallproductdynamicproperty`,
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
     * @tags Product
     * @name GetmultipleproductdynamicpropertiesCreate
     * @summary Danh sách product dynamic property theo list product ids
     * @request POST:/product/getmultipleproductdynamicproperties
     * @secure
     */
    getmultipleproductdynamicpropertiesCreate: (
      data: GetMultipleProductDynamicPropertiesDataModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductDynamicPropertyDataModelListDataResponseDto, any>({
        path: `/product/getmultipleproductdynamicproperties`,
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
     * @tags Product
     * @name CreateproductdynamicpropertyCreate
     * @summary Tạo mới tính chất sản phẩm.
     * @request POST:/product/createproductdynamicproperty
     * @secure
     */
    createproductdynamicpropertyCreate: (
      data: CreateProductDynamicPropertyDataModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductDynamicPropertyDataModelDataResponseDto, any>({
        path: `/product/createproductdynamicproperty`,
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
     * @tags Product
     * @name UpdateproductdynamicpropertyUpdate
     * @summary Chỉnh sửa tính chất sản phẩm.
     * @request PUT:/product/updateproductdynamicproperty
     * @secure
     */
    updateproductdynamicpropertyUpdate: (
      data: UpdateProductDynamicPropertyDataModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductDynamicPropertyDataModelDataResponseDto, any>({
        path: `/product/updateproductdynamicproperty`,
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
     * @tags Product
     * @name DeleteproductdynamicpropertyDelete
     * @summary Xóa tính chất sản phẩm.
     * @request DELETE:/product/deleteproductdynamicproperty/{Id}
     * @secure
     */
    deleteproductdynamicpropertyDelete: (
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
      this.request<ProductModelListDataResponseDto, any>({
        path: `/product/deleteproductdynamicproperty/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name GetallproductrecycleCreate
     * @summary Danh sách sản phẩm đã bị xóa.
     * @request POST:/product/getallproductrecycle
     * @secure
     */
    getallproductrecycleCreate: (
      data: GetAllProductModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductRecycleModelPagedResultDtoDataResponseDto, any>({
        path: `/product/getallproductrecycle`,
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
     * @tags Product
     * @name RestoreproductUpdate
     * @summary Khôi phục thông tin sản phẩm đã bị xóa.
     * @request PUT:/product/restoreproduct
     * @secure
     */
    restoreproductUpdate: (
      query?: {
        /** @format uuid */
        idProduct?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/product/restoreproduct`,
        method: 'PUT',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name PhysicaldeleteproductDelete
     * @summary Xóa vật lý (mất vĩnh viễn) sản phẩm.
     * @request DELETE:/product/physicaldeleteproduct
     * @secure
     */
    physicaldeleteproductDelete: (
      query?: {
        /** @format uuid */
        idProduct?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<BooleanDataResponseDto, any>({
        path: `/product/physicaldeleteproduct`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name GetproductpropertyDetail
     * @request GET:/product/getproductproperty/{value}
     * @secure
     */
    getproductpropertyDetail: (
      value: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DynamicEntityValueListDataResponseDto, any>({
        path: `/product/getproductproperty/${value}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name GetproductbynameDetail
     * @request GET:/product/getproductbyname/{name}
     * @secure
     */
    getproductbynameDetail: (
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
      this.request<ProductModelDataResponseDto, any>({
        path: `/product/getproductbyname/${name}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name GetallbylicenseidCreate
     * @summary Danh sách sản phẩm theo LicenseId.
     * @request POST:/product/getallbylicenseid
     * @secure
     */
    getallbylicenseidCreate: (
      data: GetAllProductByLicenseIdModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelPagedResultDtoDataResponseDto, any>({
        path: `/product/getallbylicenseid`,
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
     * @tags Product
     * @name GetrecommendcomboDetail
     * @summary Sản phẩm thuộc combo nào
     * @request GET:/product/getrecommendcombo/{productId}
     * @secure
     */
    getrecommendcomboDetail: (
      productId: string,
      query?: {
        /** @format uuid */
        partyId?: string;
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductBundleModelListDataResponseDto, any>({
        path: `/product/getrecommendcombo/${productId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Product
     * @name AddproductrelatedCreate
     * @summary Thêm sản phẩm liên quan (variant)
     * @request POST:/product/addproductrelated
     * @secure
     */
    addproductrelatedCreate: (
      data: AddProductRelatedModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelDataResponseDto, any>({
        path: `/product/addproductrelated`,
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
     * @tags Product
     * @name ApplyproductvariantCreate
     * @summary Tạo liên kết sản phẩm
     * @request POST:/product/applyproductvariant
     * @secure
     */
    applyproductvariantCreate: (
      data: ApplyProductRelatedInput,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductModelDataResponseDto, any>({
        path: `/product/applyproductvariant`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  productattribute = {
    /**
     * No description
     *
     * @tags ProductAttribute
     * @name GetallCreate
     * @summary Danh sách thuộc tính sản phẩm.
     * @request POST:/productattribute/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProductAttributeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductAttributeModelPagedResultDtoDataResponseDto, any>({
        path: `/productattribute/getall`,
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
     * @tags ProductAttribute
     * @name GetbyidDetail
     * @summary Thông tin chi tiết thuộc tính sản phẩm.
     * @request GET:/productattribute/getbyid/{Id}
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
      this.request<ProductAttributeModelDataResponseDto, any>({
        path: `/productattribute/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductAttribute
     * @name CreateCreate
     * @summary Tạo mới thuộc tính sản phẩm.
     * @request POST:/productattribute/create
     * @secure
     */
    createCreate: (
      data: CreateProductAttributeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductAttributeModelDataResponseDto, any>({
        path: `/productattribute/create`,
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
     * @tags ProductAttribute
     * @name UpdateUpdate
     * @summary Cập nhật thông tin thuộc tính sản phẩm.
     * @request PUT:/productattribute/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProductAttributeModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductAttributeModelDataResponseDto, any>({
        path: `/productattribute/update`,
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
     * @tags ProductAttribute
     * @name DeleteDelete
     * @summary Xóa thuộc tính sản phẩm.
     * @request DELETE:/productattribute/delete/{Id}
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
        path: `/productattribute/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  productattributegroup = {
    /**
     * No description
     *
     * @tags ProductAttributeGroup
     * @name GetallCreate
     * @summary Danh sách nhóm thuộc tính sản phẩm.
     * @request POST:/productattributegroup/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProductAttributeGroupModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductAttributeGroupModelPagedResultDtoDataResponseDto, any>({
        path: `/productattributegroup/getall`,
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
     * @tags ProductAttributeGroup
     * @name GetbyidDetail
     * @summary Thông tin chi tiết nhóm thuộc tính sản phẩm.
     * @request GET:/productattributegroup/getbyid/{Id}
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
      this.request<ProductAttributeGroupModelDataResponseDto, any>({
        path: `/productattributegroup/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductAttributeGroup
     * @name CreateCreate
     * @summary Tạo mới nhóm thuộc tính sản phẩm.
     * @request POST:/productattributegroup/create
     * @secure
     */
    createCreate: (
      data: CreateProductAttributeGroupModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductAttributeGroupModelDataResponseDto, any>({
        path: `/productattributegroup/create`,
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
     * @tags ProductAttributeGroup
     * @name UpdateUpdate
     * @summary Cập nhật nhóm thuộc tính sản phẩm.
     * @request PUT:/productattributegroup/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProductAttributeGroupModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductAttributeGroupModelDataResponseDto, any>({
        path: `/productattributegroup/update`,
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
     * @tags ProductAttributeGroup
     * @name DeleteDelete
     * @summary Xóa nhóm thộc tính sản phẩm.
     * @request DELETE:/productattributegroup/delete/{Id}
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
        path: `/productattributegroup/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  productdynamicproperty = {
    /**
     * No description
     *
     * @tags ProductDynamicProperty
     * @name GetallCreate
     * @summary Danh sách tính chất sản phẩm.
     * @request POST:/productdynamicproperty/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProductDynamicPropertyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductDynamicPropertyModelPagedResultDtoDataResponseDto, any>({
        path: `/productdynamicproperty/getall`,
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
     * @tags ProductDynamicProperty
     * @name GetmultipleproductdynamicpropertiesCreate
     * @summary Gets the multiple product dynamic properties.
     * @request POST:/productdynamicproperty/getmultipleproductdynamicproperties
     * @secure
     */
    getmultipleproductdynamicpropertiesCreate: (
      data: GetMultipleProductDynamicPropertiesModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductDynamicPropertyModelListDataResponseDto, any>({
        path: `/productdynamicproperty/getmultipleproductdynamicproperties`,
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
     * @tags ProductDynamicProperty
     * @name GetbyidDetail
     * @summary Thông tin chi tiết tính chất sản phẩm.
     * @request GET:/productdynamicproperty/getbyid/{Id}
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
      this.request<ProductDynamicPropertyModelDataResponseDto, any>({
        path: `/productdynamicproperty/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductDynamicProperty
     * @name CreateCreate
     * @summary Tạo mới tính chất sản phẩm.
     * @request POST:/productdynamicproperty/create
     * @secure
     */
    createCreate: (
      data: CreateProductDynamicPropertyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductDynamicPropertyModelDataResponseDto, any>({
        path: `/productdynamicproperty/create`,
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
     * @tags ProductDynamicProperty
     * @name UpdateUpdate
     * @summary Cập nhật thông tin tính chất sản phẩm.
     * @request PUT:/productdynamicproperty/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProductDynamicPropertyModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductDynamicPropertyModelDataResponseDto, any>({
        path: `/productdynamicproperty/update`,
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
     * @tags ProductDynamicProperty
     * @name DeleteDelete
     * @summary Xóa tính chất sản phẩm.
     * @request DELETE:/productdynamicproperty/delete/{Id}
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
        path: `/productdynamicproperty/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  productfeature = {
    /**
     * No description
     *
     * @tags ProductFeature
     * @name GetallCreate
     * @summary Danh sách tính năng nổi bật.
     * @request POST:/productfeature/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProductFeatureModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductFeatureModelPagedResultDtoDataResponseDto, any>({
        path: `/productfeature/getall`,
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
     * @tags ProductFeature
     * @name GetbyidDetail
     * @summary Thông tin chi tiết tính năng nổi bật.
     * @request GET:/productfeature/getbyid/{Id}
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
      this.request<ProductFeatureModelDataResponseDto, any>({
        path: `/productfeature/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductFeature
     * @name CreateCreate
     * @summary Tạo mới tính năng nổi bật.
     * @request POST:/productfeature/create
     * @secure
     */
    createCreate: (
      data: CreateProductFeatureModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductFeatureModelDataResponseDto, any>({
        path: `/productfeature/create`,
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
     * @tags ProductFeature
     * @name UpdateUpdate
     * @summary Cập nhật thông tin tính năng nổi bật.
     * @request PUT:/productfeature/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProductFeatureModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductFeatureModelDataResponseDto, any>({
        path: `/productfeature/update`,
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
     * @tags ProductFeature
     * @name DeleteDelete
     * @summary Xóa tính năng nổi bật.
     * @request DELETE:/productfeature/delete/{Id}
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
        path: `/productfeature/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  productfeatureitem = {
    /**
     * No description
     *
     * @tags ProductFeatureItem
     * @name GetallCreate
     * @summary Danh sách item tính năng nổi bật.
     * @request POST:/productfeatureitem/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProductFeatureItemModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductFeatureItemModelPagedResultDtoDataResponseDto, any>({
        path: `/productfeatureitem/getall`,
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
     * @tags ProductFeatureItem
     * @name GetbyidDetail
     * @summary Thông tin chi tiết item tính năng nổi bật.
     * @request GET:/productfeatureitem/getbyid/{Id}
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
      this.request<ProductFeatureItemModelDataResponseDto, any>({
        path: `/productfeatureitem/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductFeatureItem
     * @name CreateCreate
     * @summary Tạo mới item tính năng nổi bật.
     * @request POST:/productfeatureitem/create
     * @secure
     */
    createCreate: (
      data: CreateProductFeatureItemModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductFeatureItemModelDataResponseDto, any>({
        path: `/productfeatureitem/create`,
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
     * @tags ProductFeatureItem
     * @name UpdateUpdate
     * @summary Cập nhật thông tin item tính năng nổi bật.
     * @request PUT:/productfeatureitem/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProductFeatureItemModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductFeatureItemModelDataResponseDto, any>({
        path: `/productfeatureitem/update`,
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
     * @tags ProductFeatureItem
     * @name DeleteDelete
     * @summary Xóa item tính năng nổi bật.
     * @request DELETE:/productfeatureitem/delete/{Id}
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
        path: `/productfeatureitem/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  producttemplate = {
    /**
     * No description
     *
     * @tags ProductTemplate
     * @name GetallCreate
     * @summary Danh sách template của sản phẩm.
     * @request POST:/producttemplate/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProductTemplateModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductTemplateModelPagedResultDtoDataResponseDto, any>({
        path: `/producttemplate/getall`,
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
     * @tags ProductTemplate
     * @name GetbyidDetail
     * @summary Thông tin chi tiết template sản phẩm.
     * @request GET:/producttemplate/getbyid/{Id}
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
      this.request<ProductTemplateModelDataResponseDto, any>({
        path: `/producttemplate/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductTemplate
     * @name CreateCreate
     * @summary Tạo mới template của sản phẩm.
     * @request POST:/producttemplate/create
     * @secure
     */
    createCreate: (
      data: CreateProductTemplateModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductTemplateModelDataResponseDto, any>({
        path: `/producttemplate/create`,
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
     * @tags ProductTemplate
     * @name UpdateUpdate
     * @summary Cập nhật template của sản phẩm.
     * @request PUT:/producttemplate/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProductTemplateModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductTemplateModelDataResponseDto, any>({
        path: `/producttemplate/update`,
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
     * @tags ProductTemplate
     * @name DeleteDelete
     * @summary Xóa template của sản phẩm.
     * @request DELETE:/producttemplate/delete/{Id}
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
        path: `/producttemplate/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  productunit = {
    /**
     * No description
     *
     * @tags ProductUnit
     * @name GetallCreate
     * @summary Danh sách đơn vị tính sản phẩm.
     * @request POST:/productunit/getall
     * @secure
     */
    getallCreate: (
      data: GetAllProductUnitModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductUnitModelPagedResultDtoDataResponseDto, any>({
        path: `/productunit/getall`,
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
     * @tags ProductUnit
     * @name GetbyidDetail
     * @summary Thông tin chi tiết đơn vị tính sản phẩm.
     * @request GET:/productunit/getbyid/{Id}
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
      this.request<ProductUnitModelDataResponseDto, any>({
        path: `/productunit/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductUnit
     * @name CreateCreate
     * @summary Tạo mới đơn vị tính sản phẩm.
     * @request POST:/productunit/create
     * @secure
     */
    createCreate: (
      data: CreateProductUnitModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductUnitModelDataResponseDto, any>({
        path: `/productunit/create`,
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
     * @tags ProductUnit
     * @name UpdateUpdate
     * @summary Cập nhật thông tin đơn vị tính sản phẩm.
     * @request PUT:/productunit/update
     * @secure
     */
    updateUpdate: (
      data: UpdateProductUnitModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductUnitModelDataResponseDto, any>({
        path: `/productunit/update`,
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
     * @tags ProductUnit
     * @name DeleteDelete
     * @summary Xóa đơn vị tính sản phẩm.
     * @request DELETE:/productunit/delete/{Id}
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
        path: `/productunit/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ProductUnit
     * @name CreateorupdateCreate
     * @summary Cập nhật hoặt tạo mới đơn vị tính sản phẩm.
     * @request POST:/productunit/createorupdate
     * @secure
     */
    createorupdateCreate: (
      data: CreateProductUnitModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductUnitModelDataResponseDto, any>({
        path: `/productunit/createorupdate`,
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
     * @tags ProductUnit
     * @name GetproductunitpropertyDetail
     * @request GET:/productunit/getproductunitproperty/{value}
     * @secure
     */
    getproductunitpropertyDetail: (
      value: string,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DynamicEntityValueListDataResponseDto, any>({
        path: `/productunit/getproductunitproperty/${value}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  purchasedproduct = {
    /**
     * No description
     *
     * @tags PurchasedProduct
     * @name CreateCreate
     * @request POST:/purchasedproduct/create
     * @secure
     */
    createCreate: (
      data: CreatePurchasedProductModel[],
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
        path: `/purchasedproduct/create`,
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  tag = {
    /**
     * No description
     *
     * @tags Tag
     * @name GetallCreate
     * @summary Danh sách nhóm
     * @request POST:/tag/getall
     * @secure
     */
    getallCreate: (
      data: GetAllTagModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<TagModelPagedResultDtoDataResponseDto, any>({
        path: `/tag/getall`,
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
     * @tags Tag
     * @name GetbyidDetail
     * @summary Thông tin chi tiết nhóm.
     * @request GET:/tag/getbyid/{Id}
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
      this.request<TagModelDataResponseDto, any>({
        path: `/tag/getbyid/${id}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tag
     * @name CreateCreate
     * @summary Tạo mới nhóm.
     * @request POST:/tag/create
     * @secure
     */
    createCreate: (
      data: CreateTagModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<TagModelDataResponseDto, any>({
        path: `/tag/create`,
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
     * @tags Tag
     * @name UpdateUpdate
     * @summary Cập nhật nhóm.
     * @request PUT:/tag/update
     * @secure
     */
    updateUpdate: (
      data: UpdateTagModel,
      query?: {
        /**
         * The requested API version
         * @default "1.0"
         */
        'api-version'?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<TagModelDataResponseDto, any>({
        path: `/tag/update`,
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
     * @tags Tag
     * @name DeleteDelete
     * @summary Xóa nhóm.
     * @request DELETE:/tag/delete/{Id}
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
        path: `/tag/delete/${id}`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  };
}
