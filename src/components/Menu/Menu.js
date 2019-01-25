// @flow

import React from 'react';

import { Paper } from '../Paper';
import { MenuItem } from './MenuItem';

import { MenuTag } from './Menu.theme';


type MenuProps = {
  children?: React$Node,
};

const Menu = ({ children, ...rest }: MenuProps) => (
  <Paper padding="none" borderRadius="all">
    <MenuTag tagName="div" { ...rest } >
      { children }
    </MenuTag>
  </Paper>
);

Menu.displayName = 'Menu';

Menu.Item = MenuItem;


export { Menu };
