// @flow
import React, { PureComponent } from 'react';
import styled from 'react-emotion';

import { createStyledTag, createComponentTheme } from '../../utils';
import { Row } from '../FlexLayout';
import { Icon } from '../Icon';

const DEFAULT_SORT = 'DESC';

type TableHeaderCellProps = {
  children?: React$Node,
  onSort?: ('ASC' | 'DESC') => void,
  enableSort?: boolean,
  order?: 'ASC' | 'DESC',
  cursor?: 'pointer' | 'default' | 'inherit',
};

const name = 'tableHeaderCell';

const theme = createComponentTheme(name, ({ SIZES }: *) => ({
  root: {
    padding: '0 16px',
    fontSize: SIZES.OVERLINE_1,
    lineHeight: SIZES.OVERLINE_1_LH,
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  modifiers: {
  },
  defaults: {
  },
}));

const TableHeaderCellTag = createStyledTag(name, props => ({
  display: 'flex',
  alignItems: 'center',
  cursor: props.cursor,
}));

const IconTransform = styled('div')(props => {
  const styles = {};

  if (props.order === 'ASC') {
    styles.transform = 'rotate(180deg)';
  }

  return styles;
});

class TableHeaderCell extends PureComponent<TableHeaderCellProps> {

  onSort = () => {
    const { onSort, order, enableSort } = this.props;

    if (enableSort && onSort) {
      switch (order) {
        case 'ASC': return onSort && onSort('DESC');
        case 'DESC': return onSort && onSort('ASC');
        default: return onSort && onSort(DEFAULT_SORT);
      }
    }
  }

  render() {
    const { children, order, cursor, ...rest } = this.props;

    return (
      <TableHeaderCellTag { ...rest } cursor={ cursor } onClick={ this.onSort } tagName={ Row }>
        <span>{ children }</span>
        <If condition={ !!order }>
          <IconTransform order={ order }>
            <Icon name="ChevronDown" size="md" />
          </IconTransform>
        </If>
      </TableHeaderCellTag>
    );
  }
}

export { TableHeaderCell, theme };
