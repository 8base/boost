// @flow

import React from 'react';
import { theme, AvatarImgTag, AvatarTag, AvatarHandleTag } from './Avatar.theme';

type AvatarProps = {
  src?: string,
  firstName?: string,
  lastName?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  onPick?: () => void,
  pickLabel?: string,
};

const DEFAULT_INITIALS = 'A';

function Avatar({
  src,
  firstName,
  lastName,
  onPick,
  pickLabel,
  ...rest
  }: AvatarProps) {
  const initials = firstName && lastName ? firstName.slice(0, 1) + lastName.slice(0, 1) : DEFAULT_INITIALS;

  return (
    <AvatarTag { ...rest } firstName={ firstName } tagName="div">
      {
        src ? <AvatarImgTag modifiers={ rest } tagName="img" src={ src } /> : initials
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
