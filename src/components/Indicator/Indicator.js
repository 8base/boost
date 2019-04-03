// @flow

import React from 'react';

import { IndicatorContainerTag, IndicatorTag } from './Indicator.theme';
import { Text } from '../Text';

type IndicatorProps = {
  status: 'enabled' | 'disabled',
  children: React$Node,
};

const Indicator = ({ children, status }: IndicatorProps) => (
  <IndicatorContainerTag tagName="span">
    <IndicatorTag tagName="span" status={ status } />
    <Text>
      { children }
    </Text>
  </IndicatorContainerTag>
);

Indicator.defaultProps = {
  status: 'disabled',
};

export { Indicator };


