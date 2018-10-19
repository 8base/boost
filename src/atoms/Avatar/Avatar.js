// @flow

import React from 'react';
import { createStyledTag, createTheme } from '../../utils';

type AvatarProps = {|
  src?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  onPick?: () => void,
  pickLabel?: string,
|};

const name = 'avatar';

const theme = createTheme(name, {
  modifiers: {
    size: {
      xs: {
        width: '2rem',
        height: '2rem',
      },
      sm: {
        width: '3rem',
        height: '3rem',
      },
      md: {
        width: '5rem',
        height: '5rem',
      },
      lg: {
        width: '8rem',
        height: '8rem',
      },
      xl: {
        width: '10rem',
        height: '10rem',
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

const AvatarHandleTag = createStyledTag(`${name}Handle`, {
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
  fontSize: '0.8rem',
  transition: 'all .15s ease-in-out',
  userSelect: 'none',
  color: '#d0d7dd',
});

const AvatarTag = createStyledTag(name, (props) => ({
  borderRadius: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  backgroundColor: props.theme.COLORS.LIGHT_GRAY1,
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
  onPick,
  pickLabel,
  ...rest
  }: AvatarProps) {
  return (
    <AvatarTag { ...rest } tagName="div">
      {
        src ? <AvatarImgTag tagName="img" src={ src } /> : 'A'
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
