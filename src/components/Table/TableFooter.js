// @flow
import React from 'react';

import { Grid } from '../Grid';
import { createThemeTag } from '../../theme/createThemeTag';


type TableFooterProps = {
  children?: React$Node,
};

const name = 'tableFooter';

const [TableFooterTag, theme] = createThemeTag(name, {
  root: {
    display: 'grid',
    padding: '16px',
  },
});


function TableFooter({
  children,
  ...rest
  }: TableFooterProps) {
  return <TableFooterTag { ...rest } tagName={ Grid.Box }>{ children }</TableFooterTag>;
}

export { TableFooter, theme };
