// @flow
import React from 'react';
import { Paragraph } from './';

describe('<Paragraph />', () => {
  it('should render Paragraph components', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Paragraph kind="primary">Primary Paragraph</Paragraph>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.text()).toBe('Primary Paragraph');
  });


  it('should render Paragraph components with text prop', () => {
    const wrapper = mount(
      <Paragraph kind="primary" text="Primary Paragraph" />,
    );

    expect(wrapper.text()).toBe('Primary Paragraph');
  });
});
