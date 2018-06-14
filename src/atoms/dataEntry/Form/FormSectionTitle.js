// @flow

import React from 'react';
import { createStyledTag, createTheme } from 'utils';

type FormSectionTitleProps = {|
  children?: string,
  text?: string,
  size?: PropSizes,
|}

const name = 'formSectionTitle';

const theme = createTheme(name, {
  modifiers: {
    size: {
      xs: {
        fontSize: '1rem',
      },
      sm: {
        fontSize: '1.2rem',
      },
      md: {
        fontSize: '1.4rem',
      },
      lg: {
        fontSize: '1.6rem',
      },
      xl: {
        fontSize: '1.8rem',
      },
    },
  },
  defaults: {
  },
});

const FormSectionTitleTag = createStyledTag(name, {
  fontWeight: 600,
});

const FormSectionTitle = ({ children, text, ...rest }: FormSectionTitleProps) => (
  <FormSectionTitleTag { ...rest } tagName="span">{ children || text }</FormSectionTitleTag>
);

export { FormSectionTitle, theme };
