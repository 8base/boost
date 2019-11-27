// @flow
import React, { PureComponent } from 'react';

import { createThemeTag } from '../../theme/createThemeTag';
import { Row } from '../FlexLayout';
import { justifyContentStyles, alignItemsStyles } from '../../constants';
import type { PropLayoutStretch, PropLayout } from '../../types';
import { Icon } from '../Icon';

const DEFAULT_SORT = 'DESC';

type TableHeaderCellProps = {
  children?: React$Node,
  onSort?: ('ASC' | 'DESC') => void,
  enableSort?: boolean,
  order?: 'ASC' | 'DESC',
  cursor?: 'pointer' | 'default' | 'inherit',
  justifyContent?: PropLayoutStretch,
  alignItems?: PropLayout,
};

const name = 'tableHeaderCell';

const [TableHeaderCellTag, theme] = createThemeTag(name, ({ COLORS, FONTS }: *) => ({
  root: props => ({
    display: 'flex',
    justifyContent: justifyContentStyles[props.justifyContent],
    alignItems: alignItemsStyles[props.alignItems],
    cursor: props.cursor,

    padding: '0 24px',
    ...FONTS.OVERLINE_2,
  }),

  modifiers: {
    bordered: {
      '&:not(:first-of-type)': {
        borderLeft: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,
      },
    },
  },
}));

class TableHeaderCell extends PureComponent<TableHeaderCellProps> {

  static defaultProps = {
    alignItems: 'center',
    justifyContent: 'start',
  }

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
