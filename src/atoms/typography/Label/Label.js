import React from 'react';

import { createStyledTag, createComponentTheme } from '../../../utils';

type LabelProps = {|
  kind?: 'primary' | 'secondary' | 'disabled',
  for?: string,
  children?: string,
  text?: string,
|};

const name = 'label';

const theme = createComponentTheme(name, (colors: *, sizes: *) => ({
  root: {
    fontWeight: 400,
    fontSize: sizes.SMALL_FONT_SIZE,
    lineHeight: 2,
    margin: 0,
  },
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

const StyledTag = createStyledTag(name);

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
