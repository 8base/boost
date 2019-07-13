// @flow
import React from 'react';
import { Text } from './';

describe('<Text />', () => {
  it('should render with text prop', () => {
    const wrapper = render(
      <BoostProvider>
        <Text text="some-text" />
      </BoostProvider>,
    );

    expect(wrapper.text()).toBe('some-text');
  });

  it('should render with children prop', () => {
    const wrapper = render(<Text>some-text</Text>);

    expect(wrapper.text()).toBe('some-text');
  });
});
