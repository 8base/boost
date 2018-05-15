import React from 'react';

import { createStyledTag, createTheme } from 'utils';

type TextProps = {|
  children?: React$Node,
  kind?: 'primary' | 'secondary' | 'disabled',
  text?: string,
|};

const name = 'text';

const theme = createTheme(name, (colors) => ({
  modifiers: {
    kind: {
      primary: {
        color: colors.DARK_PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: colors.DARK_SECONDARY_TEXT_COLOR,
      },
      disabled: {
        color: colors.DARK_DISABLED_TEXT_COLOR,
      },
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
