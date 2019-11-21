// @flow
import React, { PureComponent } from 'react';

import { AsyncContent } from '../AsyncContent';
import { NoData } from '../NoData';
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
  modifiers?: Object,
  noData?: React$Node,
};

const name = 'tableBody';

const [TableBodyTag, themeBody] = createThemeTag(name, ({ COLORS }: *): * => ({
  root: ({ action }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '1fr',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'auto',

    borderBottom: action ? `1px solid ${COLORS.SECONDARY_BORDER_COLOR}` : 'none',
  }),

  modifiers: {
    bordered: {
      '&:first-of-type': {
        borderTop: `1px solid ${COLORS.SECONDARY_BORDER_COLOR}`,
      },
    },
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
    const { action, onActionClick, modifiers, ...rest } = this.props;

    if (typeof action === 'string') {
      return (
        <TableAction modifiers={{ ...rest, ...modifiers }}>
          <Button onClick={ onActionClick }>{ action }</Button>
        </TableAction>
      );
    } else if (!!action) {
      return (
        <TableAction modifiers={ rest }>
          { action }
        </TableAction>
      );
    } else {
      return null;
    }
  }

  renderContent = () => {
    const { data, children, noData, ...rest } = this.props;

    let rendered = children || null;

    if (typeof children === 'function' && Array.isArray(data) && data.length > 0) {
      rendered = (
        <TableBodyInnerTag modifiers={ rest } tagName={ Grid.Layout }>
          { React.Children.toArray(data.map(children)) }
        </TableBodyInnerTag>
      );
    } else if (!children || (Array.isArray(data) && data.length === 0)) {
      rendered = noData ? noData : <NoData />;
    }

    return rendered;
  };

  render() {
    const { loading, ...rest } = this.props;

    return (
      <TableBodyTag { ...rest }>
        <AsyncContent loading={ loading } stretch>
          { this.renderContent() }
        </AsyncContent>
        { this.renderTableAction() }
      </TableBodyTag>
    );
  }
}

export { TableBody, theme };
