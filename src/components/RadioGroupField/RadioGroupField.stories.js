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
  <RadioGroupField direction="row" input={{ value: 1 }} meta={{}} disabled>
    <Radio.Item label="Radio" value={ 1 } />
    <Radio.Item label="Radio" value={ 2 } />
    <Radio.Item label="Radio" value={ 3 } />
  </RadioGroupField>
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
