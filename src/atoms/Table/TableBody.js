// @flow
import React from 'react';

import { AsyncContent } from '../../molecules/AsyncContent';
import { Grid } from '../Grid';
import { createStyledTag, createTheme } from '../../utils';

type TableBodyProps = {
  children?: React$Node,
  loading?: boolean,
  data?: any[],
};

const name = 'tableBody';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const TableBodyTag = createStyledTag(name, (props: *) => ({
  display: 'grid',
  overflowY: 'auto',
  position: 'relative',
  gridAutoRows: 'min-content',
  borderBottom: `1px solid ${props.theme.COLORS.LIGHT_GRAY1}`,
}));

function TableBody({
  children,
  data,
  loading,
  ...rest
  }: TableBodyProps) {
  return (
    <TableBodyTag { ...rest } tagName={ Grid.Layout }>
      <AsyncContent loading={ loading } stretch>
        {
          Array.isArray(data) && typeof children === 'function'
            ?
            React.Children.toArray(data.map(children))
            :
            children
        }
      </AsyncContent>
    </TableBodyTag>
  );
}

export { TableBody, theme };
