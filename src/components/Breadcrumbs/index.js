// @flow
import { Breadcrumbs, theme as breadcrumbsTheme } from './Breadcrumbs';
import { theme as breadcrumbsDividerTheme } from './BreadcrumbsDivider';

const theme = {
  ...breadcrumbsTheme,
  ...breadcrumbsDividerTheme,
};

export {
  Breadcrumbs,
  theme,
};
