// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Column } from '../../';

const placeholderText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';


storiesOf('Components/Text', module)
  .add('common', () => (
    <Column>
      <Text>Semibold: { placeholderText }</Text>
      <Text color="PRIMARY">Primary color: { placeholderText }</Text>
      <Text color="SECONDARY">Secondary color: { placeholderText }</Text>
      <Text color="RED">Red color: { placeholderText }</Text>
      <Text color="GREEN">Green color: { placeholderText }</Text>
      <Text color="BLUE">Blue color: { placeholderText }</Text>
      <Text weight="semibold">Semibold: { placeholderText }</Text>
      <Text weight="bold">Bold: { placeholderText }</Text>
      <Text disabled>Disabled: { placeholderText }</Text>
    </Column>
  ))

  .add('with align modifiers', () => (
    <div style={{ width: '300px', display: ' flex', flexDirection: 'column' }}>
      <Text align="left">{ placeholderText }</Text>
      <br />
      <Text align="right">{ placeholderText }</Text>
      <br />
      <Text align="center">{ placeholderText }</Text>
    </div>
  ));


