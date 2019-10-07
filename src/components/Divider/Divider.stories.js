// @flow

import React from 'react';

import { Divider } from '../../';

export default {
  title: 'Components/Divider',
};

export const withoutTitle = () => <Divider />;

withoutTitle.story = {
  name: 'without title',
};

export const withTitle = () => <Divider>With Title</Divider>;

withTitle.story = {
  name: 'with title',
};
