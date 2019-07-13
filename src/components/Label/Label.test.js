// @flow
import React from 'react';
import { Label } from './';

describe('<Label />', () => {
  it('should render Label components', () => {
    const wrapper = mount(
      <BoostProvider>
        <Label kind="primary">Primary Label</Label>
      </BoostProvider>,
    );

    expect(wrapper.text()).toBe('Primary Label');
  });


  it('should render Label components with text prop', () => {
    const wrapper = mount(
      <Label kind="primary" text="Primary Label" />,
    );

    expect(wrapper.text()).toBe('Primary Label');
  });
});
