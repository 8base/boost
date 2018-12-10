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

const theme = createComponentTheme(name, (colors: *, sizes: *) => ({
  root: {
    border: `1px solid ${colors.PRIMARY_BORDER_COLOR}`,
    borderRadius: sizes.MAIN_BORDER_RADIUS,
    fontSize: sizes.MAIN_FONT_SIZE,
    color: colors.DARK_GRAY1,
    fontWeight: 400,
    lineHeight: 2,
    padding: '1rem',

    '&::placeholder': {
      color: colors.PLACEHOLDER_COLOR,
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
