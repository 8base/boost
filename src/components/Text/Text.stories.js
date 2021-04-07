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

export const withKindModifiers = () => (
  <Column>
    <Text kind="h1">H1 kind: { placeholderText }</Text>
    <Text kind="h2">H2 kind: { placeholderText }</Text>
    <Text kind="h3">H3 kind: { placeholderText }</Text>
    <Text kind="h4">H4 kind: { placeholderText }</Text>
    <Text kind="h5">H5 kind: { placeholderText }</Text>
    <Text kind="subtitle">Subtitle kind: { placeholderText }</Text>
    <Text kind="body">Body kind: { placeholderText }</Text>
    <Text kind="overline-1">Overline-1 kind: { placeholderText }</Text>
    <Text kind="overline-2">Overline-2 kind: { placeholderText }</Text>
    <Text kind="small-1">Small-1 kind: { placeholderText }</Text>
    <Text kind="small-2">Small-2 kind: { placeholderText }</Text>
  </Column>
);

withKindModifiers.story = {
  name: 'with kind modifiers',
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
