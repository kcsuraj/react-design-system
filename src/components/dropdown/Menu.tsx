/**
 * This component implements dropdown menu that is visible when user clicks dropdown title or toggle link
 * It accepts list of options  as its children
 */
import React, { FC } from 'react';
import styled from 'styled-components';
import { useDropdown } from './Context';

/**
 * Describes the shape props received by Menu
 *
 * @interface IProps
 */
interface IProps {
  /**
   * Aligns the Dropdown menu to the right position
   */
  alignRight?: boolean;
  /**
   * Custom classname adding CSS properties
   */
  className?: string;
}

const Menu: FC<IProps> = ({ alignRight, className, ...rest }) => {
  // Flag holding dropdown menu visibility from Dropdown Context
  const { showMenu } = useDropdown();

  return (
    <StyledMenu alignRight={alignRight} className={showMenu ? 'menu visible' : 'menu'}>
      <div {...rest} />
    </StyledMenu>
  );
};

export default Menu;

// Styling for menu
const StyledMenu = styled.div<{ alignRight?: boolean }>`
  padding-top: 10px;
  position: relative;

  opacity: 0;
  position: absolute;
  top: 100%;
  transition: all 200ms ease-in;
  transform: translateY(-4px);
  visibility: hidden;

  /* Display dropdown when visible class exists */
  &.visible {
    opacity: 1;
    transform: translateY(-4px);

    visibility: visible;
  }

  > div {
    background-color: ${(props) => props.theme.color.white};
    border-radius: 4px;
    box-shadow: 0 5px 1em -1.25px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
    padding-bottom: 5px;
    padding-top: 5px;
    /* Position dropdown menu to right when alignRight set to true */
    ${(props) => (props.alignRight ? 'right: 0' : 'left: 0')};
  }
`;
