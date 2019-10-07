import React from 'react';

import { SecondaryNavigation } from '../../';

export default {
  title: 'Components/SecondaryNavigation',
  component: SecondaryNavigation,
};

export const defaultStory = () => (
  <SecondaryNavigation>
    <SecondaryNavigation.Item label="First item" />
    <SecondaryNavigation.Item label="Second item" className="active" />
    <SecondaryNavigation.Item label="Third item" />
    <SecondaryNavigation.Item label="Fourth item" />
  </SecondaryNavigation>
);

defaultStory.story = {
  name: 'default',
};

export const defaultWithActions = () => (
  <SecondaryNavigation>
    <SecondaryNavigation.Item label="First item" />
    <SecondaryNavigation.Item
      label="Second item"
      className="active"
      actions={ [{ label: 'Action', onClick: () => null }] }
    />
    <SecondaryNavigation.Item label="Third item" />
    <SecondaryNavigation.Item label="Fourth item" />
  </SecondaryNavigation>
);

defaultWithActions.story = {
  name: 'default with actions',
};
