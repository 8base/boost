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
  component: Tooltip,
};

export const defaultStory = () => (
  <Tooltip message="It is trap! You was catched!">
    <Icon name="HelpCenter" />
  </Tooltip>
);

defaultStory.story = {
  name: 'default',
};


export const withPlacement = () => (
  <div style={{ position: 'relative', top: '50px', left: '100px' }}>
    <Tooltip trigger="click" placement="left" message="Left Tooltip">
      <Tooltip trigger="click" placement="top" message="Top Tooltip">
        <Tooltip trigger="click" placement="bottom" message="Bottom Tooltip">
          <Tooltip trigger="click" placement="right" message="Right Tooltip">
            <div style={{ width: '100px', height: '100px', border: '1px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Click Me
            </div>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  </div>
);

withPlacement.story = {
  name: 'with placement',
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
    { ({ toggleTooltip }) => <Icon name="HelpCenter" onClick={ toggleTooltip } /> }
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
        css={ anchorCss }
      >
        See all modifiers here
      </a>
    }
    placement="right"
    modifiers={{ offset: { flip: { enabled: false }}}}
  >
    <Icon name="HelpCenter" />
  </Tooltip>
);

withModifiers.story = {
  name: 'with modifiers',
};
