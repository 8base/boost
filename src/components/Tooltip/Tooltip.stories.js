import React from 'react';
import { css } from '@emotion/core';
import { Tooltip, Icon } from '../../';

const anchorCss = css`
  color: white;

  &:visited {
    color: white;
  }
`;

export default {
  title: 'Components/Tooltip',
};

export const defaultStory = () => (
  <Tooltip message="It is trap! You was catched!">
    <Icon name="HelpCenter" />
  </Tooltip>
);

defaultStory.story = {
  name: 'default',
};

export const withClickTrigger = () => (
  <Tooltip trigger="click" message="It is trap! You was catched!">
    <Icon name="HelpCenter" />
  </Tooltip>
);

withClickTrigger.story = {
  name: 'with click trigger',
};

export const withRenderProps = () => (
  <Tooltip trigger="click" message="It is trap! You was catched!">
    {({ toggleTooltip }) => <Icon name="HelpCenter" onClick={toggleTooltip} />}
  </Tooltip>
);

withRenderProps.story = {
  name: 'with renderProps',
};

export const withModifiers = () => (
  <Tooltip
    message={
      <a
        href="https://popper.js.org/popper-documentation.html#modifiers"
        target="__blank"
        css={anchorCss}
      >
        See all modifiers here
      </a>
    }
    placement="right"
    modifiers={{ offset: { offset: '0, -50%' }, flip: { enabled: false } }}
  >
    <Icon name="HelpCenter" />
  </Tooltip>
);

withModifiers.story = {
  name: 'with modifiers',
};
