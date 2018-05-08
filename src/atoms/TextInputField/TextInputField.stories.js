import React from 'react';

export default (asStory) => {
  asStory('Atoms/TextInputField', module, (story, { TextInputField }) => {
    story
      .add('without value', () => (
        <TextInputField label="Input" name="input" onChange={() => null} />
      ))
      .add('with value', () => (
        <TextInputField label="Input" name="input" value="value" onChange={() => null} />
      ))
      .add('with placeholder', () => (
        <TextInputField label="Input" name="input" placeholder="placeholder" onChange={() => null} />
      ));
  });
};

