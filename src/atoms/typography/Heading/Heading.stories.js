import React from 'react';

export default (asStory) => {
  asStory('ATOMS/TYPOGRAPHY/Heading', module, (story, { Heading }) => {
    story
      .add('with type modifiers', () => (
        <React.Fragment>
          <Heading type="h1">62px - Heading 1</Heading>
          <Heading type="h2">46px - Heading 2</Heading>
          <Heading type="h3">30px - Heading 3</Heading>
          <Heading type="h4">20px - Heading 4</Heading>
          <Heading type="h5">14px - Heading 5</Heading>
          <Heading type="h6">10px - Heading 6</Heading>
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

