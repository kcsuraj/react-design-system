/**
 * Implements context to pass data through the Dropdown component tree without
 * having to pass props down manually at every level
 */

import React, { createContext, useContext, useState } from 'react';

/**
 * Describes the shape IDropdownContext
 *
 * @interface IDropdownContext
 */
interface IDropdownContext {
  // Controls the visibility of dropdown menu
  showMenu: boolean;

  // Toogles the flag showMenu
  toggleMenu: () => void;
}

// Create Dropdown Context
const DropdownContext = createContext<IDropdownContext>({
  showMenu: false,
  toggleMenu: () => {
    // toggle menu
  }
});

// Provides mechanism to use the data defined in the context
const useDropdownContext = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  /**
   * Toggle visiblity of menu
   *
   * @returns {void}
   * @memberof useDropdownContext
   */
  const toggleMenu = (): void => {
    setShowMenu((status) => !status);
  };

  return {
    showMenu,
    toggleMenu
  };
};

// Dropdown Context Provider to be used to wrap the Dropdown component that uses the states and methods
const DropdownContextProvider = ({ children }: any) => {
  const dropdownOptions = useDropdownContext();
  return <DropdownContext.Provider value={dropdownOptions}>{children}</DropdownContext.Provider>;
};

// Get states and methods defined in Dropdown Context
const useDropdown = () => {
  return useContext(DropdownContext);
};

export { DropdownContextProvider, useDropdown };
