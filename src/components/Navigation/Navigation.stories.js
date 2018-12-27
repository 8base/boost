import React from 'react';

export default (asStory) => {
  asStory('Components/Navigation', module, (story, { Navigation }) => {
    story
      .add('without groups', () => (
        <Navigation color="GREEN">
          <Navigation.Item icon="Trashcan" label="Jobs" to="/jobs" />
          <Navigation.Item icon="Mail" label="Posted" to="/posted" />
          <Navigation.Item icon="Search" label="My Active Jobs" to="/my-active-jobs" />
        </Navigation>
      ));
  });
};

