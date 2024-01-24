import { Workflow, Rule, Actions, RulesEngine } from "../../services/rulesEngine/workflow";

export function getHandleName(connection: string) {
  return connection?.split('-')[0];
};

function buildRule(nodes: any, edges: any, masterNode: any, autoName = true) {
  let Rules: Rule = {} as Rule;
  if(autoName){
    Rules.RuleName = masterNode.data.ruleName;
  }
  
  Rules.RuleExpressionType = 'LambdaExpression';
  Rules.Operator = masterNode.data.operator;
  Rules.RuleType = masterNode.data.ruleType;
  Rules.RuleCost = masterNode.data.ruleCost;
  Rules.SuccessEvent = masterNode.data.successEvent;
  // Get a node action
  const actionNode = edges.filter((edge: any) => edge.source === masterNode.id)
    .map((edge: any) => nodes.find((node: any) => node.id === edge.target && node.type === 'actionNode')).filter((node: any) => node !== undefined)[0];
  if (actionNode !== undefined) {
    const action = {
      OnSuccess: {
        Name: actionNode.data.name,
        Context: actionNode.data.context
      }
    }
    Rules.Actions = action as Actions;
  }

  // Get a node condition
  const conditionNode = edges.filter((edge: any) => edge.source === masterNode.id)
    .map((edge: any) => nodes.find((node: any) => node.id === edge.target && node.type === 'conditionNode')).filter((node: any) => node !== undefined)[0];
  
    if (conditionNode !== undefined) {
    Rules.Expression = conditionNode.data.condition??'';
  }

  // if (Rules.Expression == null){
  //   throw new Error("Expression is null");
  // }
 
  // Get a node rule
  const ruleNode = edges.filter((edge: any) => edge.source === masterNode.id)
    .map((edge: any) => nodes.find((node: any) => node.id === edge.target && node.type === 'ruleNode')).filter((node: any) => node !== undefined);

  if (ruleNode.length > 0) {
    Rules.Rules = [];
    ruleNode.forEach((node: any) => {
      Rules.Rules?.push(buildRule(nodes, edges, node, autoName));
    });
  }
  return Rules;
}

///data is the data from the flow
export function* handleFlowData(nodes: any, edges: any, autoName = true)  {
  var rulesEngine: RulesEngine = {} as RulesEngine;
  rulesEngine.Workflow = {} as Workflow;
  if(autoName){
    rulesEngine.Workflow.WorkflowName = "Workflow";
  }
  
  //I need one cart in the flow
  const carts = nodes.filter((node: any) => node.type === "inputNode");
  if (carts.length > 1) {
    yield "There can only be one cart in the flow";
  } else {
    const currentCart = carts[0];
    const masterRule = edges.filter((edge: any) => edge.source === currentCart.id).map((edge: any) => nodes.find((node: any) => node.id === edge.target))[0];
    if (masterRule == undefined) {
      yield "There must be a rule after the cart";
    } else {
      var rules = buildRule(nodes, edges, masterRule, autoName);
      rulesEngine.Workflow.Rules = [rules];
      rulesEngine.Cart = currentCart.data.cart;
    }
  }

  return rulesEngine;
}

export function changeRuleName(nodes: any, edges: any, ruleId: string, newName: string) {
  const ruleNode = nodes.find((node: any) => node.id === ruleId);
  if (ruleNode !== undefined) {
    ruleNode.data.ruleName = newName;
  }
}