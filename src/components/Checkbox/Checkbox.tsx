import * as React from 'react';
import { useState } from 'react';
import { FaCheck, FaMinus } from 'react-icons/fa';
import classNames from 'classnames';
import './_checkbox.scss';

interface ICheckbox {
  id: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  label?: string;
  labelPlacement?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<ICheckbox> = ({
  id,
  className,
  checked = false,
  defaultChecked,
  indeterminate = false,
  label,
  labelPlacement,
  ...props
}) => {
  return (
    <label className={classNames('checkbox', className)} htmlFor={id}>
      <input type="checkbox" id={id} {...props} />
      <span className="checkbox__box">
        {checked && <FaCheck />}
        {!checked && indeterminate && <FaMinus />}
      </span>
      <span className="checkbox__label">My label</span>
    </label>
  );
};

export default Checkbox;
