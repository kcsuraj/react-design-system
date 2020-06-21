/**
 * This component implements Dropdwon wrapper that holds the Menu, Toggle & Item Components
 * It also adds Context to the Dropdown so that child component can access the states and methods defined
 * in Dropdown Context
 */
import { useOutsideClick } from 'hooks';
import React, { FC, useRef, ReactNode } from 'react';
import styled from 'styled-components';
import { DropdownContextProvider, useDropdown } from './Context';
import Item from './Item';
import Menu from './Menu';
import Toggle from './Toggle';

/**
 * Describes the shape of props received by Dropdown Component
 *
 * @interface IWorkInProgress
 */
interface IDropdown {
  /**
   * Children passed to dropdown
   */
  children: ReactNode;
}

// Dropdown component that builds the entire Dropdown UI and contains Menu, Item & Toggle
const BaseDropdown: FC<IDropdown> = ({ children }) => {
  // Function to toggle showMenu flag that toggles visibility of dropdown menu
  const { showMenu, toggleMenu } = useDropdown();

  // Reference of dropdown wrapper markup
  const ref = useRef(null);

  // Call hook passing in the ref and a function to call on outside click
  useOutsideClick(ref, () => {
    if (showMenu) {
      toggleMenu();
    }
  });

  return (
    <StyledDropdown className="dropdown-menu" ref={ref}>
      {children}
    </StyledDropdown>
  );
};

/**
 * This compoennt contains Context Provider that holds the Dropdown component used to build
 * The Dropdown UI
 */
const DropdownComponent: FC<IDropdown> = ({ children }) => {
  return (
    <DropdownContextProvider>
      <BaseDropdown>{children}</BaseDropdown>
    </DropdownContextProvider>
  );
};

// Add Item, Menu & Toggle as static properties in DropdownComponent
// ? https://stackoverflow.com/questions/57712682/react-functional-component-static-property
/* tslint:disable:prefer-object-spread */
const Dropdown = Object.assign(DropdownComponent, {
  Item,
  Menu,
  Toggle
});

export default Dropdown;

// Styling for Dropdown Component
const StyledDropdown = styled.div`
  /* Components inside Dropdown will be positioned relative to this component */
  position: relative;
`;
