// @flow

import React from 'react';
import { createStyledTag, createTheme } from '../../utils';

type AvatarProps = {|
  src?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
|};

const name = 'avatar';

const theme = createTheme(name, {
  modifiers: {
    size: {
      xs: {
        width: '1.5rem',
        height: '1.5rem',
      },
      sm: {
        width: '3.6rem',
        height: '3.6rem',
      },
      md: {
        width: '5rem',
        height: '5rem',
      },
      lg: {
        width: '7rem',
        height: '7rem',
      },
      xl: {
        width: '10rem',
        height: '10rem',
      },
    },
  },
  defaults: {
    size: 'md',
  },
});

const AvatarTag = createStyledTag(name, (props) => ({
  borderRadius: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: props.theme.COLORS.LIGHT_GRAY1,
  color: props.theme.COLORS.DARK_GRAY1,
}));

const AvatarImgTag = createStyledTag(`${name}Img`, {
  width: '100%',
});

function Avatar({
  src,
  ...rest
  }: AvatarProps) {
  return (
    <AvatarTag { ...rest } tagName="div">
      {
        src ? <AvatarImgTag tagName="img" src={ src } /> : 'A'
      }
    </AvatarTag>
  );
}

export { Avatar, theme };
