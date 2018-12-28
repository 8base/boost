import React from 'react';

export default (asStory) => {
  asStory('Components/Loader', module, (story, { Loader, Row }) => {
    story
      .add('common', () => (
        <Row alignItems="center" gap="md">
          <Loader size="sm" />
          <Loader size="md" />
          <Loader size="lg" />
        </Row>
      ))
      .add('with stretch', () => (
        <div style={{ border: '1px solid gray', height: '300px' }}>
          <Loader stretch />
        </div>
      ));
  });
};

