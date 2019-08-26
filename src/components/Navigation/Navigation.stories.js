import React, { useState } from 'react';

const ExpandState = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return children({ expanded, setExpanded });
};

export default (asStory) => {
  asStory('Components/Navigation', module, (story, { Navigation, Button }) => {
    story
      .add('default', () => (
        <Navigation color="GREEN" data-e2e-id="default-navigation">
          <Navigation.Item icon="Trashcan" label="Jobs" to="/jobs" />
          <Navigation.Item icon="Mail" label="Posted" to="/posted" />
          <Navigation.Item icon="Search" label="My Active Jobs" to="/my-active-jobs" />
        </Navigation>
      ))
      .add('with icon size', () => (
        <Navigation color="GREEN">
          <Navigation.Item iconSize="lg" icon="Trashcan" label="Jobs" to="/jobs" />
          <Navigation.Item iconSize="lg" icon="Mail" label="Posted" to="/posted" />
          <Navigation.Item iconSize="lg" icon="Search" label="My Active Jobs" to="/my-active-jobs" />
        </Navigation>
      ))
      .add('without icons', () => (
        <Navigation color="GREEN" data-e2e-id="default-navigation">
          <Navigation.Item label="Jobs" to="/jobs" />
          <Navigation.Item label="Posted" to="/posted" />
          <Navigation.Item label="My Active Jobs" to="/my-active-jobs" />
        </Navigation>
      ))
      .add('with expand button', () => (
        <ExpandState>
          {
            ({ expanded, setExpanded }) => (
              <React.Fragment>
                <Button onClick={ () => setExpanded(!expanded) }>{ expanded ? 'Collapse' : 'Expand' }</Button>
                <Navigation expanded={ expanded } expandedWidth={ 196 } color="GREEN" data-e2e-id="default-navigation">
                  <Navigation.Item icon="Trashcan" label="Jobs" to="/jobs" />
                  <Navigation.Item icon="Mail" label="Posted" to="/posted" />
                  <Navigation.Item icon="Search" label="My Active Jobs" to="/my-active-jobs" />
                </Navigation>
              </React.Fragment>
            )
          }
        </ExpandState>
      ));
  });
};
