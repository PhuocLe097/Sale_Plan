import HandleExtensions from './handleExtensions';

class NoteTemplate {

  static DRANG_AND_DROP = 'ant-card-head';
  static valueY = 0;
  static valueX = 0;
  static positionX = () => {
    const value = this.valueX += 20;
    return value;
  };
  static positionY = () => {
    const value = this.valueY += 20;
    return value;
  };

  public static InputNode(): any {
    const id = `${HandleExtensions.generateId()}`;
    return {
      id: id,
      type: 'inputNode',
      dragHandle: `.${NoteTemplate.DRANG_AND_DROP}`,
      position: { x: this.positionX(), y: this.positionY() },
      data: { cart: null },
      draggable: true,
      index: HandleExtensions.generateId(),
    };
  }

  public static RuleNode(): any {
    const id = `${HandleExtensions.generateId()}`;
    return {
      id,
      type: 'ruleNode',
      dragHandle: `.${NoteTemplate.DRANG_AND_DROP}`,
      position: { x: this.positionX(), y: this.positionY() },
      data: {
        index: HandleExtensions.generateId(),
        ruleName: `Rule ${id}`,
        operator: '',
        ruleCost: 1,
        ruleType: '0',
      },
      draggable: true,
    };
  }

  public static ConditionNode(): any {
    const id = `${HandleExtensions.generateId()}`;
    return {
      id: id,
      type: 'conditionNode',
      dragHandle: `.${NoteTemplate.DRANG_AND_DROP}`,
      position: { x: this.positionX(), y: this.positionY() },
      data: { condition: '', index: HandleExtensions.generateId() },
      draggable: true,
      
    };
  }

  public static ActionNode(): any {
    const id = `${HandleExtensions.generateId()}`;

    return {
      id: id,
      type: 'actionNode',
      dragHandle: `.${NoteTemplate.DRANG_AND_DROP}`,
      position: { x: this.positionX(), y: this.positionY() },
      data: { name: null, context : null, index: HandleExtensions.generateId() },
      draggable: true,
      
    };
  }

}

export default NoteTemplate;
