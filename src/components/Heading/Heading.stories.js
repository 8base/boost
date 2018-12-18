import React from 'react';

export default (asStory) => {
  asStory('Components/Heading', module, (story, { Heading }) => {
    story
      .add('with type modifiers', () => (
        <React.Fragment>
          <Heading type="h1">Heading 1</Heading>
          <Heading type="h2">Heading 2</Heading>
          <Heading type="h3">Heading 3</Heading>
          <Heading type="h4">Heading 4</Heading>
          <Heading type="h5">Heading 5</Heading>
          <Heading type="h6">Heading 6</Heading>
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

