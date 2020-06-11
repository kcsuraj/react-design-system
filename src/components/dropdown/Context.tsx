import React, { createContext, useContext, useState } from 'react';

/**
 * Describes the shape IContext
 *
 * @interface IDropdownContext
 */
interface IDropdownContext {
  // Controls the visibility of dropdown menu
  showMenu: boolean;

  // Selection option label
  selectedOption?: string;

  // Toogles the flag showMenu
  toggleMenu: () => void;

  // Set selected option handler
  handleSelectedOption: (optionLabel: string) => void;
}

const DropdownContext = createContext<IDropdownContext>({
  showMenu: false,
  selectedOption: '',
  toggleMenu: () => {
    // toggle action
  },
  handleSelectedOption: (optionLabel: string) => {
    // toggle action
  }
});

const useDropdownContext = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  /**
   * Toggle visiblity of menu
   *
   * @returns {void}
   * @memberof useDropdownContext
   */
  const toggleMenu = (): void => {
    setShowMenu((status) => !status);
  };

  /**
   * Set selection option rendered in dropdown item
   *
   * @returns {void}
   * @memberof useDropdownContext
   */
  const handleSelectedOption = (optionLabel: string): void => {
    toggleMenu();
    setSelectedOption(optionLabel);
  };

  return {
    handleSelectedOption,
    selectedOption,
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
