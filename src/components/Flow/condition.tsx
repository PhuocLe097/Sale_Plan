
import { Avatar } from 'antd';
import Meta from 'antd/es/card/Meta';
import React, { useCallback } from 'react';

interface ConditionProps {
   
}

const Condition: React.FC<ConditionProps> = ({}) => {
    return  <Meta
    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
    title="Card title value"
    description={`This is the value of the card`}
  />
};