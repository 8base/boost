// @flow
import { COLORS } from '../theme/colors';

const createTheme = <T: Object>(name: string, theme: ((typeof COLORS) => T) | T): { [string]: T } => ({
  [name]: typeof theme === 'function' ? theme(COLORS) : theme,
});

export { createTheme };
