// @flow
import { type ThemeConstatns } from '../theme/defaultTheme';

const createComponentTheme = <T: Object>(
  name: string,
  theme: ((any) => T) | T,
): { [string]: T } => ({
  [name]: theme,
});

export { createComponentTheme };
