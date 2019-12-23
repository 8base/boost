// @flow

import React from 'react';

import { Switch, Column } from '../../';

export default {
  title: 'Components/Switch',
  component: Switch,
};

export const common = () => (
  <Column>
    <Switch label="Unchecked" value={ false } />
    <Switch label="Checked" value />
    <Switch label="Checked" value inverted />
  </Column>
);

common.story = {
  name: 'common',
};
