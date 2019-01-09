// @flow
import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type GridLayoutProps = {|
  children?: React$Node,
  /** when true then stretch to full width */
  stretch?: boolean,
  /** possbile spaces between grid items */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'none',
  /** when true then set inline-grid */
  inline?: boolean,
  /** possible paddings of the grid layout */
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none',
  /** justify-content css rule*/
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly',
  /** align-content css rule*/
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly',
  /** justify-items css rule */
  justifyItems?: 'start' | 'end' | 'center' | 'stretch',
  /** align-items css rule */
  alignItems?: 'start' | 'end' | 'center' | 'stretch',
|};

const name = 'gridLayout';

const theme = createComponentTheme(name, {
  modifiers: {
    gap: {
      xs: {
        gridGap: '4px',
      },
      sm: {
        gridGap: '8px',
      },
      md: {
        gridGap: '16px',
      },
      lg: {
        gridGap: '24px',
      },
      xl: {
        gridGap: '32px',
      },
      xxl: {
        gridGap: '40px',
      },
      none: {},
    },
    padding: {
      none: { },
      xs: {
        padding: '4px',
      },
      sm: {
        padding: '8px',
      },
      md: {
        padding: '12px',
      },
      lg: {
        padding: '20px',
      },
      xl: {
        padding: '28px',
      },
    },
    stretch: {
      flex: 1,
      width: '100%',
      maxWidth: '100%',
    },
  },
  defaults: {
    gap: 'none',
    padding: 'none',
  },
});

const StyledTag = createStyledTag(name, (props) => {
  const style = props.style || {};

  style.display = props.inline ? 'inline-grid' : 'grid';

  if (props.columns) {
    style.gridTemplateColumns = props.columns;
  }

  if (props.rows) {
    style.gridTemplateRows = props.rows;
  }

  if (props.autoColumns) {
    style.gridAutoColumns = props.autoColumns;
  }

  if (props.areas) {
    style.gridTemplateAreas = props.areas.map((item) => `"${item.join(' ')}"`).join(' ');
  }

  if (props.justifyContent) {
    style.justifyContent = props.justifyContent;
  }

  if (props.alignContent) {
    style.alignContent = props.alignContent;
  }

  if (props.justifyItems) {
    style.justifyItems = props.justifyItems;
  }

  if (props.alignItems) {
    style.alignItems = props.alignItems;
  }

  if (props.autoFlow) {
    style.gridAutoFlow = props.autoFlow;
  }

  return style;
});

function GridLayout({
  children,
  ...rest
  }: GridLayoutProps) {
  return <StyledTag { ...rest } tagName="div">{ children }</StyledTag>;
}

export { GridLayout, theme };
