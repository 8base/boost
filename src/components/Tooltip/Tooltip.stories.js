import React from 'react';
import { css } from '@emotion/core';

const anchorCss = css`
  color: white;

  &:visited {
    color: white;
  }
`;

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
      ))
      .add('with modifiers', () => (
        <Tooltip message={ <a href="https://popper.js.org/popper-documentation.html#modifiers" target="__blank" css={ anchorCss }>See all modifiers here</a> } placement="right" modifiers={{ offset: { offset: '0, -50%' }, flip: { enabled: false }}}>
          <Icon name="HelpCenter" />
        </Tooltip>
      ));
  });
};
