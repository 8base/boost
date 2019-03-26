// @flow
import React, { PureComponent } from 'react';

import { createThemeTag } from '../../theme/createThemeTag';

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

const [TableHeaderCellTag, theme] = createThemeTag(name, ({ SIZES, COLORS }: *) => ({
  root: props => ({
    display: 'flex',
    alignItems: 'center',
    cursor: props.cursor,

    padding: '0 16px',
    fontSize: SIZES.OVERLINE_1,
    lineHeight: SIZES.OVERLINE_1_LH,
    textTransform: 'uppercase',
    fontWeight: 700,
  }),

  modifiers: {
    bordered: {
      borderLeft: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,

      '&:last-child': {
        borderRight: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
      },
    },
  },
}));

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
    const { children, ...rest } = this.props;

    return (
      <TableHeaderCellTag { ...rest } onClick={ this.onSort } tagName={ Row }>
        <span>{ children }</span>
        <If condition={ !!rest.order }>
          <Icon name={ rest.order === 'ASC' ? 'ChevronTop' : 'ChevronDown' } size="xs" />
        </If>
      </TableHeaderCellTag>
    );
  }
}

export { TableHeaderCell, theme };
