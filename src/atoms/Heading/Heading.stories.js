import React from 'react';

export default (asStory) => {
  asStory('Atoms/Heading', module, (story, { Heading }) => {
    story
      .add('with type modifiers', () => (
        <React.Fragment>
          <Heading type="h1" text="Heading 1" />
          <Heading type="h2" text="Heading 2" />
          <Heading type="h3" text="Heading 3" />
          <Heading type="h4" text="Heading 4" />
          <Heading type="h5" text="Heading 5" />
          <Heading type="h6" text="Heading 6" />
        </React.Fragment>
      ))
      .add('with kind modifiers ', () => (
        <React.Fragment>
          <Heading type="h1" kind="primary">Primary Heading</Heading>
          <Heading type="h2" kind="secondary">Secondary Heading</Heading>
          <Heading type="h3" kind="disabled">Disabled Heading</Heading>
        </React.Fragment>
      ));
  });
};

