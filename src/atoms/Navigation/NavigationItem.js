import React from 'react';
import { NavLink } from 'react-router-dom';

import { createStyledTag, createTheme } from '../../utils';

type NavigationItemProps = {|
  exact?: boolean,
  kind?: 'primary' | 'secondary',
  label: string,
  to: string,
|};

const name = 'navigationItem';

const theme = createTheme(name, {
  modifiers: {
    kind: {
      primary: {
        fontWeight: 400,
        fontSize: '14px',
      },
      secondary: {
        fontWeight: 300,
        fontSize: '12px',
        paddingLeft: '2rem',
      },
    },
  },
  defaults: {
    kind: 'secondary',
  },
});

const StyledTag = createStyledTag(name, (props) => ({
  color: props.theme.COLORS.DARK_PRIMARY_TEXT_COLOR,
  cursor: 'pointer',
  display: 'flex',
  fontFamily: 'Poppins',
  height: '40px',
  lineHeight: '40px',
  padding: '0 1rem',
  position: 'relative',
  textDecoration: 'none',
  userSelect: 'none',

  '&:hover, &.is-active': {
    backgroundColor: '#fff',
  },

  '&.is-active': {
    fontWeight: 600,
  },

  '&:hover::before, &.is-active::before': {
    content: '""',
    backgroundColor: '#4DA1FF',
    left: 0,
    top: 0,
    position: 'absolute',
    height: '100%',
    width: '2px',
  },
}));

function NavigationItem({
  label,
  ...rest
  }: NavigationItemProps) {
  return <StyledTag tagName={ NavLink } activeClassName="is-active" { ...rest }>{ label }</StyledTag>;
}

export { NavigationItem, theme };
