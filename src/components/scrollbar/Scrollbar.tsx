// Custom scrollbar implementation for overflowing contents
import React, { CSSProperties, FC, ReactNode } from 'react';
import SimpleBar from 'simplebar-react';
import styled, { css } from 'styled-components';

/**
 * Describes the shape props received by Scrollbar
 *
 * @interface IProps
 */
interface IProps {
  /**
   *
   * CSS properties
   */
  style: CSSProperties;
  /**
   *
   * Children elements to render in the container
   */
  children: ReactNode;
  /**
   *
   * Automatically hides the scrollbar if user is not scrolling. If true, scrollbar will always be visible
   */
  autoHide?: boolean;
}

const Scrollbar: FC<IProps> = ({ style, children, autoHide = true }) => {
  return (
    <StyledScrollbar autoHide={autoHide}>
      <SimpleBar autoHide={autoHide} style={style}>
        {children}
      </SimpleBar>
    </StyledScrollbar>
  );
};

export default Scrollbar;

const StyledScrollbar = styled.div<Pick<IProps, 'autoHide'>>`
  ${(props) =>
    !props.autoHide &&
    css`
      .simplebar-content-wrapper {
        /* Prevent scrollbar from overlapping content */
        padding-right: 10px;
      }
    `};

  .simplebar-track {
    .simplebar-scrollbar {
      width: 10px;
      &.simplebar-visible {
        &:before {
          background-color: ${(props) => props.theme.color.black};
          opacity: 0.28;
        }
      }
    }
  }
`;
