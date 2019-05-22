// @flow

import React from 'react';

import { Icon } from '../Icon';
import { NavigationItemTag, NavigationItemLabel, NavigationItemIcon, NavigationItemLabelPreview } from './Navigation.theme';
import { COLORS } from '../../theme';
import type { IconProps } from '../Icon/Icon';

type NavigationItemProps = {
  exact?: boolean,
  to?: string,
  component?: React$Node,
  color?: $Keys<typeof COLORS>,
  icon?: string,
  label?: string,
  iconSize?: $PropertyType<IconProps, 'size'>,
};

const NavigationItem = ({ icon, label, iconSize, ...rest }: NavigationItemProps) => (
  <NavigationItemTag { ...rest }>
    <NavigationItemIcon modifiers={ rest }>
      <If condition={ icon === undefined && typeof label === 'string' && label.length > 0 }>
        <NavigationItemLabelPreview>{ label && label.charAt(0).toUpperCase() }</NavigationItemLabelPreview>
      </If>
      <If condition={ typeof icon === 'string' }>
        <Icon name={ icon || '' } color="WHITE" size={ iconSize } />
      </If>
    </NavigationItemIcon>
    { label && (
      <NavigationItemLabel modifiers={ rest } className="NavigationItem-label">
        { label }
      </NavigationItemLabel>
    ) }
  </NavigationItemTag>
);

NavigationItem.defaultProps = {
  tagName: 'a',
};

export { NavigationItem };
