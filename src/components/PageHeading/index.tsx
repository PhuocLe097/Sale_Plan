import React from 'react';
import './index.css';

interface headingProps {
  content: string | undefined;
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
}

const Heading: React.FC<headingProps> = ({ content, className, style }) => {
  return (
    <div className={'wrapped'} style={style}>
      <div className="outer">
        <div className="inner">{content}</div>
      </div>
    </div>
  );
};

export default Heading;
