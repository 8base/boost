import React from 'react';
import { createStyledTag, createTheme } from 'utils';

type TextInputProps = {|
  name: string,
  onChange: (event?: SyntheticInputEvent) => void,
  placeholder?: string,
  value?: string,
|};

const name = 'textInput';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  border: '1px solid #D0D7DD',
  borderRadius: '5px',
  color: 'rgba(0, 0, 0, 0.87)',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  height: '3rem',
  lineHeight: 'normal',
  outline: 'none',
  padding: '0 1rem',
});

function TextInput(props: TextInputProps) {
  return <StyledTag { ...props } tagName="input" />;
}

export { TextInput, theme };
