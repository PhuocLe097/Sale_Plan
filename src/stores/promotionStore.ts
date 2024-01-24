import { action, makeAutoObservable, makeObservable, observable, runInAction } from 'mobx';
import * as promotionHandler from '../services/promotionHandler/promotionHandler';
import Utils from '../utils/utils';
import SwaggerUtils from '../services/swaggerUtils';
import AppConsts from '../lib/appconst';
import App from '../App';
class PromotionStore {
  httpClient: promotionHandler.Api<any>;
  @observable promotionModel!: promotionHandler.PromotionModel[];
  @observable promotionModelDetail!: promotionHandler.PromotionModel[];
  @observable referenceTypeModel!: promotionHandler.ReferenceTypeModel[];
  @observable createPromotion!: promotionHandler.CreatePromotionInput[];
  @observable rewardTypeDto!: promotionHandler.RewardTypeDto[];
  @observable workflowModel!: promotionHandler.WorkflowModel[];
  @observable updatePromotion!: promotionHandler.BooleanDataResponseDto;
  @observable rewardModel!: promotionHandler.RewardModel[];
  @observable DealsModel!: promotionHandler.DealsModel[];
  

  constructor() {
    // AppConsts.appBaseUrl = '';
    // AppConsts.promotionPrefix = '';
    this.httpClient = SwaggerUtils.httpClient();
    makeAutoObservable(this, {
      promotionModel: observable,
    });
  }
  // -------------------------------------------------------- Common -------------------------------------------

  @action async mapWorkflowToDeals(data: promotionHandler.MapWorkflowDealsInput) {
    const mapWorkflowToDeals = await this.httpClient.api.commonMapWorkflowDealsCreate(data);
  }
  @action async mapDealsToPromotion(data: promotionHandler.MapPromotionDealsInput) {
    const mapDealsToPromotion = await this.httpClient.api.commonMapPromotionDealsCreate(data);
  }
  @action async removeDealsToPromotion(data: promotionHandler.MapPromotionDealsInput) {
    const RemoveDealsToPromotion = await this.httpClient.api.commonRemovePromotionDealsCreate(data);
  }
  @action async removeWorkflowToDeals(data: promotionHandler.MapPromotionDealsInput) {
    const removeWorkflowToDeals = await this.httpClient.api.commonRemoveWorkflowDealsCreate(data);
  }
// -------------------------------------------------------- Deals -------------------------------------------
@action async GetAllListDeals(data: {}) {
  const DelasGetAll = await this.httpClient.api.dealsGetAllCreate(data);
  runInAction(() => {
    this.DealsModel = (DelasGetAll.data.data as any).items;
  });
}

  // -------------------------------------------------------- Promotion -------------------------------------------
  @action async GetAllList(data: {}) {
    const promotion = await this.httpClient.api.promotionGetAllCreate(data);
    runInAction(() => {
      this.promotionModel = (promotion.data.data as any).items;
    });
  }
  @action async CreatePromotion(data: promotionHandler.CreatePromotionInput, query?: {}) {
    const createPromotion = await this.httpClient.api.promotionCreateCreate(data);
    this.GetAllList;
  }

  @action async getIdPromotion(id: any) {
    const detailPromotion = await this.httpClient.api.promotionGetDetail(id);
    runInAction(() => {
      this.promotionModelDetail = detailPromotion.data.data as any;
    });
  }

  @action async enablePromotion(id: any) {
    const enable = await this.httpClient.api.promotionEnablePromotionUpdate(id);
    runInAction(() => {
      this.updatePromotion = (enable.data as any);
    });
  }
  @action async disablePromotion(id: any) {
    const disable = await this.httpClient.api.promotionDisablePromotionUpdate(id);
    runInAction(() => {
      this.updatePromotion = (disable.data as any);
    });
  }
// -------------------------------------------------------- referenceType -------------------------------------------
  @action async getReferenceType() {
    const referenceType = await this.httpClient.api.commonGetReferenceTypeList();
    runInAction(() => {
      this.referenceTypeModel = referenceType.data.data as any;
    });
  }

  @action async getRewardconfiguration() {
    const getListReward = await this.httpClient.api.rewardConfigurationGetRewardTypeList();
    runInAction(() => {
      this.rewardTypeDto = getListReward.data.data as any;
    });
  }

// -------------------------------------------------------- Workflow -------------------------------------------

  @action async GetAllWorkflow(data: {}) {
    const GetWorkflow = await this.httpClient.api.workflowGetAllCreate(data);

    runInAction(() => {
      this.workflowModel = (GetWorkflow.data.data as any).items;
    });
  }
// -------------------------------------------------------- Reward -------------------------------------------
@action async GetAllListReward(data: string[]) {
  const Reward = await this.httpClient.api.rewardGetRewardsCreate(data);
  runInAction(() => {
    this.rewardModel = (Reward.data.data as any);
  });
}
}

export default PromotionStore;
