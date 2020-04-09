import React from 'react'
import Chip from "@blaze-react/chips";
import Input from "@blaze-react/input";
import withUtils from "@blaze-react/utils";

const MultiSelectBar = ({
  required,
  label,
  attrs,
  checkedItems,
  handleClearAll,
  handleDelete,
  identification,
  uniqueId,
  keyValue,
  searchValue,
  placeholder,
  handleInputChange,
  handleKeyDown,
  handleFocus,
  getLabel,
  utils: { classNames },
}: any) => {
  const requiredClassName: string = classNames({ required });

  return (
    <>
      <div className="chip__wrapper">
        <label htmlFor={attrs.id} className={requiredClassName}>
          {label}
        </label>
        {!!checkedItems.length && (
          <span
            data-cy={`multiSelect-${label}-clearAll-button`}
            className="chip__wrapper__clear"
            onClick={handleClearAll}
          >
            Clear all
          </span>
        )}
      </div>
      <div className="multiselect__input__container">
        <div className="multiselect__input__container__chips">
          {checkedItems.map(
            (selectedValue: object, index: number): JSX.Element => (
              <Chip
                modifiers={[
                  Chip.availableModifiers.parent.deletable,
                  Chip.availableModifiers.parent.small
                ]}
                onDelete={() => handleDelete(selectedValue[identification])}
                action={() => handleDelete(selectedValue[identification])}
                key={uniqueId(selectedValue)}
              >
                <Chip.Label
                  data-cy={`multiSelect-${label}-chip${index + 1}-label`}
                >
                  {getLabel({ label: selectedValue[keyValue], isChip: true })}
                </Chip.Label>
                <Chip.Icon
                  data-cy={`multiSelect-${label}-chip${index + 1}-icon`}
                  modifier={Chip.availableModifiers.icon.delete}
                >
                  <i className="material-icons">clear</i>
                </Chip.Icon>
              </Chip>
            )
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
  )
}

export default withUtils(MultiSelectBar);