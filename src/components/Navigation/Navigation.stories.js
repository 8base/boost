import React, { useState } from 'react';
import { Navigation, Button } from '../../';

const ExpandState = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return children({ expanded, setExpanded });
};

export default {
  title: 'Components/Navigation',
  component: Navigation,
};

export const defaultStory = () => (
  <Navigation color="GREEN" data-e2e-id="default-navigation">
    <Navigation.Item icon="Trashcan" label="Jobs" to="/jobs" />
    <Navigation.Item icon="Mail" label="Posted" to="/posted" />
    <Navigation.Item icon="Search" label="My Active Jobs" to="/my-active-jobs" />
  </Navigation>
);

defaultStory.story = {
  name: 'default',
};

export const withIconSize = () => (
  <Navigation color="GREEN">
    <Navigation.Item iconSize="lg" icon="Trashcan" label="Jobs" to="/jobs" />
    <Navigation.Item iconSize="lg" icon="Mail" label="Posted" to="/posted" />
    <Navigation.Item iconSize="lg" icon="Search" label="My Active Jobs" to="/my-active-jobs" />
  </Navigation>
);

withIconSize.story = {
  name: 'with icon size',
};

export const withoutIcons = () => (
  <Navigation color="GREEN" data-e2e-id="default-navigation">
    <Navigation.Item label="Jobs" to="/jobs" />
    <Navigation.Item label="Posted" to="/posted" />
    <Navigation.Item label="My Active Jobs" to="/my-active-jobs" />
  </Navigation>
);

withoutIcons.story = {
  name: 'without icons',
};

export const withExpandButton = () => (
  <ExpandState>
    { ({ expanded, setExpanded }) => (
      <React.Fragment>
        <Button onClick={ () => setExpanded(!expanded) }>{ expanded ? 'Collapse' : 'Expand' }</Button>
        <Navigation
          expanded={ expanded }
          expandedWidth={ 196 }
          color="GREEN"
          data-e2e-id="default-navigation"
        >
          <Navigation.Item icon="Trashcan" label="Jobs" to="/jobs" />
          <Navigation.Item icon="Mail" label="Posted" to="/posted" />
          <Navigation.Item icon="Search" label="My Active Jobs" to="/my-active-jobs" />
        </Navigation>
      </React.Fragment>
    ) }
  </ExpandState>
);

withExpandButton.story = {
  name: 'with expand button',
};
