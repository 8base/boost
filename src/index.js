// @flow

import { atoms } from './atoms';
import * as molecules from './molecules';
import { defaultTheme } from './theme';

const components = {
  ...atoms,
  ...molecules,
};

export { defaultTheme, components };

export { ThemeProvider } from 'emotion-theming';

