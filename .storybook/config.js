import { configure } from '@storybook/react';
// Import default styles from blaze-ui
import '@blaze-cms/blaze-ui/css/blaze-ui.css';

function loadStories() {
    const req = require.context('../src', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);