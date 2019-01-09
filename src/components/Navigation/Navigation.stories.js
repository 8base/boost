import React from 'react';

export default (asStory) => {
  asStory('Components/Navigation', module, (story, { Navigation }) => {
    story
      .add('default', () => (
        <Navigation color="GREEN" data-e2e-id="default-navigation">
          <Navigation.Item icon="Trashcan" label="Jobs" to="/jobs" />
          <Navigation.Item icon="Mail" label="Posted" to="/posted" />
          <Navigation.Item icon="Search" label="My Active Jobs" to="/my-active-jobs" />
        </Navigation>
      ));
  });
};

