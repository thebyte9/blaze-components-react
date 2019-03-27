import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../index';

storiesOf('Inputs', module)
  .add('Text input', () => (
    <form>
      <div className="component-wrapper">

        <div className="form-field form-field--input">
          <Input
            placeholder="Simple input"
            onChange={() => {}}
            />
        </div>

        <div className="form-field form-field--input">
          <Input
            label="Text input label + placeholder"
            placeholder="Placeholder text"
            onChange={() => {}}
            />
        </div>

        <div className="form-field form-field--input form-field--small">
          <Input
            label="Text input small"
            placeholder="Placeholder text"
            onChange={() => {}}
            />
        </div>

        <div className="form-field form-field--input form-field--full-width">
          <Input
            label="Text input full width"
            placeholder="Placeholder text"
            onChange={() => {}}
            />
        </div>

        <div className="form-field form-field--input">
          <Input
            label="Text input disabled"
            placeholder="Placeholder text"
            onChange={() => {}}
            />
        </div>

        <div className="form-field form-field--input">
          <Input
            label="Text input disabled"
            placeholder="Placeholder text"
            onChange={() => {}}
            labeleRequiredClassName="required"
            disabled
            />
        </div>

        <div className="form-field form-field--input form-field--password">
          <Input
            label="Password - show hide"
            placeholder="******"
            onChange={() => {}}
            type="password"
            className="form-password"
            />
        </div>
      </div>
    </form>
  ));
