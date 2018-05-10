import { configure } from '@storybook/react';
import { asStory } from './utils';

function loadStories() {
  const storiesRequire = require.context('../src', true, /\.stories\.js$/);

  storiesRequire.keys().forEach(filename => {
    storiesRequire(filename).default(asStory);
  });
}

configure(loadStories, module);
