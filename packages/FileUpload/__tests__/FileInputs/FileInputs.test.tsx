import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import FileInputs from '../../src/FileInputs';
import React from 'react';

const handleSelectChange = jest.fn();
const handleInputChange = jest.fn();
const copyToOthers = jest.fn();

const mockedProps = {
  data: { altText: '', caption: '', seoTitle: '' },
  file: {
    base64: 'test-image',
    id: 'test-image-id',
    name: 'test-image-name',
    type: 'image',
  },
  copyToOthers: copyToOthers,
  handleInputChange: handleInputChange,
  handleSelectChange: handleSelectChange,
  index: 0,
  name: 'test',
  selectOptions: [
    ['default', 'Default'],
    ['test', 'Test'],
  ],
};

const CustomInput = ({ id, label, name, onChange, value }: any) => (
  <label>
    {label}
    <input id={id} aria-label="custom field" name={name} value={value} onChange={(event) => onChange({ event })} />
  </label>
);

describe('FileInputs component', () => {
  it('should render without throwing error', () => {
    const { asFragment } = render(<FileInputs {...mockedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call mocked function handleInputChange & change the input value', () => {
    render(<FileInputs {...mockedProps} />);
    const mockedValue = 'typing first input';
    fireEvent.change(screen.getByLabelText('image title'), { target: { value: mockedValue } });
    expect(handleInputChange).toHaveBeenCalled();
  });

  it('should call copyToOthers', () => {
    const { getByTestId } = render(<FileInputs {...mockedProps} />);
    const mockedValue = 'typing first input';
    fireEvent.click(getByTestId('copy-to-storeKey'));
    fireEvent.click(getByTestId('copy-to-title'));
    expect(copyToOthers).toHaveBeenCalledWith('storeKey', mockedProps.index);
    expect(copyToOthers).toHaveBeenCalledWith('title', mockedProps.index);
  });

  it('should call mocked function handleSelectChange & change the select value', () => {
    const mockedValue = 'Test';
    render(<FileInputs {...mockedProps} />);
    fireEvent.change(screen.getByLabelText('Alternative text'), { target: { value: mockedValue } });
  });

  it('should render childs based on type (2 inputs if doc)', () => {
    const updatedProps = { ...mockedProps };
    updatedProps.file.type = 'doc';
    render(<FileInputs {...updatedProps} />);
  });

  it('should render childs based on type (2 inputs if doc)', () => {
    const updatedProps = { ...mockedProps };
    updatedProps.file.type = 'doc';
    render(<FileInputs {...updatedProps} />);
  });

  it('should render and handle custom field config', () => {
    render(
      <FileInputs
        {...mockedProps}
        customFields={[
          {
            component: CustomInput,
            label: 'SEO title',
            name: 'seoTitle',
          },
        ]}
      />,
    );

    fireEvent.change(screen.getByLabelText('custom field'), { target: { value: 'Custom SEO title' } });
    fireEvent.click(screen.getByTestId('copy-to-seoTitle'));

    expect(handleInputChange).toHaveBeenCalled();
    expect(copyToOthers).toHaveBeenCalledWith('seoTitle', mockedProps.index);
  });
});
