import React from 'react';

import { storiesOf } from '@storybook/react';
import { Code } from '../../';

storiesOf('Components/Code', module)
  .add('common', () => (
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
  ))
  .add('with copy button', () => (
    <Code height={ 200 } withCopyButton>
      { `
<p>
  npm i -g 8base
  8base init my-project
</p>
<p>
  npm i -g 8base
  8base init my-project
</p>
<p>
  npm i -g 8base
  8base init my-project
</p>
<p>
  npm i -g 8base
  8base init my-project
</p>
          ` }
    </Code>
  ));


