// @flow
import React from 'react';
import { Radio } from './';

describe('<Radio />', () => {

  it('should call onChange callback', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Radio.Group value={ 1 } gap="xs" onChange={ onChange }>
        <Radio.Item label="Radio" value={ 1 } />
        <Radio.Item label="Radio" value={ 2 } />
        <Radio.Item label="Radio" value={ 3 } />
      </Radio.Group>,
    );

    wrapper.find(Radio.Item).at(1).find('input').simulate('change');

    expect(onChange).toHaveBeenCalled();
    expect(onChange.mock.calls[0][0]).toBe(2);
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
});

