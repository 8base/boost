import React from 'react';
import color from 'color';
import fp from 'lodash/fp';

import { Icon } from '../typography/Icon';
import { createStyledTag, createTheme } from '../../utils';
import { PALETTE } from '../../theme';

type NavigationItemProps = {|
  exact?: boolean,
  to: string,
  component?: React$Node,
  color?: $Keys<typeof PALETTE>
|};

const name = 'navigationItem';

const theme = createTheme(name, {
  modifiers: {
    color: fp.mapValues((color) => ({
      backgroundColor: color,
    }), PALETTE),
  },
  defaults: {},
});

const StyledTag = createStyledTag(name, (props) => ({
  color: props.theme.COLORS.DARK_PRIMARY_TEXT_COLOR,
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
  width: '6rem',
  height: '6rem',
  justifyContent: 'center',
  alignItems: 'center',
});

const NavigationItemLabel = createStyledTag(`${name}Label`, {
  color: '#fff',
  display: 'none',
  alignItems: 'center',
  textTransform: 'uppercase',
  fontWeight: 600,
  paddingRight: '2rem',
});

const NavigationItem = ({ icon, label, ...rest }: NavigationItemProps) => (
  <StyledTag { ...rest }>
    <NavigationItemIcon>
      <Icon name={ icon } color="WHITE" size="lg" />
    </NavigationItemIcon>
    { label && <NavigationItemLabel className="NavigationItem-label">{ label }</NavigationItemLabel> }
  </StyledTag>
);

NavigationItem.defaultProps = {
  ...theme[name].defaults,
  tagName: 'a',
};

export { NavigationItem, theme };
