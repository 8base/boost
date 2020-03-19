import React from 'react';

import { RadioGroupField, Radio } from '../../';

export default {
  title: 'Components/RadioGroupField',
  component: RadioGroupField,
};

export const defaultStory = () => (
  <RadioGroupField direction="row" input={{ value: 1 }} meta={{}}>
    <Radio.Item label="Radio" value={ 1 } />
    <Radio.Item label="Radio" value={ 2 } />
    <Radio.Item label="Radio" value={ 3 } />
  </RadioGroupField>
);

defaultStory.story = {
  name: 'default',
};

export const button = () => (
  <RadioGroupField direction="row" input={{ value: 1 }} meta={{}} gap="none">
    <Radio.Button label="Radio" value={ 1 } />
    <Radio.Button label="Radio" value={ 2 } />
    <Radio.Button label="Radio" value={ 3 } />
  </RadioGroupField>
);

button.story = {
  name: 'button',
};

export const disabledStory = () => (
  <React.Fragment>
    <RadioGroupField direction="row" input={{ value: 1 }} meta={{}} disabled>
      <Radio.Item label="Radio" value={ 1 } />
      <Radio.Item label="Radio" value={ 2 } />
      <Radio.Item label="Radio" value={ 3 } />
    </RadioGroupField>

    <RadioGroupField direction="row" input={{ value: 3 }} meta={{}} options={ [{ label: '1', value: 1 }, { label: '2', value: 2, disabled: true }, { label: '3', value: 3, disabled: true }] } />
  </React.Fragment>
);

disabledStory.story = {
  name: 'disabled',
};

export const withError = () => (
  <RadioGroupField direction="row" input={{}} meta={{ error: 'Required', touched: true }}>
    <Radio.Item label="Radio" value={ 1 } />
    <Radio.Item label="Radio" value={ 2 } />
    <Radio.Item label="Radio" value={ 3 } />
  </RadioGroupField>
);

withError.story = {
  name: 'with error',
};
