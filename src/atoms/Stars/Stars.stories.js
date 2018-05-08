import React from 'react';

export default (asStory) => {
  asStory('Atoms/Stars', module, (story, { Stars }) => {
    story
      .add('with default modifiers', () => (
        <Stars />
      ));
  });
};

