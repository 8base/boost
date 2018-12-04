// @flow
import { COLORS } from '../theme/colors';
import { SIZES } from '../theme/sizes';
import { Z_INDEX } from '../theme/zIndex';

const createComponentTheme = <T: Object>(
  name: string,
  theme: ((typeof COLORS, typeof SIZES, typeof Z_INDEX) => T) | T,
): { [string]: T } => ({
  [name]: theme,
});

export { createComponentTheme };
