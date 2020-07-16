/**
 * Implements priority navigation with menu items hidden in dropdown when overflow
 * Ref: https://codepen.io/zammer/pen/pbxJdo
 */
import React, { FC, useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useOutsideClick } from 'hooks';

interface INavItem {
  label: string;
  id: string;
}
/**
 * Shape of props received by IProps
 */
interface IProps {
  navItems: INavItem[];
}

const PriorityNav: FC<IProps> = ({ navItems }) => {
  const [priorityItems, setPriorityNavs] = useState<any[]>(navItems);
  const [moreItems, setMoreItems] = useState<any[]>([]);
  const [displayPriorityNav, setDisplayPriorityNav] = useState<boolean>(false);

  const outerNavigationRef = useRef<HTMLDivElement>();
  const navigationRef = useRef<HTMLDivElement>();
  const moreMenuRef = useRef<HTMLUListElement>();

  // Call hook passing in the ref and a function to call on outside click
  useOutsideClick(moreMenuRef, () => setDisplayPriorityNav(false));

  const updateNavigation = useCallback(
    (widthsArray: number[]) => {
      if (outerNavigationRef.current) {
        const outerNavigationWidth = outerNavigationRef.current.getBoundingClientRect().width;
        const moreMenu = moreMenuRef.current ? moreMenuRef.current.getBoundingClientRect().width : 0;
        const arrayAmount = howManyItemsInMenuArray(widthsArray, outerNavigationWidth, moreMenu, 5);

        setPriorityNavs(navItems.slice(0, arrayAmount));
        setMoreItems(priorityItems.length !== navItems.length ? navItems.slice(arrayAmount, navItems.length) : []);
      }
    },
    [navItems, priorityItems.length]
  );

  useEffect(() => {
    if (navigationRef.current) {
      const widthsArray = Array.from(navigationRef.current.children).map((item: any) => {
        return item.getBoundingClientRect().width;
      });
      updateNavigation(widthsArray);
    }
  }, [updateNavigation]);

  const howManyItemsInMenuArray = (
    widthsArray: number[],
    outerWidth: number,
    initialWidth: number,
    minimumNumberInNav: number
  ) => {
    let total = initialWidth;

    for (let i = 0; i < widthsArray.length; i++) {
      if (total + widthsArray[i] > outerWidth) {
        return i < minimumNumberInNav ? minimumNumberInNav : i;
      } else {
        total += widthsArray[i];
      }
    }
  };

  const handleMoreItemsDisplay = () => {
    // setDisplayPriorityNav((value) => !value);
  };

  return (
    <StyledPriorityNav ref={outerNavigationRef as any}>
      <ul ref={navigationRef as any} className="navigation-list">
        {priorityItems.map((item) => (
          <li key={item.id} className="navigation-item">
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      {!!moreItems.length && (
        <ul ref={moreMenuRef as any} className="navigation-list-absolute">
          <li className="navigation-item more-item">
            <span onClick={handleMoreItemsDisplay}>More</span>
            {displayPriorityNav && (
              <ul className="more-navigation">
                {moreItems.map((item) => (
                  <li className="navigation-item" key={item.id}>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      )}
    </StyledPriorityNav>
  );
};

export default PriorityNav;

const StyledPriorityNav = styled.nav`
  height: 85px;
  width: 100%;
  white-space: nowrap;
  position: relative;

  .navigation-list {
    list-style: none;
    display: inline-block;
  }

  .navigation-list-absolute {
    background-color: ${(props) => props.theme.color.white};
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-block;
  }

  .navigation-item {
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }

  .more-navigation {
    display: block;
    position: absolute;
    top: 35px;
    right: 0;
    padding: 0;
    margin: 0;
    list-style: none;
    min-height: 20px;
    box-shadow: 3px 5px 11px -1px rgba(0, 0, 0, 0.1);

    .navigation-item {
      display: block;
      border-bottom: 1px solid #eee;
    }
  }

  .navigation-link:hover > .more-navigation {
    display: block;
  }

  .more-item {
    position: relative;
  }
`;
