// @flow
import React from 'react';
import { Text } from './';

describe('<Text />', () => {
  it('should render with text prop', () => {
    const wrapper = render(
      <EightBaseBoostProvider>
        <Text text="some-text" />
      </EightBaseBoostProvider>,
    );

    expect(wrapper.text()).toBe('some-text');
  });

  it('should render with children prop', () => {
    const wrapper = render(<Text>some-text</Text>);

    expect(wrapper.text()).toBe('some-text');
  });
});
