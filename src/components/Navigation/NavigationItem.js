import React from 'react';
import color from 'color';
import fp from 'lodash/fp';

import { Icon } from '../Icon';
import { createStyledTag, createComponentTheme } from '../../utils';
import { PALETTE } from '../../theme';

type NavigationItemProps = {|
  exact?: boolean,
  to?: string,
  component?: React$Node,
  color?: $Keys<typeof PALETTE>
|};

const name = 'navigationItem';

const themeMain = createComponentTheme(name, ({ COLORS }) => ({
  root: {
    color: COLORS.LIGHT_PRIMARY_TEXT_COLOR,
  },
  modifiers: {
    color: fp.mapValues((color) => ({
      backgroundColor: color,
    }), PALETTE),
  },
}));

const themeLabel = createComponentTheme(`${name}Label`, ({ COLORS }) => ({
  color: COLORS.LIGHT_PRIMARY_TEXT_COLOR,
}));

const theme = {
  ...themeMain,
  ...themeLabel,
};

const StyledTag = createStyledTag(name, (props) => ({
  cursor: 'pointer',
  position: 'relative',
  textDecoration: 'none',
  userSelect: 'none',
  display: 'flex',

  '&:hover, &.active': {
    backgroundColor: color(PALETTE[props.color]).darken(0.2).hex(),
  },
}));

const NavigationItemIcon = createStyledTag(`${name}Icon`, {
  display: 'flex',
  width: '60px',
  height: '60px',
  justifyContent: 'center',
  alignItems: 'center',
});

const NavigationItemLabel = createStyledTag(`${name}Label`, {
  display: 'none',
  alignItems: 'center',
  textTransform: 'uppercase',
  fontWeight: 600,
  paddingRight: '20px',
});

const NavigationItem = ({ icon, label, ...rest }: NavigationItemProps) => (
  <StyledTag { ...rest }>
    <NavigationItemIcon>
      <Icon name={ icon } color="WHITE" />
    </NavigationItemIcon>
    { label && <NavigationItemLabel className="NavigationItem-label">{ label }</NavigationItemLabel> }
  </StyledTag>
);

NavigationItem.defaultProps = {
  ...theme[name].defaults,
  tagName: 'a',
};

export { NavigationItem, theme };
