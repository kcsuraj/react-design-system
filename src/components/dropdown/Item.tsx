// Select components are used for collecting user provided information from a list of options.
import React, { FC, ElementType } from 'react';

/**
 * Describes the shape props received by Dropdown Item
 *
 * @interface IProps
 */
interface IProps {
  // HTML tag type
  as: ElementType;
}

const Item: FC<IProps> = ({ as: Component = 'span', ...rest }) => {
  return <Component {...rest} />;
};

export default Item;
