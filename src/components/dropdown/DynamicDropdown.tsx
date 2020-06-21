import React, { FC, Fragment, useState, useEffect } from 'react';
import { Dropdown } from 'components';
import styled from 'styled-components';

interface IOption {
  /**
   * Unique identifier of option
   */
  key: string;
  /**
   * Label of option
   */
  label: string;
}

/**
 * Describes the shape of props received by IProps
 *
 * @interface IProps
 */
interface IProps {
  /**
   * List of opens user can select
   */
  data: IOption[];
  /**
   * Label of dropdown menu
   */
  label: string;
  /**
   * Callback fired when option is selected
   */
  onSelectOption: (option: IOption) => void;
}

const DynamicDropdown: FC<IProps> = ({ label, data, onSelectOption }) => {
  //   State to hold selected option
  const [selectedOption, setSelectedOption] = useState<IOption>({ key: '', label: '' });

  //   Set first item of data as selected option on component mount
  useEffect(() => {
    if (data.length) {
      setSelectedOption(data[0]);
    }
  }, [data]);

  /**
   * Handle option selection from list of options
   * @param { IOption } option
   * @returns {void}
   * @memberof DynamicDropdown
   */
  const onItemSelect = (option: IOption): void => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>
        {label} {selectedOption.label}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {!!data.length ? (
          <Fragment>
            {data.map((value) => (
              <Dropdown.Item onClick={() => onItemSelect(value)} key={value.key}>
                {value.label}
              </Dropdown.Item>
            ))}
          </Fragment>
        ) : (
          <StyledNoDataText>No data found</StyledNoDataText>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DynamicDropdown;

// Spacing in No data found text
const StyledNoDataText = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.color.grayDark}
  padding: 12px;
`;
