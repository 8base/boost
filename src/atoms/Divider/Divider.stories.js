import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Divider', module, (story, { Divider }) => {
    story
      .add('with default modifiers', () => (
        <Divider />
      ));
  });
};

