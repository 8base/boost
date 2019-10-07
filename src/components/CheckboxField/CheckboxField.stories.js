import React from 'react';

import { storiesOf } from '@storybook/react';
import { CheckboxField, Column } from '../../';

storiesOf('Components/CheckboxField', module)
  .add('common', () => (
    <Column>
      <CheckboxField label="Without check" input={{}} />
      <CheckboxField label="With check" input={{ value: true }} />
      <CheckboxField label="With error" input={{ value: false }} meta={{ error: 'Required', touched: true }} />
    </Column>
  ));

