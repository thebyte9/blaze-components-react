import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const useTheme = (): any => useContext(ThemeContext);

export default useTheme;
