import isFunction from 'lodash/isFunction';

import { theme as atomsTheme, atoms } from './atoms';
import * as molecules from './molecules';
import './reset';

const COLORS = {
  PRIMARY_BUTTON_BACKGROUND_COLOR: '#4DA1FF',
  SECONDARY_BUTTON_BACKGROUND_COLOR: '#FFFFFF',

  PRIMARY_LINK_COLOR: '#4DA1FF',

  DARK_DIVIDER_COLOR: 'rgba(0, 0, 0, 0.12)',
  DARK_DISABLED_TEXT_COLOR: 'rgba(0, 0, 0, 0.38)',
  DARK_PRIMARY_TEXT_COLOR: 'rgba(0, 0, 0, 0.87)',
  DARK_SECONDARY_TEXT_COLOR: 'rgba(0, 0, 0, 0.54)',

  LIGHT_DIVIDER_COLOR: 'rgba(255, 255, 255, 0.12)',
  LIGHT_DISABLED_TEXT_COLOR: 'rgba(255, 255, 255, 0.38)',
  LIGHT_PRIMARY_TEXT_COLOR: 'rgba(255, 255, 255, 1)',
  LIGHT_SECONDARY_TEXT_COLOR: 'rgba(255, 255, 255, 0.87)',
};

export const defaultTheme = {
  COLORS,
  ...Object.keys(atomsTheme).reduce((result, atomName) => ({
    ...result,
    [atomName]: isFunction(atomsTheme[atomName]) ? atomsTheme[atomName](COLORS) : atomsTheme[atomName],
  }), {}),
};

export const components = {
  ...atoms,
  ...molecules,
};

export { ThemeProvider } from 'emotion-theming';