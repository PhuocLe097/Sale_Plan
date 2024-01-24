import { NodeTypes } from "reactflow";
import RuleNodeType from './nodes/ruleNodeType';
import ConditionNodeType from "./nodes/conditionNodeType";
import InputNodeType from "./nodes/inputNodeType";
import ActionNodeType from "./nodes/actionNodeType";
export default class FlowType {
    static nodeTypes: NodeTypes = {
        ruleNode: RuleNodeType,
        conditionNode: ConditionNodeType,
        inputNode: InputNodeType,
        actionNode: ActionNodeType
    };
}