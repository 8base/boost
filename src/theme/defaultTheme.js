// @flow

import { theme as atomsTheme } from 'atoms';
import { COLORS } from './colors';
import './reset';

export const defaultTheme = {
  COLORS,
  ...Object.keys(atomsTheme).reduce((result, atomName) => ({
    ...result,
    [atomName]: atomsTheme[atomName],
  }), {}),
};
