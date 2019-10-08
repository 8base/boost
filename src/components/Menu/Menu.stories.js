import React from 'react';

import { Menu } from '../../';

export default {
  title: 'Components/Menu',
  component: Menu,
};

export const common = () => (
  <Menu>
    <Menu.Item>Tramman</Menu.Item>
    <Menu.Item>Gripman</Menu.Item>
    <Menu.Item disabled>Proalliance</Menu.Item>
  </Menu>
);

common.story = {
  name: 'common',
};
