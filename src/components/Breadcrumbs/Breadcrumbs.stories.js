import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumbs } from '../../';

const routes = [
  { path: '/', label: 'Dashboard' },
  { path: '/app', component: ({ param }) => param },
  { path: '/app/settings', label: 'Settings' },
  { path: '/app/settings/security', label: 'Security' },
];


storiesOf('Components/Breadcrumbs', module)
  .add('common', () => (
    <Breadcrumbs pathname="/app/settings/security" routes={ routes } param={ 1 } />
  ));

