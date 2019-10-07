// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { Switch, Column } from '../../';

storiesOf('Components/Switch', module)
  .add('common', () => (
    <Column>
      <Switch label="Unchecked" value={ false } />
      <Switch label="Checked" value />
    </Column>
  ));

