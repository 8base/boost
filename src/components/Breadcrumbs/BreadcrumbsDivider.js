// @flow
import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'breadcrumbsDivider';

const theme = createComponentTheme(name, {
  root: {
    padding: '0 8px',
  },
});

const BreadcrumbsDividerTag = createStyledTag(name, {});

export { BreadcrumbsDividerTag, theme };
