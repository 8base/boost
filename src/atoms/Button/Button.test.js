// @flow

import React from 'react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should call onClick callback', () => {
    const onClick = jest.fn();
    const wrapper = mount(<Button onClick={ onClick } />);

    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
