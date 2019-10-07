import React from 'react';

import { storiesOf } from '@storybook/react';
import { SwitchField, Column } from '../../';

storiesOf('Components/SwitchField', module)
  .add('common', () => (
    <Column>
      <SwitchField label="Disabled" input={{}} />
      <SwitchField label="Enabled" input={{ value: true }} />
      <SwitchField
        label="With error"
        input={{ value: false }}
        meta={{ error: 'Required', touched: true }}
      />
    </Column>
  ));


