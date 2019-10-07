// @flow

import React from 'react';
import { Tag, Column } from '../../';

export default {
  title: 'Components/Tag',
  component: Tag,
};

export const common = () => (
  <Column>
    <Tag>Content</Tag>
    <Tag color="GRAY1">Content</Tag>
    <Tag color="GRAY5">Content</Tag>
    <Tag color="YELLOW">Content</Tag>
    <Tag color="PURPLE">Content</Tag>
    <Tag color="PINK">Content</Tag>
    <Tag color="LIGHT_BLUE">Content</Tag>
    <Tag color="BLUE">Content</Tag>
    <Tag color="DARK_BLUE">Content</Tag>
    <Tag color="BLUE">Content</Tag>
    <Tag color="GREEN">Content</Tag>
  </Column>
);

common.story = {
  name: 'common',
};

export const withLargeContent = () => (
  <div style={{ width: '200px' }}>
    <Tag>
      data-builder-test-js-as-an-authorized-user-i-should-see-require-validation-during-create-the-text-filled.png
    </Tag>
  </div>
);

withLargeContent.story = {
  name: 'with large content',
};
