// @flow

import React from 'react';

import { PaperTag } from './Paper.theme';
import type { PropSizes } from '../../types';

type PaperProps = {
  children?: React$Node,
  /** possible padding */
  padding?: PropSizes | 'xxl',
  /** when true then stetch container to the parent */
  stretch?: boolean,
  /** modifier to regulate border radius */
  borderRadius?: 'top' | 'bottom' | 'all',
  /** custom styles */
  style?: Object,
};

function Paper({
  children,
  ...rest
  }: PaperProps) {
  return <PaperTag tagName="div" { ...rest }>{ children }</PaperTag>;
}

Paper.defaultProps = {
  padding: 'none',
  borderRadius: 'all',
};

export { Paper };
