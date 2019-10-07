// @flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import { Divider } from '../../';

storiesOf('Components/Divider', module)
  .add('without title', () => (
    <Divider />
  ))
  .add('with title', () => (
    <Divider>
          With Title
    </Divider>
  ));

