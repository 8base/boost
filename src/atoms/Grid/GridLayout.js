// @flow
import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type GridLayoutProps = {|
  children?: React$Node,
  gap?: 'xs' | 'md' | 'lg' | 'none',
  inline?: boolean,
  padding?: 'xs' | 'md' | 'lg' | 'none',
|};

const name = 'gridLayout';

const theme = createTheme(name, {
  modifiers: {
    gap: {
      xs: {
        gridGap: '1rem',
      },
      md: {
        gridGap: '1.5rem',
      },
      lg: {
        gridGap: '2rem',
      },
      none: {},
    },
    padding: {
      xs: {
        padding: '1rem',
      },
      md: {
        padding: '1.5rem',
      },
      lg: {
        padding: '2rem',
      },
      none: {},
    },
    stretch: {
      flex: 1,
    },
  },
  defaults: {
    gap: 'none',
    padding: 'none',
  },
});

const StyledTag = createStyledTag(name, (props) => {
  const style = {};

  style.display = props.inline ? 'inline-grid' : 'grid';

  if (props.columns) {
    style.gridTemplateColumns = props.columns;
  }

  if (props.autoColumns) {
    style.gridAutoColumns = props.autoColumns;
  }

  if (props.areas) {
    style.gridTemplateAreas = props.areas.map((item) => `"${item.join(' ')}"`).join(' ');
  }

  return style;
});

function GridLayout({
  children,
  ...rest
  }: GridLayoutProps) {
  return <StyledTag tagName="div" { ...rest }>{ children }</StyledTag>;
}

export { GridLayout, theme };
