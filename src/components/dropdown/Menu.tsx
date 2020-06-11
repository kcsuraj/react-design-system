// Select components are used for collecting user provided information from a list of options.
import React, { FC, ReactNode } from 'react';
import { useDropdown, Item } from './index';

/**
 * Describes Dropdown option
 *
 * @interface IOption
 */
export interface IOption {
  // option identifier
  id: string;
  // Dropdown item label to display
  label: string;
}

/**
 * Describes the shape of props received by Dropdown
 *
 * @interface IProps
 */
export interface IProps {
  // list of options to render
  options: IOption[];
}

const Menu: FC<any> = (props) => {
  const { showMenu, handleSelectedOption } = useDropdown();

  const { options } = props;

  const appliedClassName = showMenu ? 'dropdown-menu visible' : 'dropdown-menu';

  const renderWithOptions = (): ReactNode => {
    return (
      <div className={appliedClassName}>
        {options.map((option: IOption, index: number) => (
          <Item key={index} onClick={() => handleSelectedOption(option.label)}>
            {option.label}
          </Item>
        ))}
      </div>
    );
  };

  const customMenu = (): ReactNode => <div {...props} className={appliedClassName} />;

  return <div className="dropdown-menu-wrap">{props.options ? renderWithOptions() : customMenu()}</div>;
};

export default Menu;
