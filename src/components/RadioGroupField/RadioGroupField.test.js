// @flow
import React from 'react';
import { RadioGroupField } from './';
import { Radio } from '../Radio';

describe('<RadioGroupField />', () => {
  it('should render radio group by the options', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <RadioGroupField
        meta={{}}
        input={{
          onChange,
          value: 2,
        }}
        options={ [
          { label: 'Radio 1', value: 1 },
          { label: 'Radio 2', value: 2 },
          { label: 'Radio 3', value: 3 },
        ] }
      />,
    );

    const firstItem = wrapper.find(Radio.Item).at(0);
    const secondItem = wrapper.find(Radio.Item).at(1);
    const thirdItem = wrapper.find(Radio.Item).at(2);

    expect(firstItem.find('RadioTag').prop('checked')).toBeFalsy();
    expect(secondItem.find('RadioTag').prop('checked')).toBeTruthy();
    expect(thirdItem.find('RadioTag').prop('checked')).toBeFalsy();

    firstItem.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});
