import React from 'react';

export default (asStory) => {
  asStory('Components/Label', module, (story, { Label }) => {
    story
      .add('with kind modifiers', () => (
        <React.Fragment>
          <Label kind="primary" text="Primary Label" />
          <Label kind="secondary" text="Secondary Label" />
          <Label kind="disabled" text="Disabled Label" />
        </React.Fragment>
      ));
  });
};

