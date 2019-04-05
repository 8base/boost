// @flow

import React from 'react';

export default (asStory: *) => {
  asStory(
    'Components/Indicator',
    module,
    (story, { Indicator, Column }) => {
      story
        .add('common', () => (
          <Column>
            <Indicator>Disabled</Indicator>
            <Indicator status="enabled">Enabled</Indicator>
          </Column>
        ));
    },
  );
};

