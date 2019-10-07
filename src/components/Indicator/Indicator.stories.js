// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Column, Indicator } from '../../';

storiesOf('Components/Indicator', module)
  .add('common', () => (
    <Column>
      <Indicator>Disabled</Indicator>
      <Indicator status="enabled">Enabled</Indicator>
    </Column>
  ));

