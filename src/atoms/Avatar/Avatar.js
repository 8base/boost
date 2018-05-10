// @flow

import React from 'react';
import { createStyledTag, createTheme } from '../../utils';

type AvatarProps = {|
  src: string,
  size?: 'xs' | 'md' | 'lg',
|};

const name = 'avatar';

const theme = createTheme(name, {
  modifiers: {
    size: {
      xs: {
        width: '1.5rem',
        height: '1.5rem',
      },
      md: {
        width: '5rem',
        height: '5rem',
      },
      lg: {
        width: '7rem',
        height: '7rem',
      },
    },
  },
  defaults: {
    size: 'md',
  },
});

const StyledTag = createStyledTag(name, {
  borderRadius: '100%',
});

function Avatar({
  src,
  ...rest
  }: AvatarProps) {
  return <StyledTag tagName="img" src={ src } { ...rest } />;
}

export { Avatar, theme };
