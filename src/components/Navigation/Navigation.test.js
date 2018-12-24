// @flow
import React from 'react';
import { Navigation } from './Navigation';

describe('<Navigation />', () => {
  it('should render navigation', () => {
    const wrapper = shallow(
      <Navigation color="GREEN">
        <Navigation.Item icon="Trashcan" label="Jobs" href="/jobs" />
      </Navigation>,
    );

    expect(wrapper).toMatchInlineSnapshot(`
<Styled(navigationPlate)
  color="GREEN"
  tagName="nav"
>
  <NavigationItem
    color="GREEN"
    href="/jobs"
    icon="Trashcan"
    key=".0"
    label="Jobs"
    tagName="a"
  />
</Styled(navigationPlate)>
`);
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
