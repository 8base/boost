// @flow
import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button';

describe('<ButtonGroup />', () => {
  it('should render button group', () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button variant="outlined">Button 1</Button>
        <Button variant="outlined">Button 2</Button>
      </ButtonGroup>,
    );

    expect(wrapper.find(Button).at(0).text()).toBe('Button 1');
    expect(wrapper.find(Button).at(1).text()).toBe('Button 2');
  });
});
