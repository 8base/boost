// @flow

import React from 'react';

import { createStyledTag, createTheme } from '../../../utils';
import * as glyphs from './glyphs';

type IconProps = {
  /** icon name */
  name: string,
  /** icon color */
  color?: 'red' | 'green' | 'blue' | 'primary' | 'secondary' | 'white' | 'gray' | 'light-gray',
  /** icon size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'stretch',
};

const name = 'icon';

const theme : Theme<IconProps> = createTheme(name, (colors: *): * => ({
  modifiers: {
    color: {
      primary: { color: colors.PRIMARY },
      secondary: { color: colors.SECONDARY },
      red: { color: colors.RED },
      green: { color: colors.GREEN },
      blue: { color: colors.BLUE },
      white: { color: colors.WHITE },
      gray: { color: colors.DARK_GRAY1 },
      'light-gray': { color: colors.LIGHT_GRAY1 },
    },
    size: {
      xs: {
        width: '1rem',
        height: '1rem',
      },
      sm: {
        width: '1.4rem',
        height: '1.4rem',
      },
      md: {
        width: '1.8rem',
        height: '1.8rem',
      },
      lg: {
        width: '2.4rem',
        height: '2.4rem',
      },
      xl: {
        width: '3.6rem',
        height: '3.6rem',
      },
      stretch: {
        width: '100%',
        height: '100%',
      },
    },
  },
  defaults: {},
}));

const IconTag = createStyledTag(name, {
  display: 'inline-flex',
});

const Icon = ({ name, ...rest }: IconProps) => {
  const Glyph = glyphs[name];

  return (
    <IconTag { ...rest } tagName="div">
      <Glyph width="100%" height="100%" />
    </IconTag>
  );
};

Icon.defaultProps = {
  size: 'md',
};

export { Icon, theme };
