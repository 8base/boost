// @flow

import React from 'react';
import { Text, Column } from '../../';

const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

export default {
  title: 'Components/Text',
  component: Text,
};

export const common = () => (
  <Column>
    <Text>Semibold: { placeholderText }</Text>
    <Text color="PRIMARY">Primary color: { placeholderText }</Text>
    <Text color="SECONDARY">Secondary color: { placeholderText }</Text>
    <Text color="DANGER">Danger color: { placeholderText }</Text>
    <Text color="GREEN_20">Green color: { placeholderText }</Text>
    <Text color="BLUE_30">Blue color: { placeholderText }</Text>
    <Text weight="semibold">Semibold: { placeholderText }</Text>
    <Text weight="bold">Bold: { placeholderText }</Text>
    <Text disabled>Disabled: { placeholderText }</Text>
  </Column>
);

common.story = {
  name: 'common',
};

export const withAlignModifiers = () => (
  <div style={{ width: '300px', display: ' flex', flexDirection: 'column' }}>
    <Text align="left">{ placeholderText }</Text>
    <br />
    <Text align="right">{ placeholderText }</Text>
    <br />
    <Text align="center">{ placeholderText }</Text>
  </div>
);

withAlignModifiers.story = {
  name: 'with align modifiers',
};
