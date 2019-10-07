import React from 'react';
import { Breadcrumbs } from '../../';

const routes = [
  { path: '/', label: 'Dashboard' },
  { path: '/app', component: ({ param }) => param },
  { path: '/app/settings', label: 'Settings' },
  { path: '/app/settings/security', label: 'Security' },
];

export default {
  title: 'Components/Breadcrumbs',
};

export const common = () => (
  <Breadcrumbs pathname="/app/settings/security" routes={routes} param={1} />
);

common.story = {
  name: 'common',
};
