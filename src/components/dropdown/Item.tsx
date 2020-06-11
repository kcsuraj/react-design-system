// Select components are used for collecting user provided information from a list of options.
import React, { FC, ElementType } from 'react';
import { useDropdown } from './index';

/**
 * Describes the shape props received by Dropdown Item
 *
 * @interface IProps
 */
interface IProps {
  // HTML tag type
  as?: ElementType;
  // Click event handler
  onClick?: (value: object) => string;
}

const Item: FC<IProps> = ({ as: Component = 'span', onClick, ...rest }) => {
  const { toggleMenu } = useDropdown();

  return <Component onClick={toggleMenu} {...rest} className="dropdown-item" />;
};

export default Item;
