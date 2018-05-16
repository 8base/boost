import React from 'react';

import { createStyledTag, createTheme } from 'utils';

type MenuItemProps = {|
  children?: React$Node,
|};

const name = 'menuItem';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, () => ({
  color: 'rgba(0, 0, 0, 0.87)',
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '0 1rem',

  '&:hover': {
    backgroundColor: '#4DA1FF',
    color: '#fff',
  },
}));

function MenuItem({
  children,
  ...rest
  }: MenuItemProps) {
  return <StyledTag { ...rest } tagName="div">{ children }</StyledTag>;
}

export { MenuItem, theme };
