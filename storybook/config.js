import { addParameters, configure } from '@storybook/react';
import { asStory } from './utils';


addParameters({
  name: '8base Boost',
  options: {
    showPanel: false,
  },
});

function loadStories() {
  const storiesRequire = require.context('../src', true, /\.stories\.js$/);

  storiesRequire.keys().forEach(filename => {
    storiesRequire(filename).default(asStory);
  });
}

configure(loadStories, module);
