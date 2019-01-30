import React from 'react';

import { Icon } from '../Icon';
import { NavigationItemTag, NavigationItemLabel, NavigationItemIcon } from './Navigation.theme';
import { PALETTE } from '../../theme';

type NavigationItemProps = {|
  exact?: boolean,
  to?: string,
  component?: React$Node,
  color?: $Keys<typeof PALETTE>
|};


const NavigationItem = ({ icon, label, ...rest }: NavigationItemProps) => (
  <NavigationItemTag { ...rest }>
    <NavigationItemIcon modifiers={ rest }>
      <Icon name={ icon } color="WHITE" />
    </NavigationItemIcon>
    { label && <NavigationItemLabel modifiers={ rest } className="NavigationItem-label">{ label }</NavigationItemLabel> }
  </NavigationItemTag>
);

NavigationItem.defaultProps = {
  tagName: 'a',
};

export { NavigationItem };
