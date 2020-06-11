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
  onClick?: () => void;
}

const Item: FC<IProps> = ({ as: Component = 'span', onClick, ...rest }) => {
  const { toggleMenu } = useDropdown();

  const clickEventHandler = onClick ? onClick : toggleMenu;

  return <Component onClick={clickEventHandler} {...rest} className="dropdown-item" />;
};

export default Item;
