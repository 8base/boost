// @flow
import React, { PureComponent } from 'react';

import { AsyncContent } from '../../molecules/AsyncContent';
import { TableNoData } from './TableNoData';
import { TableAction } from './TableAction';
import { Grid } from '../Grid';
import { Button } from '../Button';
import { createStyledTag, createTheme } from '../../utils';

type TableBodyProps<T: Object> = {
  children?: (T, index: number) => React$Node,
  data?: T[],
  loading?: boolean,
  action?: React$Node,
  onActionClick?: () => void,
};

const name = 'tableBody';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyWrapperTag = createStyledTag(name, props => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  borderBottom: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
}));

const TableBodyTag = createStyledTag(name, {
  display: 'grid',
  position: 'relative',
  gridAutoRows: 'min-content',
  height: '100%',
});

class TableBody extends PureComponent<TableBodyProps<*>> {
  renderTableAction = () => {
    const { action, onActionClick } = this.props;

    if (typeof action === 'string') {
      return (
        <TableAction>
          <Button onClick={ onActionClick }>{ action }</Button>
        </TableAction>
      );
    } else if (!!action) {
      return (
        <TableAction>
          { action }
        </TableAction>
      );
    } else {
      return null;
    }
  }

  render() {
    const { loading, data, children, ...rest } = this.props;
    const hasBodyRows = data && data.length > 0;

    return (
      <TableBodyWrapperTag>
        <AsyncContent loading={ loading } stretch>
          {
            hasBodyRows
              ? (
                <TableBodyTag { ...rest } tagName={ Grid.Layout }>
                  { React.Children.toArray(data && children && data.map(children)) }
                </TableBodyTag>
              )
              : <TableNoData />
          }
        </AsyncContent>
        { this.renderTableAction() }
      </TableBodyWrapperTag>
    );
  }
}

export { TableBody, theme };
