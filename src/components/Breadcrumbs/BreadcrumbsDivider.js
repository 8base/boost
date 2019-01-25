// @flow
import { createThemeTag } from '../../theme/createThemeTag';


const name = 'breadcrumbsDivider';


const [BreadcrumbsDividerTag, theme] = createThemeTag(name, {
  root: {
    padding: '0 8px',
  },
});

export { BreadcrumbsDividerTag, theme };
