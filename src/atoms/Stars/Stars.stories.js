import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Stars', module, (story, { Stars }) => {
    story
      .add('with default modifiers', () => (
        <Stars />
      ));
  });
};

