import React from 'react';

import { createStyledTag, createTheme } from 'utils';

type LabelProps = {|
  kind?: 'primary' | 'secondary' | 'disabled',
  for?: string,
  children?: string,
  text?: string,
|};

const name = 'label';

const theme = createTheme(name, (colors) => ({
  modifiers: {
    kind: {
      primary: {
        color: colors.PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: colors.SECONDARY_TEXT_COLOR,
      },
      disabled: {
        color: colors.DISABLED_TEXT_COLOR,
      },
    },
  },
  defaults: { },
}));

const StyledTag = createStyledTag(name, {
  fontWeight: 400,
  fontSize: '1.2rem',
  lineHeight: 2,
  margin: 0,
});

function Label({
  text,
  children,
  ...rest
  }: LabelProps) {
  return <StyledTag { ...rest } tagName="label">{ children || text }</StyledTag>;
}

Label.defaultProps = {
  kind: 'primary',
};

export { Label, theme };
