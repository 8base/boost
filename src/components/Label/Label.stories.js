import React from 'react';

import { Label, Column } from '../../';

export default {
  title: 'Components/Label',
};

export const common = () => (
  <Column gap="md">
    <Label text="Default Label" />
    <Label kind="primary" text="Primary Label" />
    <Label kind="secondary" text="Secondary Label" />
    <Label kind="disabled" text="Disabled Label" />
  </Column>
);

common.story = {
  name: 'common',
};
