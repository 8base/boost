import React from 'react';

export default (asStory) => {
  asStory('ATOMS/TYPOGRAPHY/Icon', module, (story, { Icon }) => {
    story
      .add('with default modifiers', () => (
        <React.Fragment>
          <Icon name="ChevronDown" />
        </React.Fragment>
      ));
  });
};

