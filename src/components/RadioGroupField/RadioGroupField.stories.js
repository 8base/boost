import React from 'react';

import { storiesOf } from '@storybook/react';
import { RadioGroupField, Radio } from '../../';

storiesOf('Components/RadioGroupField', module)
  .add('default', () => (
    <RadioGroupField direction="row" input={{ value: 1 }} meta={{ }}>
      <Radio.Item label="Radio" value={ 1 } />
      <Radio.Item label="Radio" value={ 2 } />
      <Radio.Item label="Radio" value={ 3 } />
    </RadioGroupField>
  ))
  .add('disabled', () => (
    <RadioGroupField direction="row" input={{ value: 1 }} meta={{ }} disabled>
      <Radio.Item label="Radio" value={ 1 } />
      <Radio.Item label="Radio" value={ 2 } />
      <Radio.Item label="Radio" value={ 3 } />
    </RadioGroupField>
  ))
  .add('with error', () => (
    <RadioGroupField direction="row" input={{ }} meta={{ error: 'Required', touched: true }}>
      <Radio.Item label="Radio" value={ 1 } />
      <Radio.Item label="Radio" value={ 2 } />
      <Radio.Item label="Radio" value={ 3 } />
    </RadioGroupField>
  ));

