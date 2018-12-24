// @flow
import React from 'react';
import { TextAreaField } from './';
import { TextArea } from '../TextArea';

describe('<TextAreaField />', () => {
  it('should render with text in children', () => {
    const value = '42';
    const onChange = jest.fn();

    const wrapper = shallow(
      <TextAreaField
        input={{ value, onChange }}
      />,
    );

    expect(wrapper.find(TextArea).props().value).toBe(value);
    expect(wrapper.find(TextArea).props().onChange).toBe(onChange);
  });
});
