import React from 'react';

export default (asStory) => {
  asStory('Components/Progress', module, (story, { Progress, Column }) => {
    story
      .add('common', () => (
        <Column style={{ width: 300 }}>
          <Progress value={ 0 } />
          <br />
          <Progress value={ 30 } />
          <br />
          <Progress value={ 50 } />
          <br />
          <Progress value={ 100 } />
        </Column>
      ));
  });
};

