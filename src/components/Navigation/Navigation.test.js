// @flow
import React from 'react';
import { Navigation } from './Navigation';

describe('<Navigation />', () => {
  it('should shallow navigation', () => {
    const wrapper = shallow(
      <Navigation color="GREEN">
        <Navigation.Item icon="Trashcan" label="Jobs" href="/jobs" />
      </Navigation>,
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should shallow navigation item', () => {
    const wrapper = shallow(
      <Navigation.Item icon="Trashcan" label="Jobs" href="/jobs" />,
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should render navigation with custom tag', () => {
    const Link = () => null;

    const wrapper = mount(
      <Navigation color="GREEN">
        <Navigation.Item
          icon="Trashcan"
          label="Jobs"
          tagName={ Link }
          to="/jobs"
        />
      </Navigation>,
    );

    expect(wrapper.find(Link).props().to).toBe('/jobs');
  });
});
