// @flow
import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'breadcrumbsDivider';

const theme = createComponentTheme(name, ({ SIZES }: *) => ({
  root: {
    fontSize: SIZES.LARGE_FONT_SIZE,
    padding: '0 1rem',
  },
}));

const BreadcrumbsDividerTag = createStyledTag(name, {});

export { BreadcrumbsDividerTag, theme };
