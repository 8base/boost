// @flow

import React from 'react';
import fp from 'lodash/fp';

import { PALETTE } from '../../../theme';
import { createStyledTag, createComponentTheme } from '../../../utils';
import type { PropSizes } from '../../../types';

type TextProps = {|
  /** text to display in the component */
  children?: React$Node | string | number,
  /** another way to set displayed text */
  text?: string | number,
  /** possible text colors */
  color?: $Keys<typeof PALETTE>,
  /** disabled text state*/
  disabled?: boolean,
  /** set style to bold or other weights */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold',
  /** possible sizes */
  size?: PropSizes,
  /** possible line heights */
  lineHeight?: PropSizes,
  /** text align */
  align?: 'left' | 'center' | 'right',
  /** when true then cut text with ellipsis */
  ellipsis?: boolean,
|};

const name = 'text';

const theme = createComponentTheme(name, (colors: *): * => ({
  root: {
    lineHeight: 1.4,
    margin: 0,
  },

  modifiers: {
    color: fp.mapValues(
      (color) => ({ color }),
      PALETTE,
    ),

    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },

    disabled: {
      color: colors.DISABLED_TEXT_COLOR,
    },

    weight: {
      light: {
        fontWeight: 300,
      },
      normal: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      semibold: {
        fontWeight: 600,
      },
      bold: {
        fontWeight: 700,
      },
    },

    lineHeight: {
      xs: { lineHeight: '1' },
      sm: { lineHeight: '1.2' },
      md: { lineHeight: '1.4' },
      lg: { lineHeight: '1.6' },
      xl: { lineHeight: '1.8' },
    },

    size: {
      xs: {
        fontSize: '1.2rem',
      },
      sm: {
        fontSize: '1.3rem',
      },
      md: {
        fontSize: '1.4rem',
      },
      lg: {
        fontSize: '1.6rem',
      },
      xl: {
        fontSize: '1.8rem',
      },
    },

    ellipsis: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },

  defaults: {
    color: 'DARK_GRAY1',
    size: 'md',
    lineHeight: 'md',
    weight: 'normal',
    ellipsis: false,
  },
}));

const StyledTag = createStyledTag(name);

function Text({
  text,
  children,
  ...rest
  }: TextProps) {
  return <StyledTag { ...rest } tagName="span">{ children || text }</StyledTag>;
}

Text.defaultProps = {
  ...theme[name].defaults,
};

export { Text, theme };
