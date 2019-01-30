// @flow

import React, { PureComponent } from 'react';

import { createThemeTag } from '../../theme/createThemeTag';


type GridBoxProps = {
  children?: React$Node,
  /** grid-box direction */
  direction?: 'column' | 'row',
  /** when true then set box scrollable */
  scrollable?: boolean,
  /** align-self css rule */
  alignSelf?: 'start' | 'end' | 'center' | 'stretch' | 'flex-end' | 'flex-start',
  /** justify-self css rule */
  justifySelf?: 'start' | 'end' | 'center' | 'stretch' | 'flex-end' | 'flex-start',
  /** justify-content css rule*/
  justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly' | 'flex-end' | 'flex-start',
  /** justify-content css rule*/
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly' | 'flex-end' | 'flex-start',
  /** align-content css rule*/
  alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly' | 'flex-end' | 'flex-start',
  /** text-align css rule*/
  textAlign?: 'left' | 'right' | 'center' | 'justify',
};

const name = 'gridBox';

const [GridBoxTag, theme] = createThemeTag(name, {
  root: (props) => {
    const style: any = {
      display: 'flex',
      position: 'relative',
    };

    if (props.columnStart) {
      style.gridColumnStart = props.columnStart;
    }

    if (props.columnEnd) {
      style.gridColumnEnd = props.columnEnd;
    }

    if (props.rowStart) {
      style.gridRowStart = props.rowStart;
    }

    if (props.rowEnd) {
      style.gridRowEnd = props.rowEnd;
    }

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

    if (props.textAlign) {
      style.textAlign = props.textAlign;
    }

    return style;
  },
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
});

class GridBox extends PureComponent<GridBoxProps> {
  static defaultProps = {
    direction: 'column',
  };

  render() {
    const { children, scrollable, direction = 'column', ...rest } = this.props;

    if (scrollable) {
      return (
        <GridBoxTag { ...rest } tagName="div" direction={ direction }>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: direction }}>{ children }</div>
        </GridBoxTag>
      );
    }

    return (
      <GridBoxTag { ...rest } tagName="div" direction={ direction }>{ children }</GridBoxTag>
    );
  }
}

export { GridBox, theme };
