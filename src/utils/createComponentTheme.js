// @flow
import { COLORS } from '../theme/colors';
import { SIZES } from '../theme/sizes';
import { Z_INDEX } from '../theme/zIndex';

type ThemeConstatns = {
  COLORS: typeof COLORS,
  SIZES: typeof SIZES,
  Z_INDEX: typeof Z_INDEX,
}

const createComponentTheme = <T: Object>(
  name: string,
  theme: ((ThemeConstatns) => T) | T,
): { [string]: T } => ({
  [name]: theme,
});

export { createComponentTheme };
