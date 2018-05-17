// @flow

import React from 'react';
import { Text } from './';

export default (asStory: *) => {
  asStory('ATOMS/TYPOGRAPHY/Text', module, (story, { Text }: { Text: typeof Text }) => {
    story
      .add('with text', () => (
        <Text text="Expletively" />
      ))
      .add('with children', () => (
        <Text>Imploringness</Text>
      ))
      .add('with color modifiers ', () => (
        <div>
          <Text color="primary">Primary Text</Text>
          <Text color="secondary">Secondary Text</Text>
          <Text color="red">Red Text</Text>
          <Text color="green">Green Text</Text>
          <Text color="blue">Blue Text</Text>
        </div>
      ))
      .add('with disabled modifier', () => (
        <Text disabled>Disabled Text</Text>
      ));
  });
};

