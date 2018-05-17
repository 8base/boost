// @flow
import { COLORS } from 'theme/colors';

const createTheme = (name: string, theme: ((typeof COLORS) => Object) | Object) => ({
  [name]: typeof theme === 'function' ? theme(COLORS) : theme,
});

export { createTheme };
