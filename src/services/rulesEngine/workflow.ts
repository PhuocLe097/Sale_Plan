import { Input } from "antd";

export interface Workflow {
  WorkflowName: string;
  Rules: Rule[];
  Id?: number;
}

export interface RulesEngine {
  Workflow : Workflow;
  Cart: any;
}

export interface Rule {
  RuleName: string;
  SuccessEvent?: string;
  ErrorMessage?: string;
  ErrorType?: string;
  RuleExpressionType: string;
  Expression: string;
  Operator?: string;
  Rules?: Rule[];
  Actions?: Actions;
  RuleType?: number;
  RuleCost?: number | 0;
}

export interface Actions {
  OnSuccess: OnAction;
  OnFailure: OnAction;
}

export interface OnAction {
  Name: string;
  Context: {
    [key: string]: string;
  };
}