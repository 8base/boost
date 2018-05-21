import React from 'react';

export default (asStory) => {
  asStory('ATOMS/DATA ENTRY/TextAreaField', module, (story, { TextAreaField }) => {
    story
      .add('without value', () => (
        <TextAreaField label="Area" input={{ name: 'input', onChange: () => null }} />
      ))
      .add('with value', () => (
        <TextAreaField label="Area" input={{ name: 'input', value: 'value', onChange: () => null }} />
      ))
      .add('with placeholder', () => (
        <TextAreaField label="Area" input={{ name: 'input', onChange: () => null }} placeholder="placeholder" />
      ));
  });
};

