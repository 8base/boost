import React from 'react';

export default (asStory) => {
  asStory('Atoms/TextAreaField', module, (story, { TextAreaField }) => {
    story
      .add('without value', () => (
        <TextAreaField label="Area" name="input" onChange={() => null} />
      ))
      .add('with value', () => (
        <TextAreaField label="Area" name="input" value="value" onChange={() => null} />
      ))
      .add('with placeholder', () => (
        <TextAreaField label="Area" name="input" placeholder="placeholder" onChange={() => null} />
      ));
  });
};

