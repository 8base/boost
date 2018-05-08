import React from 'react';

export default (asStory) => {
  asStory('Atoms/TextInput', module, (story, { TextInput }) => {
    story
      .add('without value', () => (
        <TextInput name="input" onChange={() => null} />
      ))
      .add('with value', () => (
        <TextInput name="input" value="value" onChange={() => null} />
      ))
      .add('with placeholder', () => (
        <TextInput name="input" placeholder="placeholder" onChange={() => null} />
      ));
  });
};

