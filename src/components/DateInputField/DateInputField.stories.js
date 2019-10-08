import React from 'react';
import { DateInputField, Column } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';

export default {
  title: 'Components/DateInputField',
  component: DateInputField,
};

export const common = () => (
  <Column>
    <StateContainer value={ null } withForm>
      <DateInputField label="Date" placeholder="mm/dd/yyyy" />
    </StateContainer>
    <StateContainer value={ null } withForm>
      <DateInputField label="Datetime" withTime />
    </StateContainer>
    <StateContainer value="2018-11-07" withForm>
      <DateInputField label="Date" />
    </StateContainer>
    <StateContainer value="2018-11-29T21:00:00.000Z" withForm>
      <DateInputField label="Datetime" withTime />
    </StateContainer>
  </Column>
);

common.story = {
  name: 'common',
};
