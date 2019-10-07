import React from 'react';
import { DateInput, Column } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';

export default {
  title: 'Components/DateInput',
};

export const common = () => (
  <Column>
    <StateContainer value={null}>
      <DateInput placeholder="mm/dd/yyyy" />
    </StateContainer>
    <StateContainer value={null}>
      <DateInput withTime />
    </StateContainer>
    <StateContainer value="2018-11-07">
      <DateInput clearable />
    </StateContainer>
    <StateContainer value="2018-11-29T21:00:00.000Z">
      <DateInput withTime clearable />
    </StateContainer>
    <StateContainer value="2018-11-15T21:00:00.000Z">
      <DateInput
        minDate={new Date('2018-11-15T21:00:00.00+03:00')}
        minTime={new Date('2018-11-15T00:00:00.00+03:00')}
        maxTime={new Date('2018-11-15T02:00:00.00+03:00')}
        withTime
      />
    </StateContainer>
    <StateContainer value={null}>
      <DateInput placeholder="mm/dd/yyyy" disabled />
    </StateContainer>
    <StateContainer value="2019-08">
      <DateInput placeholder="mm/yyyy" isMonthPicker clearable />
    </StateContainer>
  </Column>
);

common.story = {
  name: 'common',
};
