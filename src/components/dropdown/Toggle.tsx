/**
 * This compont toggles the visiblity of menu with list of optiona visible.
 * It provides title indicating what the dropdown is supposed to do
 */
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { useDropdown } from './Context';

/**
 * Describes the shape props received by Dropdown Item
 *
 * @interface IProps
 */
interface IProps {
  /**
   * Children rendered
   */
  children: ReactNode;
  /**
   * Custom classname adding CSS properties
   */
  className?: string;
}

const Toggle: FC<IProps> = ({ className, ...rest }) => {
  const { toggleMenu } = useDropdown();

  return <StyledToggle onClick={toggleMenu} className={className} {...rest} />;
};

export default Toggle;

const StyledToggle = styled.div`
  color: ${(props) => props.theme.color.grayLight};
  cursor: pointer;
  font-size: 14px;
  position: relative;

  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-left: 6px;
    border-style: solid;
    border-color: ${(props) => props.theme.color.grayLight} transparent transparent;
    border-width: 4px 4px 0;
  }
`;
