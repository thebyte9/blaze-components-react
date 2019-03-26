import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../index';

const submited = e => {
    e.preventDefault()
    alert('Submited')
}

const clicked = () => alert('Clicked')

storiesOf('Button', module)
    .add('Simple', () => (
        <div>
            <h1>Simple button with click event</h1>
            <Button onClick={clicked}>Click</Button>
        </div>
    ))
    .add('Submit button', () => (
        <form onSubmit={submited}>
            <h1>Button inside form</h1>
            <Button isSubmit><span>Submit</span></Button>
        </form>
    ))
    .add('Disabled', () => (
        <div>
            <h1>Disabled button</h1>
            <Button disabled>This is a button</Button>
        </div>
    ))