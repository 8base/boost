// @flow
import React from 'react';
import { SecondaryNavigation } from './';

describe('<SecondaryNavigation />', () => {
  it('should render SecondaryNavigation components', () => {
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

