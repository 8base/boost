// @flow

import React from 'react';

import { createStyledTag, createComponentTheme, getThemeStyle } from '../../utils';

type ButtonGroupProps = {|
  children: React$Node,
|};

const name = 'buttonGroup';

const theme = createComponentTheme(name, {

  buttonGroup: {
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
      },
    },
  },
});

const ButtonGroupTag = createStyledTag(name, props => ({
  display: 'flex',
  flexDirection: props.direction,

  ...getThemeStyle(props, name).buttonGroup,
}));

const ButtonGroup = ({ children, ...rest }: ButtonGroupProps) => {
  return (
    <ButtonGroupTag { ...rest } tagName="div" >
      { children }
    </ButtonGroupTag>
  );
};

export { ButtonGroup, theme };
