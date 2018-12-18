// @flow

import React from 'react';

import { createStyledTag, createComponentTheme } from '../../utils';

type ButtonGroupProps = {|
  children: React$Node,
|};

const name = 'buttonGroup';

const theme = createComponentTheme(name, {});

const ButtonGroupTag = createStyledTag(name, props => ({
  display: 'flex',
  flexDirection: props.direction,

  '& > *': {
    '&:not(:last-child)': {
      borderRightColor: 'none',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:not(:first-child)': {
      borderLeftColor: 'none',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      marginLeft: '-1px',
    },
  },
}));

const ButtonGroup = ({ children, ...rest }: ButtonGroupProps) => {
  return (
    <ButtonGroupTag { ...rest } tagName="div" >
      { children }
    </ButtonGroupTag>
  );
};

export { ButtonGroup, theme };
