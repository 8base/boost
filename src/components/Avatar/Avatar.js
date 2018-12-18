// @flow

import React from 'react';
import { theme, AvatarImgTag, AvatarTag, AvatarHandleTag } from './Avatar.theme';

type AvatarProps = {|
  src?: string,
  name?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  onPick?: () => void,
  pickLabel?: string,
|};

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
