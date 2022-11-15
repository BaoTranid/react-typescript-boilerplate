import React from 'react';
import '../../index.scss';

interface Props {
  children: any;
  isHide: boolean;
}

const MasterLayout = ({ children, isHide }: Props) => {
  if (isHide) {
    return children;
  }

  return <div>{children}</div>;
};

export default MasterLayout;
