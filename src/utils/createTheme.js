// @flow
import { COLORS } from '../theme/colors';
import { SIZES } from '../theme/sizes';
import { Z_INDEX } from '../theme/zIndex';

const createTheme = <T: Object>(name: string, theme: ((typeof COLORS, typeof SIZES, typeof Z_INDEX) => T) | T): { [string]: T } => ({
  [name]: typeof theme === 'function' ? theme(COLORS, SIZES, Z_INDEX) : theme,
});

export { createTheme };
