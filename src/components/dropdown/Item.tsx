/**
 * This component implements individual option that user can select from list of options
 * It is contained in Menu component
 */
import React, { FC } from 'react';
import styled from 'styled-components';
import { useDropdown } from './Context';

/**
 * Describes the shape props received by Dropdown Item
 *
 * @interface IProps
 */
interface IProps {
  /**
   * Callback fired when the menu item is clicked
   */
  onClick?: () => void;
  /**
   * Custom classname adding CSS properties
   */
  className?: string;
}

const Item: FC<IProps> = ({ onClick, className, ...props }) => {
  const { toggleMenu } = useDropdown();

  /**
   * Handle option click event
   *
   * @async
   * @return {void}
   */
  const selectItem = (): void => {
    // Toggles visibility of dropdown to false value
    toggleMenu();

    // Callback event triggered to parent component on click
    if (onClick) {
      onClick();
    }
  };

  return <StyledItem onClick={selectItem} {...props} />;
};

export default Item;

// Styling for Item component
const StyledItem = styled.div`
  color: ${(props) => props.theme.color.grayLight};
  cursor: pointer;
  display: block;
  font-size: 14px;
  padding: 8px 12px;
  transition: all 100ms ease-in;
  white-space: nowrap;

  /* Highlight option on hover */
  &:hover {
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.white};
  }
`;
