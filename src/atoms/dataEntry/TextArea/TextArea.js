// @flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../../utils';

type TextAreaProps = {|
  cols?: number,
  name: string,
  onChange: (event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  rows?: number,
  value?: string,
|};

const name = 'textArea';

const theme = createComponentTheme(name, ({ COLORS, SIZES }: *) => ({
  root: {
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    fontSize: SIZES.MAIN_FONT_SIZE,
    color: COLORS.DARK_GRAY1,
    fontWeight: 400,
    lineHeight: 2,
    padding: '1rem',

    '&::placeholder': {
      color: COLORS.PLACEHOLDER_COLOR,
    },
  },

  modifiers: {
  },
  defaults: {
  },
}));

const StyledTag = createStyledTag(name, {
  outline: 'none',
});

const TextArea = (props: TextAreaProps) => (
  <StyledTag { ...props } tagName="textarea" />
);

export { TextArea, theme };
