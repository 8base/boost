import React from 'react';

export default (asStory) => {
  asStory('MOLECULES/ButtonGroup', module, (story, { Button, ButtonGroup }) => {
    story
      .add('default', () => (
        <ButtonGroup>
          <Button text="Button 1" />
          <Button text="Button 2" color="secondary" />
          <Button text="Button 2" variant="outlined" />
        </ButtonGroup>
      ));
  });
};
