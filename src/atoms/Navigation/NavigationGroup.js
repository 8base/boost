import React from 'react';

import { createStyledTag, createTheme } from '../../utils';
import { NavigationItem } from './NavigationItem';

type NavigationGroupProps = {|
  exact?: boolean,
  children?: React.Node,
  label: string,
  to: string,
|};

const name = 'navigationGroup';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const StyledTag = createStyledTag(name, {
  display: 'flex',
  flexDirection: 'column',
});

function NavigationGroup({
  children,
  to,
  label,
  exact,
  ...rest
  }: NavigationGroupProps) {
  return (
    <StyledTag tagName="div" {...rest}>
      <NavigationItem to={to} label={label} kind="primary" exact={exact} />
      {children}
    </StyledTag>
  );
}

export { NavigationGroup, theme };