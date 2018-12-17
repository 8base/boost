import React from 'react';

export default (asStory) => {
  asStory('Components/Code', module, (story, { Code }) => {
    story
      .add('default', () => (
        <Code>
          <p>npm i -g 8base</p>
          <p>8base init my-project</p>
        </Code>
      ))
      .add('with custom height', () => (
        <Code height={ 200 }>{
          `npm i -g 8base
8base init my-project

npm i -g 8base
8base init my-project
npm i -g 8base
8base init my-project
npm i -g 8base
8base init my-project
npm i -g 8base
8base init my-project
npm i -g 8base
8base init my-project
npm i -g 8base
8base init my-project
npm i -g 8base
8base init my-project
npm i -g 8base
8base init my-project
npm i -g 8base
8base init my-project
`
	     }
        </Code>
      ));
  });
};

