import Chip from '@blaze-react/chips';
import Input from '@blaze-react/input';
import React, { useMemo, useCallback } from 'react';
import { buildClassNames } from '@blaze-react/utils';

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
  const requiredClassName: string = useMemo(
    () => buildClassNames({ required }),
    [required]
  );

  const previewCount = useMemo(() => {
    const hasNumber =
      typeof checkedPreviewCount === 'number' && isFinite(Number(checkedPreviewCount));
    return hasNumber ? Math.max(0, Number(checkedPreviewCount)) : checkedItems.length;
  }, [checkedPreviewCount, checkedItems.length]);

  const visibleItems: ISelectedValue[] = useMemo(
    () => checkedItems.slice(0, previewCount),
    [checkedItems, previewCount]
  );

  const remaining = useMemo(
    () => Math.max(0, checkedItems.length - visibleItems.length),
    [checkedItems.length, visibleItems.length]
  );

  const moreLabelText = useMemo(
    () => formatMoreLabel(remaining),
    [formatMoreLabel, remaining]
  );

  const onDelete = useCallback(
    (id: string, name: string) => handleDelete({ id, name }),
    [handleDelete]
  );

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
          {visibleItems.map((selectedValue: ISelectedValue, index: number): JSX.Element => {
            const id = selectedValue[identification];
            const name = selectedValue[keyValue];
            // Use a stable key to avoid remounting chips on each render
            const chipKey = id ?? `${name}-${index}`;
            return (
              <Chip
                modifiers={[
                  Chip.availableModifiers.parent.deletable,
                  Chip.availableModifiers.parent.small,
                ]}
                onDelete={() => onDelete(id, name)}
                action={() => onDelete(id, name)}
                key={`checked-${chipKey}`}
              >
                <Chip.Label data-cy={`multiSelect-${label}-chip${index + 1}-label`}>
                  {getLabel({ label: name, isChip: true })}
                </Chip.Label>
                <Chip.Icon modifier={Chip.availableModifiers.icon.delete}>
                  <i className="material-icons">clear</i>
                </Chip.Icon>
              </Chip>
            );
          })}

          {remaining > 0 && (
            <span
              className="multiselect__more-counter"
              data-cy={`multiSelect-${label}-more-counter`}
              aria-label={moreLabelText}
            >
              {moreLabelText}
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
