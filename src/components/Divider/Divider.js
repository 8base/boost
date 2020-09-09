// @flow

import React from 'react';

import { DividerOuter, DividerInner, DividerTitle } from './Divider.theme';

type DividerProps = {
  children?: React$Node,
  noOffset?: boolean;
};

const Divider = ({ children, noOffset = false, ...rest }: DividerProps) => (
  <DividerOuter noOffset={ noOffset } { ...rest }>
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

