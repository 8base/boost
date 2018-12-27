// @flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';
import { Paper } from '../Paper';

import { MenuItem, theme as menuItemTheme } from './MenuItem';


type MenuPlateProps = {|
  children?: React$Node,
|};

const name = 'menu';

const menuTheme = createComponentTheme(name, {
  root: {
    paddingTop: '8px',
    paddingBottom: '8px',
  },
});

const theme = {
  ...menuTheme,
  ...menuItemTheme,
};


const MenuTag = createStyledTag(name, () => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  overflow: 'hidden',
}));

const Menu = ({ children, ...rest }: MenuPlateProps) => (
  <Paper padding="none" borderRadius="all">
    <MenuTag tagName="div" { ...rest } >
      { children }
    </MenuTag>
  </Paper>
);

Menu.Item = MenuItem;


export { Menu, theme };
