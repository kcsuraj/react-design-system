import React, { createContext, useContext, useState } from 'react';

/**
 * Describes the shape IContext
 *
 * @interface IDropdownContext
 */
interface IDropdownContext {
  // Controls the visibility of dropdown menu
  showMenu: boolean;
  // Toogles the flag showMenu
  toggleMenu: () => void;
}

const DropdownContext = createContext<IDropdownContext>({
  showMenu: false,
  toggleMenu: () => {
    // toggle action
  }
});

const useDropdownContext = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  /**
   * Toggle visiblity of menu
   *
   * @returns {void}
   * @memberof useProvideAuth
   */
  const toggleMenu = (): void => {
    setShowMenu((status) => !status);
  };

  return {
    showMenu,
    toggleMenu
  };
};

const DropdownContextProvider = ({ children }: any) => {
  const dropdownOptions = useDropdownContext();
  return <DropdownContext.Provider value={dropdownOptions}>{children}</DropdownContext.Provider>;
};

const useDropdown = () => {
  return useContext(DropdownContext);
};

export { DropdownContextProvider, useDropdown };
