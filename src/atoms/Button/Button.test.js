// @flow

import React from 'react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should call onClick callback', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={ onClick } />);

    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should change loading state by the prop', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.state('loading')).toBeFalsy();
    wrapper.setProps({ loading: true });
    expect(wrapper.state('loading')).toBeTruthy();
  });
});
