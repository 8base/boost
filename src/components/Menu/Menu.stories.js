import React from 'react';

import { storiesOf } from '@storybook/react';
import { Menu } from '../../';

storiesOf('Components/Menu', module)
  .add('common', () => (
    <Menu>
      <Menu.Item>Tramman</Menu.Item>
      <Menu.Item>Gripman</Menu.Item>
      <Menu.Item disabled>Proalliance</Menu.Item>
    </Menu>
  ));

