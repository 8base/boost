// @flow
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { Link } from '../Link';

describe('<Breadcrumbs />', () => {

  it('should render breadcrumbs', () => {
    const routes = [
      { path: '/', label: 'Dashboard' },
      { path: '/app', label: 'App' },
      { path: '/app/settings', label: 'Settings' },
    ];

    const wrapper = mount(
      <BoostProvider>
        <Breadcrumbs pathname="/app/settings/security" routes={ routes } />
      </BoostProvider>,
    );

    expect(wrapper.find(Link).at(0).text()).toBe('Dashboard');
    expect(wrapper.find(Link).at(0).prop('to')).toBe('/');

    expect(wrapper.find(Link).at(1).text()).toBe('App');
    expect(wrapper.find(Link).at(1).prop('to')).toBe('/app');

    expect(wrapper.find(Link).at(2).text()).toBe('Settings');
    expect(wrapper.find(Link).at(2).prop('to')).toBe('/app/settings');
  });

  it('should render breadcrumbs with custom component', () => {
    const routes = [
      { path: '/', label: 'Dashboard' },
      { path: '/app', component: ({ param }) => param },
      { path: '/app/settings', label: 'Settings' },
    ];

    const wrapper = mount(<Breadcrumbs pathname="/app/settings/security" routes={ routes } param={ 1 } />);

    expect(wrapper.find(Link).at(1).text()).toBe('1');
    expect(wrapper.find(Link).at(1).prop('to')).toBe('/app');
  });

  it('should render piece of breadcrumbs when some path is not valid', () => {
    const routes = [
      { path: '/', label: 'Dashboard' },
      { path: '/app/settings', label: 'Settings' },
      { path: '/app/settings/security', label: 'Security' },
    ];

    const wrapper = mount(<Breadcrumbs pathname="/app/settings" routes={ routes } param={ 1 } />);

    expect(wrapper.find(Link).at(0).text()).toBe('Dashboard');
    expect(wrapper.find(Link).at(0).prop('to')).toBe('/');

    expect(wrapper.find(Link).at(1).text()).toBe('Settings');
    expect(wrapper.find(Link).at(1).prop('to')).toBe('/app/settings');

    expect(wrapper.find(Link).at(2)).toHaveLength(0);
  });
});
