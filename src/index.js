// @flow

import { atoms } from './atoms';
import * as molecules from './molecules';
import { defaultTheme, resetGlobal } from './theme';

const components = {
  ...atoms,
  ...molecules,
};

export { defaultTheme, resetGlobal, components };

export { ThemeProvider } from 'emotion-theming';
