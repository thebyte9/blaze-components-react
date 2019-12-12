import { addParameters, addDecorator, configure } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';
import { create } from '@storybook/theming';
import './css/blaze-ui.css';
import './css/_toasters.css';

const basicTheme = create({
  base: 'light',
  brandTitle: 'Blaze2',
  brandUrl: 'https://www.thebyte9.com/',
  brandImage:
    'https://media.licdn.com/dms/image/C4E0BAQGV39e-8T5Dvg/company-logo_200_200/0?e=2159024400&v=beta&t=hq2eQl1cfgILFgMc5TJUGKf3hF416BqbJf33Wx1dQEw',
  appBg: 'white'
});

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: basicTheme
  }
});

addDecorator(addReadme);

function loadStories() {
  const req = require.context('../packages/', true, /\.stories\.(js|tsx)$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
