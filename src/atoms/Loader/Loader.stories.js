import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Loader', module, (story, { Loader }) => {
    story
      .add('with various size', () => (
        <React.Fragment>
          <Loader size="sm" />
          <Loader size="md" />
          <Loader size="lg" />
        </React.Fragment>
      ))
      .add('with stretch', () => (
        <React.Fragment>
          <Loader stretch />
        </React.Fragment>
      ));
  });
};

