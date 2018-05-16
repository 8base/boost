import React from 'react';

export default (asStory) => {
  asStory('ATOMS/Navigation', module, (story, { Navigation }) => {
    story
      .add('without groups', () => (
        <Navigation.Plate>
          <Navigation.Item label="Jobs" to="/jobs" />
          <Navigation.Item label="Posted" to="/posted" />
          <Navigation.Item label="My Active Jobs" to="/my-active-jobs" />
          <Navigation.Item label="Active Requests" to="/active-requests" />
          <Navigation.Item label="Applied" to="/applied" />
          <Navigation.Item label="Saved" to="/saved" />
        </Navigation.Plate>
      ))
      .add('with groups', () => (
        <Navigation.Plate>
          <Navigation.Group label="My Profile" to="/profile" exact />
          <Navigation.Group label="Messages" to="/messages" exact />
          <Navigation.Group label="Network" to="/network" exact>
            <Navigation.Item label="Hired Developers" to="/network/hired-developers" />
            <Navigation.Item label="My Employers" to="/network/my-employers" />
            <Navigation.Item label="Open Invitations" to="/network/open-invitations" />
          </Navigation.Group>
          <Navigation.Group label="Jobs" to="/jobs" exact>
            <Navigation.Item label="Posted" to="/jobs/posted" />
            <Navigation.Item label="My Active Jobs" to="/jobs/my-active-jobs" />
            <Navigation.Item label="Active Requests" to="/jobs/active-requests" />
            <Navigation.Item label="Applied" to="/jobs/applied" />
            <Navigation.Item label="Saved" to="/jobs/saved" />
          </Navigation.Group>
        </Navigation.Plate>
      ));
  });
};

