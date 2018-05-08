import React from 'react';

const OPTIONS = [{
  content: 'ovenlike',
  value: 'ovenlike',
}, {
  content: 'serjeant',
  value: 'serjeant',
}, {
  content: 'wiseheartedly',
  value: 'wiseheartedly',
}];

export default (asStory) => {
  asStory('Atoms/Select', module, (story, { Select }) => {
    story
      .add('default', () => (
        <Select name="name" onChange={() => null} placeholder="Select an option" options={OPTIONS} />
      ))
      .add('filled', () => (
        <Select name="name" onChange={() => null} placeholder="Select an option" options={OPTIONS} value={OPTIONS[0].value} />
      ))
      .add('stretch', () => (
        <Select name="name" onChange={() => null} placeholder="Select an option" options={OPTIONS} stretch />
      ));
  });
};
