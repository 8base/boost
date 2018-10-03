// @flow

import React from 'react';

import { FlexLayout } from '../../FlexLayout/FlexLayout';

type FormSectionProps = {
  children: React$Node,
};

const FormSection = ({ children, ...rest }: FormSectionProps) => (
  <FlexLayout
    { ...rest }
    stretch
    gap="sm"
    direction="column"
  >
    { children }
  </FlexLayout>
);

export { FormSection };

