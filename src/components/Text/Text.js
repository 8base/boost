// @flow

import React from 'react';
import fp from 'lodash/fp';

import { PALETTE } from '../../theme';
import { createStyledTag, createComponentTheme } from '../../utils';

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
  /** text align */
  align?: 'left' | 'center' | 'right',
  /** when true then cut text with ellipsis */
  ellipsis?: boolean,
|};

const name = 'text';

const theme = createComponentTheme(name, ({ COLORS }: *): * => ({
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
      color: COLORS.DISABLED_TEXT_COLOR,
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

    ellipsis: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  },

  defaults: {
    color: 'DARK_GRAY1',
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
