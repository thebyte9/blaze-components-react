import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';
import { create } from '@storybook/theming';
// Import default styles from blaze-ui
import '@blaze-cms/blaze-ui/css/blaze-ui.css';

const basicTheme = create({
    base: 'light',
    brandTitle: 'Blaze2',
    brandUrl: 'https://www.thebyte9.com/',
    brandImage: 'https://media.licdn.com/dms/image/C4E0BAQGV39e-8T5Dvg/company-logo_200_200/0?e=2159024400&v=beta&t=hq2eQl1cfgILFgMc5TJUGKf3hF416BqbJf33Wx1dQEw',
    appBg: 'white',
  });
  
addParameters({
    options: {
        showPanel: true,
        panelPosition: 'right',
        theme: basicTheme,
    }
});

configureReadme({
  header: `The Byte9 Blaze-2 Components`,
  footer: `Arcoders`,
});

addDecorator(addReadme);

function loadStories() {
    const req = require.context('../src', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);


