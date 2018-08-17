// @flow
import React from 'react';

import { Link } from '../typography/Link';

type BreadcrumbsItemProps = {|
  tagName: string | React$ComponentType<*>,
  to: string,
  label?: string,
  component?: React$ComponentType<*>,
|};

const BreadcrumbsItem = ({ tagName, to, label, component: Component, ...rest }: BreadcrumbsItemProps) => React.createElement(
  tagName,
  {
    to,
  },
  Component ? <Component { ...rest } to={ to } label={ label } /> : label,
);

BreadcrumbsItem.defaultProps = {
  tagName: Link,
};

export { BreadcrumbsItem };
