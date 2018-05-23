// @flow
import fp from 'lodash/fp';

export const getThemeStyle = (props: Object, themeName: string) => fp.getOr({}, ['theme', themeName], props);

export const getThemeColors = (props: Object) => fp.getOr({}, ['theme', 'COLORS'], props);

export const getThemeStyleByCond = (props: Object, themeName: string, styleName: string, cond: boolean) =>
  cond
    ? getThemeStyle(props, themeName)[styleName]
    : {};
