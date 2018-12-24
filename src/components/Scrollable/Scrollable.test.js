// @flow
import React from 'react';
import { Scrollable } from './';

describe('<Scrollable />', () => {
  it('should render Scrollable components', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Scrollable>
          some-text
        </Scrollable>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.text()).toBe('some-text');
  });
});

