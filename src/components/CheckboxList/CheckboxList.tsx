import * as React from 'react';
import classNames from 'classnames';

interface ICheckboxList {
  children?: React.ReactNode;
  className?: string;
}

const CheckboxList: React.FC<ICheckboxList> = ({ children, className }) => {
  return (
    <div className={classNames('checkbox-list', className)}>

    </div>
  );
};

export default CheckboxList;

