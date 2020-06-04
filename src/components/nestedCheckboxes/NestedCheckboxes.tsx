// CheckboxGroupes allow the user to select one or more items from a set.
import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'components';

/**
 * Describes the shape props received by NestedCheckboxes
 *
 * @interface IProps
 */
interface IProps {
  /**
   *
   * Data structure
   */
  data: any;

  /**
   *
   * Get result data with check status in event handler
   */
  onChange: (data: any) => void;
}

const NestedCheckboxes: FC<IProps> = ({ data, onChange }) => {
  const [filters, setFilters] = useState<any>(data);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  /**
   * Handle all sub items check
   *
   * @returns {void}
   * @memberof NestedCheckboxes
   */
  const handleAllChange = (): void => {
    const checkedItems = filters.items.map((value: any) => {
      return { ...value, checked: !isAllChecked };
    });

    const filteredData = { ...data, items: checkedItems };
    setFilters(filteredData);

    setIsAllChecked((checked) => !checked);

    onChange(filteredData);
  };

  /**
   * Handle nested item change
   *
   * @returns {void}
   * @memberof NestedCheckboxes
   */
  const handleItemChange = (id: number, checked: boolean): void => {
    const checkedItems = filters.items.map((value: any) => {
      if (id === value.id) {
        return { ...value, checked };
      }
      return value;
    });

    const isAllItemsChecked = checkedItems.every((val: any) => {
      return val.checked;
    });

    const filteredData = { ...data, checked: isAllItemsChecked, items: checkedItems };

    setIsAllChecked(isAllItemsChecked);
    setFilters(filteredData);
    onChange(filteredData);
  };

  return (
    <StyledNestedCheckboxes>
      <Checkbox label={filters.label} checked={isAllChecked} onChange={handleAllChange} />
      {!!filters.items.length &&
        filters.items.map((value: any) => (
          <div key={value.id} className="checkbox-items">
            <Checkbox
              label={value.label}
              checked={value.checked}
              onChange={(e) => handleItemChange(value.id, e.target.checked)}
            />
          </div>
        ))}
    </StyledNestedCheckboxes>
  );
};

export default NestedCheckboxes;

const StyledNestedCheckboxes = styled.label`
  label {
    margin-bottom: 8px;
  }

  .checkbox-items {
    margin-left: 24px;
  }
`;
