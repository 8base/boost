import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Code', module, (story, { Code }) => {
    story
      .add('default', () => (
        <Code>
          <p>npm i -g 8base</p>
          <p>8base init my-project</p>
        </Code>
      ));
  });
};

