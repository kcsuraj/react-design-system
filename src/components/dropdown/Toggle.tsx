// Select components are used for collecting user provided information from a list of options.
import React, { FC, ElementType, Fragment } from 'react';
import { useDropdown } from './index';

/**
 * Describes the shape props received by Dropdown Item
 *
 * @interface IProps
 */
interface IProps {
  // HTML tag type
  as: ElementType;
}

const Toggle: FC<IProps> = ({ as: Component = 'span', ...rest }) => {
  const { showMenu, toggleMenu, selectedOption } = useDropdown();

  return (
    <Fragment>
      {selectedOption ? (
        <span onClick={toggleMenu} className="dropdown-toggle">
          {selectedOption}
        </span>
      ) : (
        <Component onClick={toggleMenu} {...rest} className="dropdown-toggle" />
      )}

      <span
        className="dropdown-caret"
        style={
          showMenu
            ? { borderColor: 'transparent transparent #333', borderWidth: '0 4px 4px' }
            : {
                borderColor: '#333 transparent transparent',
                borderWidth: '4px 4px 0'
              }
        }
      />
    </Fragment>
  );
};

export default Toggle;
