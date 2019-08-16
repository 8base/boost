import React from 'react';
import { css } from 'emotion';

const cnTooltip = css`
  background-color: dodgerblue;
  color: white;
  font-size: 1.3rem;
  padding: 0.6em 1.2em;
  box-shadow: 0 0.2em 0.4em rgba(33, 150, 243, 0.15);
`;

export default asStory => {
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
          { ({ toggleTooltip }) => <Icon name="HelpCenter" onClick={ toggleTooltip } /> }
        </Tooltip>
      ))
      .add('with theme', () => (
        <Tooltip defaultOpen trigger="click" message="It is trap! You was catched!" className={ cnTooltip }>
          <Icon name="HelpCenter" />
        </Tooltip>
      ));
  });
};
