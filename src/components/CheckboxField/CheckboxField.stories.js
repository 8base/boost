import React from 'react';

import { CheckboxField, Column } from '../../';

export default {
  title: 'Components/CheckboxField',
  component: CheckboxField,
};

export const common = () => (
  <Column>
    <CheckboxField label="Without check" input={{}} />
    <CheckboxField label="With check" input={{ value: true }} />
    <CheckboxField
      label="With error"
      input={{ value: false }}
      meta={{ error: 'Required', touched: true }}
    />
  </Column>
);

common.story = {
  name: 'common',
};
