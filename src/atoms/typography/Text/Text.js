// @flow

import React from 'react';

import { createStyledTag, createTheme } from 'utils';

type TextProps = {|
  /** text to display in the component */
  children?: string | number,
  /** another way to set displayed text */
  text?: string | number,
  /** possible text colors */
  color?: 'primary' | 'secondary' | 'red' | 'green' | 'blue',
  /** disabled text state*/
  disabled?: boolean,
|};

const name = 'text';

const theme = createTheme(name, (colors: *): * => ({
  modifiers: {
    color: {
      primary: {
        color: colors.DARK_PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: colors.DARK_SECONDARY_TEXT_COLOR,
      },
      red: {
        color: colors.RED,
      },
      green: {
        color: colors.GREEN,
      },
      blue: {
        color: colors.BLUE,
      },
    },

    disabled: {
      color: colors.DISABLED_TEXT_COLOR,
    },
  },
  defaults: {
    kind: 'primary',
  },
}));

const StyledTag = createStyledTag(name, {
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '28px',
  margin: 0,
});

function Text({
  text,
  children,
  ...rest
  }: TextProps) {
  return <StyledTag { ...rest } tagName="span">{ children || text }</StyledTag>;
}

export { Text, theme };
