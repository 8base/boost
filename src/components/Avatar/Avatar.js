// @flow

import React from 'react';
import { createStyledTag, createComponentTheme } from '../../utils';

type AvatarProps = {|
  src?: string,
  name: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  onPick?: () => void,
  pickLabel?: string,
|};

const name = 'avatar';

const theme = createComponentTheme(name, {
  modifiers: {
    size: {
      xs: {
        width: '16px',
        height: '16px',
      },
      sm: {
        width: '32px',
        height: '32px',
      },
      md: {
        width: '48px',
        height: '48px',
      },
      lg: {
        width: '80px',
        height: '80px',
      },
      xl: {
        width: '100px',
        height: '100px',
      },
      stretch: {
        width: '100%',
        height: '100%',
      },
    },
  },
  defaults: {
    size: 'lg',
  },
});

const AvatarHandleTag = createStyledTag(`${name}Handle`, (props: *) => ({
  position: 'absolute',
  bottom: '-30%',
  left: '0',
  right: '0',
  height: '30%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

  background: 'rgba(0, 0, 0, .75)',
  fontSize: '8px',
  transition: 'all .15s ease-in-out',
  userSelect: 'none',
  color: props.theme.COLORS.LIGHT_GRAY1,
}));

const COLORS = ['#ffd012', '#a6e50f', '#00bb6e', '#9975d0', '#4da1ff', '#1968cb', '#ff6d4a', '#EB518E', '#eb4235'];

const getBackgroundColorByName = (name: ?string) => {
  const index = name ? ((name.charCodeAt(0) - 64) % COLORS.length) : 0;

  return COLORS[index];
};

const AvatarTag = createStyledTag(name, (props) => ({
  borderRadius: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: getBackgroundColorByName(props.name),
  color: props.theme.COLORS.DARK_GRAY1,

  [`&:hover ${AvatarHandleTag}`]: {
    bottom: 0,
  },
}));

const AvatarImgTag = createStyledTag(`${name}Img`, {
  width: '100%',
});

function Avatar({
  src,
  name,
  onPick,
  pickLabel,
  ...rest
  }: AvatarProps) {
  return (
    <AvatarTag { ...rest } name={ name } tagName="div">
      {
        src ? <AvatarImgTag tagName="img" src={ src } /> : (name ? name[0].toUpperCase() : 'A')
      }
      {
        (onPick && pickLabel)
        &&
        <AvatarHandleTag onClick={ onPick }>{ pickLabel }</AvatarHandleTag>
      }
    </AvatarTag>
  );
}

export { Avatar, theme };
