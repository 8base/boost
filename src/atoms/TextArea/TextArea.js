import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type TextAreaProps = {|
  cols?: number,
  name: string,
  onChange: (event?: SyntheticInputEvent) => void,
  placeholder?: string,
  rows?: number,
  value?: string,
|};

const name = 'textArea';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  border: '1px solid #D0D7DD',
  borderRadius: '5px',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  color: 'rgba(0, 0, 0, 0.87)',
  lineHeight: '28px',
  outline: 'none',
  padding: '1rem',
});

function TextArea(props: TextAreaProps) {
  return <StyledTag { ...props } tagName="textarea" />;
}

export { TextArea, theme };
