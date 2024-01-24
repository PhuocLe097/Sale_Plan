import { action, makeAutoObservable, makeObservable, observable, runInAction } from 'mobx';
import * as catalogHandler from '../services/catalogHandler/catalogHandler'
import AppConsts from '../lib/appconst';
import SwaggerUtils from '../services/swaggerUtils';
class productStore {
  httpClient: catalogHandler.Api<any>;
  @observable productModel!: catalogHandler.ProductModel[];
  @observable getByIdProductModel!: catalogHandler.ProductModel;


  constructor() {
    this.httpClient = SwaggerUtils.httpClient(AppConsts.catalogPrefix, catalogHandler.Api)
    makeAutoObservable(this, {
      productModel: observable,
    });
  }

  @action async GetAllList(data:catalogHandler.GetAllProductModel) {
    const product = await this.httpClient.product.getallCreate(data);
    runInAction(() => {
      this.productModel = (product.data.data as any).items;
    });
  }

  @action async GetByIdProduct(data:catalogHandler.GetProductModel) {
    const GetByIdproduct = await this.httpClient.product.postProduct(data);
    runInAction(() => {
      this.getByIdProductModel = (GetByIdproduct.data.data as any);
    });
  }
}

export default productStore;
