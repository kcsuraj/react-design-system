// Select components are used for collecting user provided information from a list of options.
import React, { FC } from 'react';
import { useDropdown } from './index';

const Menu: FC<any> = (props) => {
  const { showMenu } = useDropdown();

  return (
    <div className="dropdown-menu-wrap">
      <div {...props} className={showMenu ? 'dropdown-menu visible' : 'dropdown-menu'} />
    </div>
  );
};

export default Menu;
