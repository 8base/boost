// @flow

import React from 'react';

export default (asStory: *) => {
  asStory('Components/Divider', module, (story, { Divider }) => {
    story
      .add('without title', () => (
        <Divider />
      ))
      .add('with title', () => (
        <Divider>
          With Title
        </Divider>
      ));
  });
};
