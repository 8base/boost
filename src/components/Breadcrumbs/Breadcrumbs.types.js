export type BreadcrumbsRoutes = Array<{
  path: string,
  component?: React$ComponentType<*>,
  label?: string,
  matchOptions?: Object,
}>;

export type BreadcrumbsMatchPath = (path: string, options: Object) => boolean;
