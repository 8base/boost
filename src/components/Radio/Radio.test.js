// @flow
import React from 'react';
import { Radio } from './';
import { RadioCircleInnerTag, RadioTag } from './Radio.theme';

describe('<Radio />', () => {
  it('should call onChange callback', () => {
    const onChange = jest.fn();
    let firstItem = null;
    let secondItem = null;

    const wrapper = mount(
      <Radio.Group value={ 1 } gap="xs" onChange={ onChange }>
        <Radio.Item label="Radio" value={ 1 } />
        <Radio.Item label="Radio" value={ 2 } />
        <Radio.Item label="Radio" value={ 3 } />
      </Radio.Group>,
    );

    firstItem = wrapper.find(Radio.Item).at(0);
    secondItem = wrapper.find(Radio.Item).at(1);

    expect(firstItem.find(RadioCircleInnerTag).prop('checked')).toBeTruthy();
    expect(firstItem.find(RadioTag).prop('checked')).toBeTruthy();

    secondItem.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(2);

    wrapper.setProps({ value: 2 });
    firstItem = wrapper.find(Radio.Item).at(0);
    secondItem = wrapper.find(Radio.Item).at(1);

    expect(firstItem.find(RadioCircleInnerTag).prop('checked')).toBeFalsy();
    expect(firstItem.find(RadioTag).prop('checked')).toBeFalsy();
    expect(secondItem.find(RadioCircleInnerTag).prop('checked')).toBeTruthy();
    expect(secondItem.find(RadioTag).prop('checked')).toBeTruthy();
  });

  it('should not call onChange callback on disabled radio', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Radio.Group value={ 1 } gap="xs" onChange={ onChange }>
        <Radio.Item label="Radio" value={ 1 } />
        <Radio.Item label="Radio" disabled value={ 2 } />
        <Radio.Item label="Radio" value={ 3 } />
      </Radio.Group>,
    );

    wrapper.find(Radio.Item).at(1).find('input').simulate('change');

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should redner radio group by the options', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Radio.Group
        onChange={ onChange }
        value={ 2 }
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

    expect(firstItem.find(RadioCircleInnerTag).prop('checked')).toBeFalsy();
    expect(firstItem.find(RadioTag).prop('checked')).toBeFalsy();
    expect(secondItem.find(RadioTag).prop('checked')).toBeTruthy();
    expect(thirdItem.find(RadioTag).prop('checked')).toBeFalsy();

    firstItem.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });
});

