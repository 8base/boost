import React from 'react';

export default (asStory) => {
  asStory('ATOMS/TYPOGRAPHY/Text', module, (story, { Text }) => {
    story
      .add('with text', () => (
        <Text text="Expletively" />
      ))
      .add('with children', () => (
        <Text>Imploringness</Text>
      ))
      .add('with kind modifiers ', () => (
        <React.Fragment>
          <Text kind="primary">Primary Text</Text>
          <Text kind="secondary">Secondary Text</Text>
          <Text kind="disabled">Disabled Text</Text>
        </React.Fragment>
      ));
  });
};

