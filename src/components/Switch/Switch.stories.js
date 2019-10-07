// @flow

import React from 'react';

import { Switch, Column } from '../../';

export default {
  title: 'Components/Switch',
};

export const common = () => (
  <Column>
    <Switch label="Unchecked" value={false} />
    <Switch label="Checked" value />
  </Column>
);

common.story = {
  name: 'common',
};
