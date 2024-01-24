import React from "react";
import { Connection, Handle, Position } from "reactflow";

interface HandleProps {
  id: string;
  type:  'source' | 'target';
  position: Position;
  element?: any;
}

const CustomHandle: React.FC<HandleProps> = (props) => {
  
  const isValidConnection = (connection: Connection) => {
    

    return true;
  }


  return <Handle id={props.id} type={props.type} position={props.position} isValidConnection={isValidConnection}>
      {props.element}
  </Handle>

}

export default CustomHandle;