import React from 'react';

const routes = [
  { path: '/', label: 'Dashboard' },
  { path: '/app', component: ({ param }) => param },
  { path: '/app/settings', label: 'Settings' },
  { path: '/app/settings/security', label: 'Security' },
];

export default (asStory) => {
  asStory('ATOMS/Breadcrumbs', module, (story, { Breadcrumbs, Button, Link, Row }) => {
    story
      .add('with default modifiers', () => (
        <Breadcrumbs pathname="/app/settings/security" routes={ routes } param={ 1 } />
      ));
    story
      .add('with custom tagName', () => (
        <Breadcrumbs
          tagName={ Row }
          pathname="/app/settings/security"
          routes={ routes }
          param={ 1 }
          itemTagName={ ({ label, ...rest }) => <Button tagName={ Link } { ...rest } text={ label } /> }
        />
      ));
  });
};
