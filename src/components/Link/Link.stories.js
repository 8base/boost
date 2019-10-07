import React from 'react';

import { Link, Avatar } from '../../';

export default {
  title: 'Components/Link',
  component: Link,
};

export const common = () => (
  <Link to="https://randomuser.me/api/portraits/women/76.jpg" text="With text" />
);

common.story = {
  name: 'common',
};

export const withChildren = () => (
  <Link to="https://randomuser.me/api/portraits/women/87.jpg">
    <Avatar src="https://randomuser.me/api/portraits/women/87.jpg" />
  </Link>
);

withChildren.story = {
  name: 'with children',
};
