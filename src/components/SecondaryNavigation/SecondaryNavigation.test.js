// @flow
import React from 'react';
import { SecondaryNavigation } from './';

describe('<SecondaryNavigation />', () => {
  it('should shallow SecondaryNavigation', () => {
    const wrapper = shallow(
      <SecondaryNavigation>
        <SecondaryNavigation.Item label="First item" />
      </SecondaryNavigation>,
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should shallow SecondaryNavigation item', () => {
    const wrapper = shallow(
      <SecondaryNavigation.Item label="First item" />,
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should render SecondaryNavigation components content', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <SecondaryNavigation>
          <SecondaryNavigation.Item label="First item" />
          <SecondaryNavigation.Item label="Second item" className="active" />
          <SecondaryNavigation.Item label="Third item" />
          <SecondaryNavigation.Item label="Fourth item" />
        </SecondaryNavigation>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.find(SecondaryNavigation.Item).at(0).text()).toBe('First item');
    expect(wrapper.find(SecondaryNavigation.Item).at(3).text()).toBe('Fourth item');
  });
});

