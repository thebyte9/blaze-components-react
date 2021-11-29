import { AriaAttributes, DOMAttributes } from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    autocomplete?: string | boolean;
    error?: string | boolean;
    loading?: string | boolean;
    warning?: string | boolean;
    success?: string | boolean;
  }
}
