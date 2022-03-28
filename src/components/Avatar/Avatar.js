// @flow

import React from 'react';
import { theme, AvatarImgTag, AvatarTag, AvatarHandleTag, AvatarHandleFullWidthTag, AvatarHandleIconContainerTag } from './Avatar.theme';
import { Icon } from '../Icon';

type AvatarProps = {
  src?: string,
  firstName?: string,
  lastName?: string,
  /** avatar size ('xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl') */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  onPick?: () => void,
  pickLabel?: string,
  /** shape of the avatar ('circle' | 'square' | 'rounded') */
  variant?: 'circle' | 'square' | 'rounded',
  /** appearance of the pick element ('bottom' | 'fullWidth') */
  pickVariant?: 'bottom' | 'fullWidth',
};

const DEFAULT_INITIALS = 'A';

const CAMERA_ICON_SIZE = {
  xs: '8px',
  sm: '12px',
  md: '18px',
  lg: '18px',
  xl: '24px',
  xxl: '24px',
};

const getInitials = (firstName?: string, lastName?: string): string => {
  if (firstName && lastName) return firstName.slice(0, 1) + lastName.slice(0, 1);

  if (firstName && !lastName) return firstName.slice(0, 1);

  if (!firstName && lastName) return lastName.slice(0, 1);

  return DEFAULT_INITIALS;
};

function Avatar({
  src,
  firstName,
  lastName,
  onPick,
  pickLabel,
  pickVariant,
  ...rest
}: AvatarProps) {
  const initials = getInitials(firstName, lastName);

  return (
    <AvatarTag pickVariant={ pickVariant } { ...rest } firstName={ firstName } tagName="div">
      {
        src ? <AvatarImgTag modifiers={ rest } tagName="img" src={ src } /> : initials
      }
      {
        (onPick && pickVariant === 'bottom')
        &&
        <AvatarHandleTag modifiers={ rest } onClick={ onPick }>{ pickLabel }</AvatarHandleTag>
      }
      {
        (onPick && pickVariant === 'fullWidth')
        &&
        <AvatarHandleFullWidthTag modifiers={ rest } onClick={ onPick } >
          <AvatarHandleIconContainerTag modifiers={ rest }>
            <Icon name="Camera" color="WHITE" size="custom" customSize={ CAMERA_ICON_SIZE[rest.size || 'lg'] } />
            <div>
              { pickLabel }
            </div>
          </AvatarHandleIconContainerTag>
        </AvatarHandleFullWidthTag>
      }
    </AvatarTag>
  );
}


Avatar.defaultProps = {
  size: 'lg',
  variant: 'circle',
  pickVariant: 'bottom',
  pickLabel: 'Change',
};

export { Avatar, theme };
