// @flow

import React from 'react';

import { FlexLayoutTag } from './FlexLayout.theme';
import type { PropSizes } from '../../types';

type PropLayout = 'start' | 'end' | 'between' | 'around' | 'center'

/**
 * @prop {*} justifyContent css justify-content rule
 * @prop {*} alignContent css align-content rule
 * @prop {*} alignItems css align-items rule
 * @prop {*} gap offset between children
 * @prop {*} offsetX offset between the container and his parent
 * @prop {*} offsetX offset between the container and his parent
 * @prop {*} cursor cursor pointer
 * @prop {*} stretch if true when stretch the container
 * @prop {*} grow set flex-grow: 1
 * @prop {*} growChildren set flex-grow: 1 to all children
 */
export type FlexLayoutCommonProps = {|
  children: React$Node,
  justifyContent?: PropLayout | 'stretch',
  alignContent?: PropLayout,
  alignItems?: PropLayout | 'stretch',
  gap?: PropSizes,
  offsetX?: PropSizes,
  offsetY?: PropSizes,
  offsetTop?: PropSizes,
  offsetBottom?: PropSizes,
  offsetLeft?: PropSizes,
  offsetRight?: PropSizes,
  cursor?: 'pointer' | 'default' | 'inherit',
  stretch?: boolean,
  grow?: boolean,
  growChildren?: boolean,
  onClick?: ((event: MouseEvent) => void) | (() => void)
|}

type FlexLayoutProps = {
  ...FlexLayoutCommonProps,
  direction?: 'row' | 'column',
}

const defaultProps = {
  gap: 'sm',
};

/** component provides interface to render flex layout */
const FlexLayout = (props: FlexLayoutProps) => {
  return <FlexLayoutTag { ...props } tagName="div" />;
};

FlexLayout.defaultProps = defaultProps;

/** component provides interface to render flex row */
const Row = (props: FlexLayoutCommonProps) => <FlexLayout { ...props } direction="row" />;

/** component provides interface to render flex column */
const Column = (props: FlexLayoutCommonProps) => <FlexLayout { ...props } direction="column" />;

export { Row, Column, FlexLayout };
export type { FlexLayoutProps };
