import React from 'react';

const OPTIONS = [{
  label: 'ovenlike',
  value: 'ovenlike',
}, {
  label: 'serjeant',
  value: 'serjeant',
}, {
  label: 'wiseheartedly',
  value: 'wiseheartedly',
}];

export default (asStory) => {
  asStory('Components/Select', module, (story, { Select }) => {
    story
      .add('default', () => (
        <Select name="name" onChange={ () => null } placeholder="Select an option" options={ OPTIONS } />
      ))
      .add('filled', () => (
        <Select name="name" onChange={ () => null } placeholder="Select an option" options={ OPTIONS } value={ OPTIONS[1] } />
      ))
      .add('stretch', () => (
        <Select name="name" onChange={ () => null } placeholder="Select an option" options={ OPTIONS } stretch />
      ));
  });
};
