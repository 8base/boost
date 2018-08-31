// @flow

import React from 'react';
import fp from 'lodash/fp';

import { PALETTE } from '../../../theme';
import { createStyledTag, createTheme } from '../../../utils';
import type { Theme } from '../../../types';
import * as glyphs from './glyphs';

type IconProps = {
  /** icon name */
  name: string,
  /** icon color */
  color?: $Keys<typeof PALETTE>,
  /** icon size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'stretch',
};

const name = 'icon';

const theme : Theme<IconProps> = createTheme(name, () => ({
  modifiers: {
    color: fp.mapValues(
      (color) => ({ color }),
      PALETTE,
    ),
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
