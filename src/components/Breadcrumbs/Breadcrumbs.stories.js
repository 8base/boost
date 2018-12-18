import React from 'react';

const routes = [
  { path: '/', label: 'Dashboard' },
  { path: '/app', component: ({ param }) => param },
  { path: '/app/settings', label: 'Settings' },
  { path: '/app/settings/security', label: 'Security' },
];

export default (asStory) => {
  asStory('Components/Breadcrumbs', module, (story, { Breadcrumbs }) => {
    story
      .add('common', () => (
        <Breadcrumbs pathname="/app/settings/security" routes={ routes } param={ 1 } />
      ));
  });
};
