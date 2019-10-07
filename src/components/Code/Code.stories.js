import React from 'react';

import { Code } from '../../';

export default {
  title: 'Components/Code',
};

export const common = () => (
  <Code>
    <p>npm i -g 8base</p>
    <p>8base init my-project</p>
  </Code>
);

common.story = {
  name: 'common',
};

export const withCustomHeight = () => (
  <Code height={200}>
    {`npm i -g 8base
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
`}
  </Code>
);

withCustomHeight.story = {
  name: 'with custom height',
};

export const withCopyButtonStory = () => (
  <Code height={200} withCopyButton>
    {`
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
          `}
  </Code>
);

withCopyButtonStory.story = {
  name: 'with copy button',
};
