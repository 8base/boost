import React from 'react';

import { createStyledTag, createTheme } from '../../utils';

type GridBoxProps = {|
  children?: React$Node,
  direction?: 'column' | 'row',
  scrollable?: boolean,
  /** align-self css rule */
  alignSelf?: 'start' | 'end' | 'center' | 'stretch',
  /** justify-self css rule */
  justifySelf?: 'start' | 'end' | 'center' | 'stretch',
  /** justify-content css rule*/
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly',
  /** justify-content css rule*/
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly',
  /** align-content css rule*/
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly',
|};

const name = 'gridBox';

const theme = createTheme(name, {
  modifiers: {
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
  },
  defaults: {
    direction: 'column',
  },
});

const StyledTag = createStyledTag(name, (props) => {
  const style = {
    display: 'flex',
    position: 'relative',
  };

  if (props.column) {
    style.gridColumn = props.column;
  }

  if (props.row) {
    style.gridRow = props.row;
  }

  if (props.justifySelf) {
    style.justifySelf = props.justifySelf;
  }

  if (props.alignSelf) {
    style.alignSelf = props.alignSelf;
  }

  if (props.justifyContent) {
    style.justifyContent = props.justifyContent;
  }

  if (props.alignItems) {
    style.alignItems = props.alignItems;
  }

  if (props.alignContent) {
    style.alignContent = props.alignContent;
  }

  if (props.area) {
    style.gridArea = props.area;
  }

  return style;
});

function GridBox({
  children,
  scrollable,
  direction = 'column',
  ...rest
  }: GridBoxProps) {
  if (scrollable) {
    return (
      <StyledTag { ...rest } tagName="div" direction={ direction }>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: direction }}>{ children }</div>
      </StyledTag>
    );
  }

  return (
    <StyledTag { ...rest } tagName="div" direction={ direction }>{ children }</StyledTag>
  );
}

export { GridBox, theme };
