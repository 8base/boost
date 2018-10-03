// @flow

import React from 'react';

import { FlexLayout } from '../../FlexLayout/FlexLayout';
import type { PropLayoutStretch } from '../../../types';

type FormSectionBodyProps = {
  alignItems: PropLayoutStretch,
  children: React$Node,
};

const FormSectionBody = ({ children, ...rest }: FormSectionBodyProps) => {
  return (
    <FlexLayout
      { ...rest }
      stretch
      gap="md"
      direction="column"
    >
      { children }
    </FlexLayout>
  );
};

FormSectionBody.defaultProps = {
  alignItems: 'stretch',
};

export { FormSectionBody };

