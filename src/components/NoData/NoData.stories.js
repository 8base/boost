import React from 'react';

export default (asStory) => {
  asStory('Components/NoData', module, (story, { NoData }) => {
    story
      .add('default', () => (
        <NoData />
      ));
  });
};

