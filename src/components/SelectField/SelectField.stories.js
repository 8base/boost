import React from 'react';
import { SelectField, Column } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';

const OPTIONS = [
  {
    label: 'ovenlike',
    value: 'ovenlike',
  },
  {
    label: 'serjeant',
    value: 'serjeant',
  },
  {
    label: 'wiseheartedly',
    value: 'wiseheartedly',
  },
];

export default {
  title: 'Components/SelectField',
};

export const common = () => (
  <Column>
    <StateContainer value={null} withForm>
      <SelectField
        label="Stretch = false"
        name="name"
        placeholder="Select an option"
        options={OPTIONS}
        stretch={false}
      />
    </StateContainer>
    <StateContainer value={OPTIONS[1].value} withForm>
      <SelectField
        label="Clearable select"
        name="name"
        placeholder="Select an option"
        options={OPTIONS}
        clearable
      />
    </StateContainer>
    <StateContainer value={[OPTIONS[1].value, OPTIONS[2].value]} withForm>
      <SelectField
        label="Multiple select"
        name="name"
        placeholder="Select an option"
        options={OPTIONS}
        multiple
      />
    </StateContainer>
    <StateContainer value={[OPTIONS[1].value, OPTIONS[2].value]} withForm>
      <SelectField
        label="Multiple select"
        name="name"
        placeholder="Select an option"
        options={OPTIONS}
        disabled
      />
    </StateContainer>
  </Column>
);

common.story = {
  name: 'common',
};
