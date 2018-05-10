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
});
