import { Connection } from 'reactflow';

declare var abp: any;
class HandleExtensions {
  static NUMBER_COUNTER = 0;
  static numberCounter_key = 'NUMBER_COUNTER';
  static flow_key = 'flow';

  static generateId = (() => {
    const cookieValue = abp.utils.getCookieValue(this.numberCounter_key) ?? 0;
    this.NUMBER_COUNTER = Number(cookieValue);
    return () => {
      this.NUMBER_COUNTER += 1;
      abp.utils.setCookieValue(
        this.numberCounter_key,
        this.NUMBER_COUNTER,
        new Date(new Date().getTime() + 5 * 365 * 86400000),
        abp.appPath,
        abp.domain
      );
      return this.NUMBER_COUNTER;
    };
  })();

  static prefixRule = 'rule';
  static prefixCondition = 'condition';
  static prefixInput = 'input';
  static prefixAction = 'action';

  static isValidConnection = (connection: Connection) => {
    const sourceHandle = connection.sourceHandle?.split('-')[0];
    const targetHandle = connection.targetHandle?.split('-')[0];
    
    if (sourceHandle === targetHandle && connection.source != connection.target) {
      console.table(['sourceHandle === targetHandle && connection.source != connection.target', sourceHandle, targetHandle]);
      return true;
    }

    if (sourceHandle == HandleExtensions.prefixInput && targetHandle == HandleExtensions.prefixRule) 
    {
      console.log('sourceHandle == HandleExtensions.prefixInput && targetHandle == HandleExtensions.prefixRule');
      return true;
    }
    
    // if(sourceHandle == HandleExtensions.prefixRule && targetHandle == HandleExtensions.prefixAction){
    //   console.log('sourceHandle == HandleExtensions.prefixRule && targetHandle == HandleExtensions.prefixAction');
    //   return true;
    // }

    return false;
  };

  static onDragEnd: React.DragEventHandler = (event) => {
    console.log('Drag ended', event);
  };
}
export default HandleExtensions;
