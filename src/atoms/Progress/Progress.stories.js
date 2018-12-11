import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Progress', module, (story, { Progress }) => {
    story
      .add('with default modifiers', () => (
        <React.Fragment>
          <Progress value={ 0 } />
          <br />
          <Progress value={ 30 } />
          <br />
          <Progress value={ 50 } />
          <br />
          <Progress value={ 100 } />
          <br />
        </React.Fragment>
      ));
  });
};

