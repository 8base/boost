// @flow

import React from 'react';

export default (asStory: *) => {
  asStory('Components/Tag', module, (story, { Tag, Column }) => {
    story
      .add('common', () => (
        <Column>
          <Tag>Content</Tag>
          <Tag color="LIGHT_GRAY1">Content</Tag>
          <Tag color="LIGHT_GRAY2">Content</Tag>
          <Tag color="LIGHT_GRAY3">Content</Tag>
          <Tag color="LIGHT_GRAY4">Content</Tag>
          <Tag color="LIGHT_GRAY5">Content</Tag>
        </Column>
      ))
      .add('with large content', () => (
        <Column>
          <Tag>data-builder-test-js-as-an-authorized-user-i-should-see-require-validation-during-create-the-text-filled.png</Tag>
        </Column>
      ));
  });
};

