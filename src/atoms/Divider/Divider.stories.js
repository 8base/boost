import React from 'react';

export default (asStory) => {
  asStory('Atoms/Divider', module, (story, { Divider }) => {
    story
      .add('with default modifiers', () => (
        <Divider />
      ));
  });
};

