// Select components are used for collecting user provided information from a list of options.
import React, { FC } from 'react';
import { Item, Toggle, Menu } from './index';

/**
 * Describes the shape of props received by Dropdown
 *
 * @interface IProps
 */
export interface IProps {
  // Custom class name
  className?: string;
}

const DropdownComponent: FC<IProps> = (props) => {
  return <div {...props} />;
};

// ? https://stackoverflow.com/questions/57712682/react-functional-component-static-property
/* tslint:disable:prefer-object-spread */
const Dropdown = Object.assign(DropdownComponent, { Item, Toggle, Menu });

export default Dropdown;
