// @flow
import React from 'react';
import { Heading } from './';

describe('<Heading />', () => {
  it('should render Heading components', () => {
    const wrapper = mount(
      <BoostProvider>
        <Heading type="h1" kind="primary">Primary Heading</Heading>
      </BoostProvider>,
    );

    expect(wrapper.text()).toBe('Primary Heading');
  });


  it('should render Heading components with text prop', () => {
    const wrapper = mount(
      <Heading type="h1" kind="primary" text="Primary Heading" />,
    );

    expect(wrapper.text()).toBe('Primary Heading');
  });
});

