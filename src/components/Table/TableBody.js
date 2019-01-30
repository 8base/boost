// @flow
import React, { PureComponent } from 'react';

import { AsyncContent } from '../AsyncContent';
import { TableNoData } from './TableNoData';
import { TableAction } from './TableAction';
import { Grid } from '../Grid';
import { Button } from '../Button';
import { createThemeTag } from '../../theme/createThemeTag';


type TableBodyProps<T: Object> = {
  children?: (T, index: number) => React$Node,
  data?: T[],
  loading?: boolean,
  action?: React$Node,
  onActionClick?: () => void,
};

const name = 'tableBody';

const [TableBodyTag, themeBody] = createThemeTag(name, ({ COLORS }: *): * => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'auto',

    borderBottom: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
  },
}));

const [TableBodyInnerTag, themeInner] = createThemeTag(`${name}Inner`, {
  root: {
    display: 'grid',
    position: 'relative',
    gridAutoRows: 'min-content',
    height: '100%',
  },
});

const theme = {
  ...themeBody,
  ...themeInner,
};

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
      <TableBodyTag { ...rest }>
        <AsyncContent loading={ loading } stretch>
          {
            hasBodyRows
              ? (
                <TableBodyInnerTag modifiers={ rest } tagName={ Grid.Layout }>
                  { React.Children.toArray(data && children && data.map(children)) }
                </TableBodyInnerTag>
              )
              : <TableNoData />
          }
        </AsyncContent>
        { this.renderTableAction() }
      </TableBodyTag>
    );
  }
}

export { TableBody, theme };
