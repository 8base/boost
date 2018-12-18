// @flow
import React from 'react';
import { TextArea } from './';

describe('<TextArea />', () => {
  it('should render with value', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <TextArea value="some-text" />
      </EightBaseBoostProvider>,
    );

    expect(wrapper.find('textarea').prop('value')).toBe('some-text');
  });

  it('should call onChange callback', () => {
    const onChange = jest.fn();

    const wrapper = mount(<TextArea onChange={ onChange } />);

    wrapper.find('textarea').simulate('change', { target: { value: 'changed-value' }});
    expect(onChange.mock.calls[0][0]).toBe('changed-value');
  });
});
