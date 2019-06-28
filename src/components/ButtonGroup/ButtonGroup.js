// @flow

import React from 'react';

import { ButtonGroupTag } from './ButtonGroup.theme';

type ButtonGroupProps = {
  children: React$Node,
  stretch?: Boolean,
};


const ButtonGroup = ({ children, ...rest }: ButtonGroupProps) => {
  return (
    <ButtonGroupTag { ...rest } tagName="div" >
      { children }
    </ButtonGroupTag>
  );
};

export { ButtonGroup };
