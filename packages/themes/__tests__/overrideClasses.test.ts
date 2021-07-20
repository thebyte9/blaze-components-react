import { overrideClasses } from '../src/utils/overrideClasses';

describe('overrideClasses function', () => {
  test('it should override Tailwind utilities classes', () => {
    const utilities = `
    font-manrope
    font-medium
    rounded-button 
    bg-button-primary 
    text-button-primary 
    px-6 
    py-1 
    min-w-min 
    dark:bg-gray-800 
    dark:text-button-primary 
    hover:bg-button-hover 
    focus:outline-none
    mr-1 
    active:bg-button-pressed`;

    const expected =
      'font-manrope font-medium rounded-button bg-blue-500 text-blue-500 px-6 py-1 min-w-min dark:bg-gray-800 dark:text-button-primary hover:bg-button-hover focus:outline-none mr-1 active:bg-button-pressed';

    expect(overrideClasses(utilities, 'bg-blue-500 text-blue-500')).toBe(expected);
  });
});
