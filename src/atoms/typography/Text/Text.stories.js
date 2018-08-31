// @flow

import React from 'react';
import { Text } from './';

const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

export default (asStory: *) => {
  asStory('ATOMS/TYPOGRAPHY/Text', module, (story, { Text }: { Text: typeof Text }) => {
    story
      .add('with text', () => (
        <Text text={ placeholderText } />
      ))
      .add('with children', () => (
        <Text>{ placeholderText }</Text>
      ))
      .add('with color modifiers ', () => (
        <React.Fragment>
          <Text color="PRIMARY">{ placeholderText }</Text>
          <br />
          <Text color="SECONDARY">{ placeholderText }</Text>
          <br />
          <Text color="RED">{ placeholderText }</Text>
          <br />
          <Text color="GREEN">{ placeholderText }</Text>
          <br />
          <Text color="BLUE">{ placeholderText }</Text>
        </React.Fragment>
      ))
      .add('with align modifiers ', () => (
        <div style={{ width: '300px', display: ' flex', flexDirection: 'column' }}>
          <Text align="left">{ placeholderText }</Text>
          <br />
          <Text align="right">{ placeholderText }</Text>
          <br />
          <Text align="center">{ placeholderText }</Text>
        </div>
      ))
      .add('with disabled modifier', () => (
        <Text disabled>Disabled { placeholderText }</Text>
      ))
      .add('with bold modifiers', () => (
        <React.Fragment>
          <Text weight="semibold">Semibold: { placeholderText }</Text>
          <br />
          <Text weight="bold">Bold: { placeholderText }</Text>
        </React.Fragment>
      ))
      .add('with size modifiers', () => (
        <React.Fragment>
          <Text size="xs">XS - 10px: { placeholderText }</Text>
          <br />
          <Text size="sm">SM - 12px: { placeholderText }</Text>
          <br />
          <Text size="md">MD - 14px: { placeholderText }</Text>
          <br />
          <Text size="lg">LG - 16px: { placeholderText }</Text>
          <br />
          <Text size="xl">XL - 18px: { placeholderText }</Text>
        </React.Fragment>
      ));
  });
};

