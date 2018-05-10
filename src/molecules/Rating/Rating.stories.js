import React from 'react';

export default (asStory) => {
  asStory('Molecules/Rating', module, (story, { Rating }) => {
    story
      .add('with default modifiers', () => (
        <Rating value={ 4.5 } />
      ));
  });
};

