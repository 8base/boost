// @flow

import { GridBox as Box, theme as gridBoxTheme } from './GridBox';
import { GridLayout as Layout, theme as gridLayoutTheme } from './GridLayout';

const Grid = {
  Box,
  Layout,
};

const theme = {
  ...gridBoxTheme,
  ...gridLayoutTheme,
};

export {
  Grid,
  theme,
};
