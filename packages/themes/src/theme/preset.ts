import { ThemeType } from '../types';
import { button } from './components/button';
import { modal } from './components/modal';
import { navbar } from './components/navbar';
import { input } from './components/input';
import { skeleton } from './components/skeleton';

export const preset: ThemeType = {
  button: {
    ...button,
  },
  modal: {
    ...modal,
  },
  navbar: {
    ...navbar,
  },
  input: {
    ...input,
  },
  skeleton: {
    ...skeleton,
  },
};
