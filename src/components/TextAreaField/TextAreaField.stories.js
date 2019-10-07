import React from 'react';

import { TextAreaField } from '../../';

export default {
  title: 'Components/TextAreaField',
  component: TextAreaField,
};

export const defaultStory = () => (
  <TextAreaField label="Area" input={{ name: 'input', value: 'value', onChange: () => null }} />
);

defaultStory.story = {
  name: 'default',
};

export const withoutValue = () => (
  <TextAreaField label="Area" input={{ name: 'input', onChange: () => null }} />
);

withoutValue.story = {
  name: 'without value',
};

export const withPlaceholder = () => (
  <TextAreaField
    label="Area"
    input={{ name: 'input', onChange: () => null }}
    placeholder="placeholder"
  />
);

withPlaceholder.story = {
  name: 'with placeholder',
};

export const withDisabled = () => (
  <TextAreaField
    label="Area"
    input={{ name: 'input', onChange: () => null }}
    placeholder="placeholder"
    disabled
  />
);

withDisabled.story = {
  name: 'with disabled',
};

export const withError = () => (
  <TextAreaField
    label="Area"
    input={{ name: 'input', onChange: () => null }}
    meta={{ error: 'Required', touched: true }}
    placeholder="placeholder"
  />
);

withError.story = {
  name: 'with error',
};
