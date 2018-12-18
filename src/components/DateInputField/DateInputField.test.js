// @flow
import React from 'react';
import { DateInputField } from './DateInputField';
import { DateInput } from '../DateInput';

describe('<DateInputField />', () => {

  it('should render pass correct props to the inners components', () => {
    const wrapper = mount(
      <DateInputField label="Date" input={{ value: '2018-11-07' }} />,
    );

    expect(wrapper.find(DateInput).props().value).toBe('2018-11-07');
  });
});
