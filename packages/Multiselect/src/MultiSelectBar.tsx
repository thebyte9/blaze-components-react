import Chip from '../../Chips/src';
import Input from '../../Input/src';
import React from 'react';
import buildClassNames from '../../Utils/src/buildClassNames';
import { v4 as uuidv4 } from 'uuid';

interface ISelectedValue {
  [index: string]: string;
}

const MultiSelectBar = ({
  attrs,
  checkedItems,
  getLabel,
  handleClearAll,
  handleDelete,
  handleFocus,
  handleInputChange,
  handleKeyDown,
  identification,
  keyValue,
  label,
  placeholder,
  required,
  searchValue,
}: any) => {
  const requiredClassName: string = buildClassNames({ required });

  return (
    <>
      <div className="chip__wrapper">
        <label htmlFor={attrs.id} className={requiredClassName}>
          {label}
        </label>
        {!!checkedItems.length && (
          <span className="chip__wrapper__clear" onClick={handleClearAll}>
            Clear all
          </span>
        )}
      </div>
      <div className="multiselect__input__container">
        <div className="multiselect__input__container__chips">
          {checkedItems.map(
            (selectedValue: ISelectedValue, index: number): JSX.Element => (
              <Chip
                modifiers={[Chip.availableModifiers.parent.deletable, Chip.availableModifiers.parent.small]}
                onDelete={() =>
                  handleDelete({
                    id: selectedValue[identification],
                    name: selectedValue[keyValue],
                  })
                }
                action={() =>
                  handleDelete({
                    id: selectedValue[identification],
                    name: selectedValue[keyValue],
                  })
                }
                key={`checked-${index}`}
              >
                <Chip.Label data-cy={`multiSelect-${label}-chip${index + 1}-label`}>
                  {getLabel({ label: selectedValue[keyValue], isChip: true })}
                </Chip.Label>
                <Chip.Icon modifier={Chip.availableModifiers.icon.delete}>
                  <i className="material-icons">clear</i>
                </Chip.Icon>
              </Chip>
            ),
          )}
          <Input
            value={searchValue}
            placeholder={placeholder}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            {...attrs}
          />
        </div>
      </div>
    </>
  );
};

export default MultiSelectBar;
