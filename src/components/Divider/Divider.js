// @flow

import React from 'react';

import { DividerOuter, DividerInner, DividerTitle } from './Divider.theme';

type DividerProps = {
  children?: React$Node,
};

const Divider = ({ children, ...rest }: DividerProps) => (
  <DividerOuter { ...rest }>
    <Choose>
      <When condition={ !!children }>
        <DividerInner />
        <DividerTitle>
          { children }
        </DividerTitle>
        <DividerInner />
      </When>
      <Otherwise>
        <DividerInner />
      </Otherwise>
    </Choose>
  </DividerOuter>
);

export { Divider };

