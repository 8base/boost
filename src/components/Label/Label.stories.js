import React from 'react';

export default (asStory) => {
  asStory('Components/Label', module, (story, { Label, Column }) => {
    story
      .add('common', () => (
        <Column gap="md">
          <Label text="Default Label" />
          <Label kind="primary" text="Primary Label" />
          <Label kind="secondary" text="Secondary Label" />
          <Label kind="disabled" text="Disabled Label" />
        </Column>
      ));
  });
};

