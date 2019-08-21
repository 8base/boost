import { configure, addParameters } from '@storybook/react';
import { asStory } from './utils';

function loadStories() {
  const storiesRequire = require.context('../src', true, /\.stories\.js$/);

  storiesRequire.keys().forEach(filename => {
    storiesRequire(filename).default(asStory);
  });
}

addParameters({
  options: {
    showPanel: false,
  },
});

configure(loadStories, module);
