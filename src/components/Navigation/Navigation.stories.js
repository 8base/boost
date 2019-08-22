import React, { useState } from 'react';

const Expander = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return children({ expanded, setExpanded });
};

export default (asStory) => {
  asStory('Components/Navigation', module, (story, { Navigation, Button }) => {
    story
      .add('default', () => (
        <Expander>
          {
            ({ expanded, setExpanded }) => (
              <React.Fragment>
                <Button data-e2e-id="expand" onClick={ () => setExpanded(!expanded) }>{ expanded ? 'Collapse' : 'Expand' }</Button>
                <Navigation expanded={ expanded } color="GREEN" data-e2e-id="default-navigation">
                  <Navigation.Item icon="Trashcan" label="Jobs" to="/jobs" />
                  <Navigation.Item icon="Mail" label="Posted" to="/posted" />
                  <Navigation.Item icon="Search" label="My Active Jobs" to="/my-active-jobs" />
                </Navigation>
              </React.Fragment>
            )
          }
        </Expander>
      ))
      .add('with icon size', () => (
        <Navigation color="GREEN">
          <Navigation.Item iconSize="lg" icon="Trashcan" label="Jobs" to="/jobs" />
          <Navigation.Item iconSize="lg" icon="Mail" label="Posted" to="/posted" />
          <Navigation.Item iconSize="lg" icon="Search" label="My Active Jobs" to="/my-active-jobs" />
        </Navigation>
      ));
  });
};
