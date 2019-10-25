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
    <Tag color="GRAY_50">Content</Tag>
    <Tag color="GRAY_40">Content</Tag>
    <Tag color="YELLOW_30">Content</Tag>
    <Tag color="PURPLE_10">Content</Tag>
    <Tag color="BLUE_10">Content</Tag>
    <Tag color="BLUE_20">Content</Tag>
    <Tag color="BLUE_30">Content</Tag>
    <Tag color="BLUE_40">Content</Tag>
    <Tag color="GREEN_40">Content</Tag>
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

export const condensed = () => (
  <Column>
    <Tag condensed>Content</Tag>
    <Tag condensed color="GRAY_50">Content</Tag>
    <Tag condensed color="GRAY_40">Content</Tag>
    <Tag condensed color="YELLOW_30">Content</Tag>
    <Tag condensed color="PURPLE_10">Content</Tag>
    <Tag condensed color="BLUE_10">Content</Tag>
    <Tag condensed color="BLUE_20">Content</Tag>
    <Tag condensed color="BLUE_30">Content</Tag>
    <Tag condensed color="BLUE_40">Content</Tag>
    <Tag condensed color="GREEN_40">Content</Tag>
  </Column>
);

condensed.story = {
  name: 'condensed tag',
};
