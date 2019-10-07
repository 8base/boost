// import { asStory } from './utils';
import React from 'react';
import styled from '@emotion/styled';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { BoostProvider, createTheme } from '../src';

const theme = createTheme({
  components: {
    codeNumeric: {
      /* root: (props, styles) => ({
        ...styles,
        backgroundColor: 'red',
      }), */
    },
  },
});

const Root = styled('div')`
  padding: 32px;
  height: 100%;
`;
/*
function loadStories() {
  const storiesRequire = require.context('../src', true, /Button.stories\.js$/);

  storiesRequire.keys().forEach(filename => {
    storiesRequire(filename).default(asStory);
  });

  return storiesRequire;
}*/

addParameters({
  options: {
    showPanel: false,
  },
});

addDecorator((storyFn) => (
  <BoostProvider theme={ theme }>
    <Root>
      { storyFn() }
    </Root>
  </BoostProvider>
));


// load(require.context('../src', true, /Avatar.stories\.(js|mdx)$/), module);

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);

// configure(loadStories, module);
