// Select components are used for collecting user provided information from a list of options.
import React, { FC } from 'react';
import { Item, Toggle, Menu, DropdownContextProvider } from './index';
import styled from 'styled-components';

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
  return (
    <DropdownContextProvider>
      <StyledDropdown {...props} />
    </DropdownContextProvider>
  );
};

// ? https://stackoverflow.com/questions/57712682/react-functional-component-static-property
/* tslint:disable:prefer-object-spread */
const Dropdown = Object.assign(DropdownComponent, { Item, Toggle, Menu });

export default Dropdown;

const StyledDropdown = styled.div`
  position: relative;
  .dropdown {
    &-menu-wrap {
      padding-top: 10px;
    }
    &-menu {
      background-color: ${(props) => props.theme.color.white};
      border-radius: 4px;
      box-shadow: 0 5px 1em -1.25px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
      padding-bottom: 5px;
      padding-top: 5px;
      opacity: 0;
      position: absolute;
      top: 100%;
      transition: all 200ms ease-in;
      transform: translateY(-4px);
      visibility: hidden;

      &.visible {
        opacity: 1;
        transform: translateY(-4px);

        visibility: visible;
      }
    }

    &-toggle {
      color: ${(props) => props.theme.color.grayDark};
      cursor: pointer;
      font-size: 14px;
      position: relative;
    }

    &-caret {
      border-style: solid;
      content: '';
      display: inline-block;
      margin-left: 6px;
      vertical-align: middle;
    }

    &-item {
      color: ${(props) => props.theme.color.grayDark};
      cursor: pointer;
      display: block;
      font-size: 14px;
      padding: 8px 12px;
      transition: all 100ms ease-in;
      white-space: nowrap;

      &:hover {
        background-color: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.white};
      }
    }
  }

  /* Reset anchor tag style */
  a {
    text-decoration: none;
  }
`;
