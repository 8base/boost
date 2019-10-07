// @flow

import React from 'react';
import { Column, Indicator } from '../../';

export default {
  title: 'Components/Indicator',
};

export const common = () => (
  <Column>
    <Indicator>Disabled</Indicator>
    <Indicator status="enabled">Enabled</Indicator>
  </Column>
);

common.story = {
  name: 'common',
};
