// @flow
/* eslint-disable react/jsx-key */
import React, { Fragment, PureComponent } from 'react';

import { createThemeTag } from '../../theme/createThemeTag';

import type { BreadcrumbsRoutes, BreadcrumbsMatchPath } from './Breadcrumbs.types';
import { getBreadcrumbs } from './Breadcrumbs.utils';
import { BreadcrumbsItem } from './BreadcrumbsItem';
import { BreadcrumbsDividerTag } from './BreadcrumbsDivider';

type BreadcrumbsProps = {
  /* the location pathname */
  pathname: string,
  /* list of breadcrumbs routes */
  routes: BreadcrumbsRoutes,
  /* custom match path function */
  matchPath?: BreadcrumbsMatchPath,
  /* custom breadcrum's item tag */
  itemTagName?: string | React$ComponentType<*>,
};

const name = 'breadcrumbs';

const [BreadcrumbsTag, theme] = createThemeTag(name, ({ FONTS }: *) => ({
  root: {
    ...FONTS.SUBTITLE_1,
  },
}));

class Breadcrumbs extends PureComponent<BreadcrumbsProps> {

  render() {
    const { itemTagName, pathname, routes, matchPath, ...rest } = this.props;
    const breadcrumbs = getBreadcrumbs(pathname, routes, matchPath);

    return (
      <BreadcrumbsTag { ...rest }>
        {
          React.Children.toArray(
            breadcrumbs.map((item, index) => (
              <Fragment>
                <BreadcrumbsItem to={ item.originalPath } { ...{ ...rest, ...item, tagName: itemTagName } } />
                { index !== breadcrumbs.length - 1 && <BreadcrumbsDividerTag tagName="span">></BreadcrumbsDividerTag> }
              </Fragment>
            )),
          )
        }
      </BreadcrumbsTag>
    );
  }
}

export { Breadcrumbs, theme };
