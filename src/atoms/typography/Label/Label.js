import React from 'react';

import { createStyledTag, createComponentTheme } from '../../../utils';

type LabelProps = {|
  kind?: 'primary' | 'secondary' | 'disabled',
  for?: string,
  children?: string,
  text?: string,
|};

const name = 'label';

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *) => ({
  root: {
    fontWeight: 400,
    fontSize: SIZES.SMALL_FONT_SIZE,
    lineHeight: 2,
    margin: 0,
  },
  modifiers: {
    kind: {
      primary: {
        color: COLORS.PRIMARY_TEXT_COLOR,
      },
      secondary: {
        color: COLORS.SECONDARY_TEXT_COLOR,
      },
      disabled: {
        color: COLORS.DISABLED_TEXT_COLOR,
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
