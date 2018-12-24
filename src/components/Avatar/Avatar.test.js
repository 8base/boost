// @flow
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarHandleTag } from './Avatar.theme';

describe('<Avatar />', () => {
  it('should render avatar with name', () => {
    const wrapper = mount(<Avatar name="kd" />);

    expect(wrapper.text()).toBe('K');
  });

  it('should render avatar without name', () => {
    const wrapper = mount(<Avatar />);

    expect(wrapper.text()).toBe('A');
  });

  it('should render avatar with pick label', () => {
    const onPick = jest.fn();
    const wrapper = mount(<Avatar pickLabel="change avatar" onPick={ onPick } />);

    expect(wrapper.find(AvatarHandleTag).text()).toBe('change avatar');

    wrapper.find(AvatarHandleTag).simulate('click');
    expect(onPick).toHaveBeenCalled();
  });

  it('should render avatar with image', () => {
    const wrapper = mount(<Avatar src="image-src" />);

    expect(wrapper.find('img').props().src).toBe('image-src');
  });
});
