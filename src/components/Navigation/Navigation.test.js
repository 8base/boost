// @flow
import React from 'react';
import { Navigation } from './Navigation';

describe('<Navigation />', () => {
  it('should render navigation with correct props', () => {
    const wrapper = mount(
      <Navigation.Plate color="GREEN">
        <Navigation.Item icon="Trashcan" label="Jobs" href="/jobs" />
      </Navigation.Plate>,
    );

    expect(wrapper.find('a').props().href).toBe('/jobs');
  });

  it('should render navigation with custom tag', () => {
    const Link = () => null;

    const wrapper = mount(
      <Navigation.Plate color="GREEN">
        <Navigation.Item icon="Trashcan" label="Jobs" tagName={ Link } to="/jobs" />
      </Navigation.Plate>,
    );

    expect(wrapper.find(Link).props().to).toBe('/jobs');
  });
});
