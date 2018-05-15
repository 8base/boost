import React from 'react';

import { createStyledTag, createTheme } from 'utils';

type LabelProps = {|
  kind?: 'primary' | 'secondary' | 'disabled',
  for?: string,
  text?: string,
|};

const name = 'label';

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
  fontSize: '12px',
  lineHeight: '28px',
  margin: 0,
});

function Label({
  text,
  children,
  ...rest
  }: LabelProps) {
  return <StyledTag { ...rest } tagName="label">{ text }</StyledTag>;
}

export { Label, theme };
