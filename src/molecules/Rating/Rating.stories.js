import React from 'react';

export default (asStory) => {
  asStory('MOLECULES/Rating', module, (story, { Rating }) => {
    story
      .add('with default modifiers', () => (
        <Rating value={ 4.5 } />
      ));
  });
};

