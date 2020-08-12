/**
 * This is horizontal scrolling menu component for React. Menu component has adaptive width, just set width for parent container.
 *  Items width will be determined from css styles. For navigation you can use arrows, mouse wheel or just drag items.
 */

import React, { FC } from 'react';
import styled from 'styled-components';
import ScrollMenu from 'react-horizontal-scrolling-menu';

/**
 * Describe the interface of props received by IProps
 *
 * @interface IProps
 */
interface IProps {
  /**
   * Tab elements to render
   */
  tabItems: JSX.Element[];
}

const ScrollableTabs: FC<IProps> = ({ tabItems }) => {
  return (
    <StyledScrollMenu>
      <ScrollMenu
        alignCenter={false}
        hideArrows={true}
        data={tabItems}
        arrowLeft={<StyledArrow className="arrow-left">‹</StyledArrow>}
        arrowRight={<StyledArrow className="arrow-right">›</StyledArrow>}
      />
    </StyledScrollMenu>
  );
};

export default ScrollableTabs;

const StyledScrollMenu = styled.div`
  .scroll-menu-arrow--disabled {
    display: none;
  }

  .menu-item-wrapper:focus {
    outline: none;
  }
`;

const StyledArrow = styled.div`
  color: ${(props) => props.theme.color.grayLight};
  cursor: pointer;
  font-size: 28px;
`;
