// @flow
import React from 'react';
import { Loader } from './';

describe('<Loader />', () => {
  it('should render Loader components with stretch', () => {
    const wrapper = mount(<Loader />);

    expect(wrapper.find('LoaderTag')).toHaveLength(1);
    expect(wrapper.find('WrapperTag')).toHaveLength(0);

    wrapper.setProps({ stretch: true });
    expect(wrapper.find('LoaderTag')).toHaveLength(1);
    expect(wrapper.find('WrapperTag')).toHaveLength(1);
  });
});

