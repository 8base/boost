import React from 'react';

import { storiesOf } from '@storybook/react';
import { Link, Avatar } from '../../';

storiesOf('Components/Link', module)
  .add('common', () => (
    <Link to="https://randomuser.me/api/portraits/women/76.jpg" text="With text" />
  ))
  .add('with children', () => (
    <Link to="https://randomuser.me/api/portraits/women/87.jpg">
      <Avatar src="https://randomuser.me/api/portraits/women/87.jpg" />
    </Link>
  ));

