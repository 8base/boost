// @flow

import React from 'react';

export default (asStory: *) => {
  asStory('Components/Switch', module, (story, { Switch, Column }) => {
    story
      .add('common', () => (
        <Column>
          <Switch label="Unchecked" value={ false } />
          <Switch label="Checked" value />
        </Column>
      ));
  });
};
