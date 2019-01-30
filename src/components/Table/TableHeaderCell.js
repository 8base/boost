// @flow
import React, { PureComponent } from 'react';
import styled from 'react-emotion';

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

const [TableHeaderCellTag, theme] = createThemeTag(name, ({ SIZES }: *) => ({
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
    const { children, ...rest } = this.props;

    return (
      <TableHeaderCellTag { ...rest } onClick={ this.onSort } tagName={ Row }>
        <span>{ children }</span>
        <If condition={ !!rest.order }>
          <IconTransform modifiers={ rest }>
            <Icon name="ChevronDown" size="md" />
          </IconTransform>
        </If>
      </TableHeaderCellTag>
    );
  }
}

export { TableHeaderCell, theme };
