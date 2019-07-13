// @flow
import React from 'react';
import { Scrollable } from './';

describe('<Scrollable />', () => {
  it('should render Scrollable components', () => {
    const wrapper = mount(
      <BoostProvider>
        <Scrollable>
          some-text
        </Scrollable>
      </BoostProvider>,
    );

    expect(wrapper.text()).toBe('some-text');
  });
});

