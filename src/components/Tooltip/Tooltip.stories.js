import React from 'react';

export default (asStory) => {
  asStory('Components/Tooltip', module, (story, { Tooltip, Icon }) => {
    story
      .add('default', () => (
        <Tooltip message="It is trap! You was catched!">
          <Icon name="HelpCenter" />
        </Tooltip>
      ))
      .add('with click trigger', () => (
        <Tooltip trigger="click" message="It is trap! You was catched!">
          <Icon name="HelpCenter" />
        </Tooltip>
      ))
      .add('with renderProps', () => (
        <Tooltip trigger="click" message="It is trap! You was catched!">
          { ({ toggleTooltip }) => (
            <Icon name="HelpCenter" onClick={ toggleTooltip } />
          ) }
        </Tooltip>
      ));
  });
};

