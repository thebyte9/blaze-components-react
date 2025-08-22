import Chip from '@blaze-react/chips';
import Input from '@blaze-react/input';
import React from 'react';
import { buildClassNames } from '@blaze-react/utils';
import { nanoid } from 'nanoid';

interface ISelectedValue {
  [index: string]: string;
}

const MultiSelectBar = ({
  attrs,
  checkedItems,
  checkedPreviewCount,
  formatMoreLabel = (n: number) => `${n} more`,
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

  const hasNumber = typeof checkedPreviewCount === 'number' && isFinite(checkedPreviewCount);
  const previewCount = hasNumber ? Math.max(0, Number(checkedPreviewCount)) : checkedItems.length;
  const visibleItems = checkedItems.slice(0, previewCount);
  const remaining = Math.max(0, checkedItems.length - visibleItems.length);

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
          {visibleItems.map((selectedValue: ISelectedValue, index: number): JSX.Element => (
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
              key={`checked-${nanoid()}-${index}`}
            >
              <Chip.Label data-cy={`multiSelect-${label}-chip${index + 1}-label`}>
                {getLabel({ label: selectedValue[keyValue], isChip: true })}
              </Chip.Label>
              <Chip.Icon modifier={Chip.availableModifiers.icon.delete}>
                <i className="material-icons">clear</i>
              </Chip.Icon>
            </Chip>
          ))}

          {remaining > 0 && (
            <span
              className="multiselect__more-counter"
              data-cy={`multiSelect-${label}-more-counter`}
              aria-label={formatMoreLabel(remaining)}
            >
              {formatMoreLabel(remaining)}
            </span>
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