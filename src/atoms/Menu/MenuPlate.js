import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type MenuPlateProps = {|
  children?: React$Node,
|};

const name = 'menuPlate';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, () => ({
  backgroundColor: '#fff',
  border: '1px solid #d0d7dd',
  borderRadius: '5px',
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
}));

function MenuPlate({
  children,
  ...rest
  }: MenuPlateProps) {
  return (
    <StyledTag tagName="div" {...rest}>{children}</StyledTag>
  );
}

export { MenuPlate, theme };