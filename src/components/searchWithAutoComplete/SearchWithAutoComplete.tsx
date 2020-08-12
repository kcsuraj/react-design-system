import React, { FC, useState, ChangeEvent, useRef, KeyboardEvent } from 'react';
import { Scrollbar } from 'components';
import styled from 'styled-components';
import { useOutsideClick } from 'hooks';
import scrollIntoView from 'scroll-into-view-if-needed';

/**
 * Describes the shape of IIdentifer
 *
 * @interface IIdentifer
 */
export interface IIdentifer {
  /**
   * Label of identifier
   */
  label: string;
  /**
   * Unique identifier
   */
  id: string;
}

interface IProps {
  /**
   * Data for autocomplete options
   */
  data: IIdentifer[];
  /**
   * Callback fired on select an option
   */
  onSelectOption: (id: string) => void;
}

/**
 * Describes the shape refs of individual search result
 *
 * @interface IQueryResultRefs
 */
interface IQueryResultRefs {
  /**
   * Individual search result ref
   */
  [key: string]: HTMLDivElement;
}

const SearchWithAutoComplete: FC<IProps> = ({ data, onSelectOption }) => {
  const [query, setQuery] = useState<string>('');
  const [displaySelectOptions, setDisplaySelectOptions] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<number>(0);
  const [filteredOptions, setFilteredOptions] = useState<IIdentifer[] | null>(null);
  // Contains ref of individual entity option
  const queryResultRefs: IQueryResultRefs = {};

  const ref = useRef();

  /**
   * Handle on key down event in the search box to navigate through and/or select a dropdown option
   *
   * @param {KeyboardEvent<HTMLInputElement>} e
   * @returns {void}
   * @memberof KnowledgeMapEntityType
   */
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    // handle Enter Event
    if (e.keyCode === 13) {
      setDisplaySelectOptions(false);
      onSelectOption(data[activeOption].id);
    }

    // Handle Arrow Down Event
    else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      setActiveOption(activeOption - 1);
      if (queryResultRefs[activeOption - 1]) {
        scrollIntoView(queryResultRefs[activeOption - 1], { behavior: 'smooth', scrollMode: 'if-needed' });
      }
    }

    // Handle Arrow Up Event
    else if (e.keyCode === 40) {
      if (activeOption === data.length - 1) {
        return;
      }
      setActiveOption(activeOption + 1);
      if (queryResultRefs[activeOption + 1]) {
        scrollIntoView(queryResultRefs[activeOption + 1], { behavior: 'smooth', scrollMode: 'if-needed' });
      }
    }
  };

  /**
   * Handles query change in the search box
   *
   * @param {ChangeEvent<HTMLInputElement>} e
   * @returns {void}
   * @memberof SearchWithAutoComplete
   */
  const onQueryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setQuery(value);

    setFilteredOptions(data.filter((option) => option.label.toLowerCase().includes(value.toLowerCase())));

    if (!displaySelectOptions) {
      setDisplaySelectOptions(true);
    }
  };

  // Call hook passing in the ref and a function to call on outside click
  useOutsideClick(ref, () => setDisplaySelectOptions(false));

  return (
    <StyledSearchWithAutoComplete ref={ref as any}>
      <input type="search" onKeyDown={onKeyDown} onChange={onQueryChange} placeholder="Search" value={query} />

      {displaySelectOptions && filteredOptions && (
        <div className="select-options">
          <Scrollbar autoHide={false} style={{ maxHeight: '160px' }}>
            {!!filteredOptions.length ? (
              filteredOptions.map((value, index: number) => (
                <span
                  key={value.id}
                  className="select-option"
                  style={index === activeOption ? { fontWeight: 600 } : {}}
                  onClick={() => {
                    setDisplaySelectOptions(false);
                    onSelectOption(value.id);
                  }}
                >
                  {value.label}
                </span>
              ))
            ) : (
              <span className="no-match">No match found</span>
            )}
          </Scrollbar>
        </div>
      )}
    </StyledSearchWithAutoComplete>
  );
};

export default SearchWithAutoComplete;

const StyledSearchWithAutoComplete = styled.div`
  position: relative;
  .select-options {
    width: 100%;
    margin-top: 6px;
    background-color: ${(props) => props.theme.color.white};
    border-radius: 3px;
    box-shadow: 0 5px 1em -2.25px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
    padding: 12px 0 8px 0;
    position: absolute;
    z-index: 9;

    .select-option,
    .no-match {
      padding: 2px 8px;
    }
  }
`;
