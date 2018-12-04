import React from 'react';

import { createStyledTag, createComponentTheme } from '../../../utils';

type TextAreaProps = {|
  cols?: number,
  name: string,
  onChange: (event?: SyntheticInputEvent) => void,
  placeholder?: string,
  rows?: number,
  value?: string,
|};

const name = 'textArea';

const theme = createComponentTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, ({ theme }) => ({
  border: '1px solid #D0D7DD',
  borderRadius: '5px',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  color: 'rgba(0, 0, 0, 0.87)',
  lineHeight: '28px',
  outline: 'none',
  padding: '1rem',

  '&::placeholder': {
    color: theme.COLORS.LIGHT_GRAY1,
  },
}));

const TextArea = (props: TextAreaProps) => (
  <StyledTag { ...props } tagName="textarea" />
);

export { TextArea, theme };
