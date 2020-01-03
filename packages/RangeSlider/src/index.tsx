import WithUtils from "@blaze-react/utils";
import React, { useState } from "react";
import InputRange from 'react-input-range';

interface IRange {
  max: number;
  min: number;
}

interface IRangeSliderProps {
  allowSameValues?: boolean;
  disabled?: boolean;
  draggableTrack?: boolean;
  maxValue?: number;
  minValue?: number;
  name?: string;
  onChange?: (value: IRange | number) => void
  step?: number;
  value?: IRange | number
}
const RangeSlider: React.SFC<IRangeSliderProps> = ({
  allowSameValues,
  disabled,
  draggableTrack,
  maxValue,
  minValue,
  name,
  onChange,
  step,
  value
}) => {
  const [updatedValue, setUpdatedValue] = useState<IRange | number>(value || 0);

  const handleChange = (newValue: IRange | number) => {
    setUpdatedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <InputRange
      allowSameValues={allowSameValues}
      disabled={disabled}
      draggableTrack={draggableTrack}
      maxValue={maxValue}
      minValue={minValue}
      name={name}
      onChange={handleChange}
      step={step}
      value={updatedValue}
    />
  );
};
RangeSlider.defaultProps = {
  allowSameValues: false,
  disabled: false,
  draggableTrack: false,
  maxValue: 10,
  minValue: 0,
  name: '',
  onChange: (): void => {
    return;
  },
  step: 1
};
export default WithUtils(RangeSlider);