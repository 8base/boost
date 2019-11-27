// @flow
import React, { useCallback, useState, useEffect } from 'react';

import { Checkbox } from '../Checkbox';
import { TableBodyCell } from './TableBodyCell';
import { TableBodyRow } from './TableBodyRow';
import type { TableBulderProps } from './TableBuilder';

type TableBuilderBodyRowProps = {
  columns: $PropertyType<TableBulderProps, 'columns'>,
  gridColumns: string,
  rowData: Object,
  condensed?: $PropertyType<TableBulderProps, 'condensed'>,
  withSelection?: $PropertyType<TableBulderProps, 'withSelection'>,
  renderCell?: $PropertyType<TableBulderProps, 'renderCell'>,
  expandedRowRender?: $PropertyType<TableBulderProps, 'expandedRowRender'>,
  isExpanded?: boolean,
  onExpand?: (key: string) => void,
  isSelected?: boolean,
  onSelectRow?: (key: string) => void,
};

// eslint-disable-next-line prefer-arrow-callback
const TableBuilderBodyRow = React.memo<TableBuilderBodyRowProps>(function TableBuilderBodyRow({
  gridColumns,
  columns,
  withSelection,
  rowData = {},
  renderCell,
  isExpanded,
  expandedRowRender,
  onExpand,
  onSelectRow,
  isSelected,
  ...rest
}: TableBuilderBodyRowProps) {
  const expandRow = useCallback(() => {
    onExpand && onExpand(rowData.id);
  }, [onExpand, rowData.id]);

  const onChangeSelect = useCallback(() => {
    onSelectRow && onSelectRow(rowData.id);
  }, [onSelectRow, rowData.id]);

  const [expandRowIsRendered, setExpandRowIsRendered] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setExpandRowIsRendered(true);
    }
  }, [isExpanded]);

  return (
    <React.Fragment>
      <TableBodyRow columns={ gridColumns } expanded={ isExpanded } modifiers={ rest }>
        <If condition={ !!withSelection }>
          <TableBodyCell justifyContent="center" modifiers={ rest }>
            <Checkbox onChange={ onChangeSelect } checked={ isSelected } />
          </TableBodyCell>
        </If>
        { columns.map(column => (
          <TableBodyCell key={ column.name } modifiers={ rest }>
            { /* TODO: [V2] we should pass object as argument in `renderCell` - ({ column, rowData, ...rest }) */ }
            { renderCell
              ? renderCell(column, rowData, { expandRow, isExpanded })
              : rowData[column.name] }
          </TableBodyCell>
        )) }
      </TableBodyRow>

      <If condition={ expandRowIsRendered }>
        <TableBodyRow columns={ gridColumns } hidden={ !isExpanded } modifiers={ rest }>
          { /* $FlowFixMe */ }
          { expandedRowRender({ rowData, isExpanded }) }
        </TableBodyRow>
      </If>
    </React.Fragment>
  );
});

export { TableBuilderBodyRow };
