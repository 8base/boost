import React from 'react';

export default (asStory) => {
  asStory('Components/ButtonGroup', module, (story, { Button, ButtonGroup }) => {
    story
      .add('common', () => (
        <ButtonGroup>
          <Button variant="outlined">Button</Button>
          <Button variant="outlined">Button</Button>
          <Button>Button</Button>
          <Button variant="outlined">Button</Button>
        </ButtonGroup>
      ));
  });
};
