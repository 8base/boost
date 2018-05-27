// @flow

import React from 'react';
import { Text } from '../../typography/Text';

type SubTitleProps = {|
  children?: string,
  text?: string,
  size?: PropSizes,
|}

const FormSubTitle = ({ children, text, size }: SubTitleProps) => (
  <Text size={ size } bold>{ children || text }</Text>
);

export { FormSubTitle };
