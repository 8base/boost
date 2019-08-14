// @flow

import React from 'react';

import { MenuItemTag } from './Menu.theme';

type MenuItemProps = {
  children?: React$Node,
  disabled?: boolean,
};


const MenuItem = ({ children, ...rest }: MenuItemProps) => (
  <MenuItemTag tagName="div" { ...rest }>
    { children }
  </MenuItemTag>
);

MenuItem.displayName = 'Menu.Item';

export { MenuItem };
