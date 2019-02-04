// @flow
import React from 'react';
import { Icon } from './';

describe('<Icon />', () => {
  it('should shallow input', () => {
    const wrapper = mount(
      <Icon name="Alert" color="DANGER" title="Alert icon" />,
    );

    expect(wrapper.find('i').prop('title')).toBe('Alert icon');

    expect(wrapper).toMatchSnapshot();
  });
});
