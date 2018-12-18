// @flow
import type { BreadcrumbsRoutes, BreadcrumbsMatchPath } from './Breadcrumbs.types';

const getPaths = (pathname: string) => pathname.replace(/\/$/, '').split('/').reduce((result, path, index) => [
  ...result,
  index < 2 ? `/${path}` : `${result[result.length - 1]}/${path}`,
], []);


const matchPathDefault: BreadcrumbsMatchPath = (path: string, options = {}) => path === options.path;

const getBreadcrumbs = (
  pathname: string,
  routes: BreadcrumbsRoutes,
  matchPath: BreadcrumbsMatchPath = matchPathDefault,
) => {
  const paths = getPaths(pathname);

  const breadcrumbs = paths.reduce((result, path) => {
    const matchedRoute = routes.find(
      (route) => matchPath ? matchPath(path, { path: route.path, ...(route.matchOptions || {}) }) : route.path === path,
    );

    if (matchedRoute) {
      const match = matchPath(path, { path: matchedRoute.path, ...(matchedRoute.matchOptions || {}) });

      result = [...result, { ...matchedRoute, originalPath: path, match }];
    }

    return result;
  }, []);

  return breadcrumbs;
};


export { getBreadcrumbs };
