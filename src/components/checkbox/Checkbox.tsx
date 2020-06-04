// Checkboxes allow the user to select one or more items from a set.
import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

/**
 * Describes the shape props received by Checkbox
 *
 * @interface IProps
 */
interface IProps {
  /**
   *
   * Label of checkbox
   */
  label?: string;
  /**
   *
   * Active status
   */
  checked: boolean;
  /**
   *
   * Invoke function on change event
   */
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<IProps> = ({ label, checked = false, onChange }) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" className="input" checked={checked} onChange={onChange} />
      <span className="checkmark" />
      {label && <span className="label">{label}</span>}
    </StyledCheckbox>
  );
};

export default Checkbox;

const StyledCheckbox = styled.label`
  cursor: pointer;
  display: block;
  position: relative;
  font-size: 14px;
  padding-left: 24px;

  .input {
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    z-index: 2;
    margin: 0;
    opacity: 0;
    outline: none;

    &:checked ~ .checkmark {
      background: ${(props) => props.theme.color.primary};
      &:before {
        transform: translate(-50%, -50%) rotate(-45deg);
        opacity: 1;
        transition: all 0.3s ease;
      }
    }
  }

  .checkmark {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: 2px solid ${(props) => props.theme.color.primary};
    border-radius: 2px;
    top: 0;
    left: 0;
    position: absolute;

    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 45%;
      transform: translate(-50%, -50%) rotate(-45deg);
      width: 80%;
      height: 50%;
      background: transparent;
      border-left: 2px solid ${(props) => props.theme.color.white};
      border-bottom: 2px solid ${(props) => props.theme.color.white};
      opacity: 0;
      transition: all 0.3s ease-out;
    }
  }

  .label {
    line-height: 16px;
  }
`;
