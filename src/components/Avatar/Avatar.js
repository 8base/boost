// @flow

import React from 'react';
import { theme, AvatarImgTag, AvatarTag, AvatarHandleTag } from './Avatar.theme';

type AvatarProps = {
  src?: string,
  name?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  onPick?: () => void,
  pickLabel?: string,
};

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
        src ? <AvatarImgTag modifiers={ rest } tagName="img" src={ src } /> : (name ? name.slice(0, 2).toUpperCase() : 'A')
      }
      {
        (onPick && pickLabel)
        &&
        <AvatarHandleTag modifiers={ rest } onClick={ onPick }>{ pickLabel }</AvatarHandleTag>
      }
    </AvatarTag>
  );
}


Avatar.defaultProps = {
  size: 'lg',
};

export { Avatar, theme };
