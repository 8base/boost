import React from 'react';

import { SwitchField, Column } from '../../';

export default {
  title: 'Components/SwitchField',
};

export const common = () => (
  <Column>
    <SwitchField label="Disabled" input={{}} />
    <SwitchField label="Enabled" input={{ value: true }} />
    <SwitchField
      label="With error"
      input={{ value: false }}
      meta={{ error: 'Required', touched: true }}
    />
  </Column>
);

common.story = {
  name: 'common',
};
