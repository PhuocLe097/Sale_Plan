import { action, makeAutoObservable, makeObservable, observable, runInAction } from 'mobx';
import AppConsts from '../lib/appconst';
import { NodeTypes } from 'reactflow';
import { addLocalStorage } from '../lib/abpUtility';
import HandleExtensions from '../components/Flow/handleExtensions';
import SwaggerUtils from '../services/swaggerUtils';
import * as promotionHandler from '../services/promotionHandler/promotionHandler';
export interface RecordType {
  key: string;
  title: string;
  description: string;
  chosen: boolean;
}

class FlowTypeStore {  
  httpClient: promotionHandler.Api<any>;
  @observable workflowInfo: string = '';
  @observable workflows!: promotionHandler.WorkflowModelPagedResultDto;
  @observable deals!: promotionHandler.DealsModel[];
  @observable workflow: promotionHandler.WorkflowModel = {} as promotionHandler.WorkflowModel;
  @observable evaluateDealsModel!: promotionHandler.EvaluateDealsModel;

  constructor() {
    this.httpClient = SwaggerUtils.httpClient(AppConsts.promotionPrefix)
    makeAutoObservable(this, {

      evaluateDealsModel: observable,
    });
  }
  @action CreateWorkflow() {
    this.workflow = {
      description: '',
      dealsCode: [],
      rawData: '{}',
    };
  }


  @action setWorkflowInfo = (workflowInfo: string) => {
    this.workflowInfo = workflowInfo;
  };

  @action clearWorkflowInfo = () => {
    this.workflowInfo = '';
  };

  @action getWorkflow = async (data: promotionHandler.PagedWorkflowResultRequestInput) => {
    var result = await this.httpClient.api.workflowGetAllCreate(data);

    if (result?.data?.data) {
      this.workflows = result.data.data as any;
    }
  };

  @action getAllDeals = async (data: promotionHandler.PagedDealsRequestInput) => {
    var result = await this.httpClient.api.dealsGetAllCreate(data);
    if (result?.data?.data) {
      runInAction(() => {
        this.deals = result.data.data?.items as any;
      });
    }
  };

  @action getWorkflowById = async (id: number) => {
    var result = await this.httpClient.api.workflowGetCreate(id);
    if (result?.data) {
      runInAction(() => {
        this.workflow = result.data.data as any;
      });
    }
    return result.data.data;
  };

  @action createWorkflowAsync = async (data: promotionHandler.CreateWorkflowInput) => {
    var result = await this.httpClient.api.workflowCreateCreate(data);
  };

  @action updateRawData = async (data: promotionHandler.UpdateRawDataInput) => {
    
    var result = await this.httpClient.api.workflowUpdateRawDataCreate(data);

  };

  @action deleteWorkflow = async (id: number) => {
    var result = await this.httpClient.api.workflowDeleteDelete(id);
  };

  @action runWorkflowAsync = async (data: promotionHandler.JRulesEngine) => {
    try {
      var result = await this.httpClient.api.commonConnectTestRulesEngineCreate(data);
      return result?.data?.data!;
    } catch {
      return null;
    }
  };

  @action activeWorkflow = async (data: promotionHandler.JRulesEngine) => {
    try {
      var result = await this.httpClient.api.workflowActiveWorkflowCreate(data);
      return result?.data?.data!;
    } catch {
      return null;
    }
  };

  @action updateWorkflowAsync = async (data: promotionHandler.UpdateWorkflowDto) => {
    var result = await this.httpClient.api.workflowUpdateUpdate(data);
  };

}

export default FlowTypeStore;
