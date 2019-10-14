// @flow

import React from 'react';

import { FlexLayoutTag } from './FlexLayout.theme';
import type { PropSizes, PropLayout, PropLayoutStretch } from '../../types';

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
export type FlexLayoutCommonProps = {
  children: React$Node,
  justifyContent?: PropLayoutStretch,
  alignContent?: PropLayout,
  alignItems?: PropLayoutStretch,
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
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
  onClick?: ((event: MouseEvent) => void) | (() => void),
  tagName?: string,
  inline?: boolean,
}

type FlexLayoutProps = {
  ...FlexLayoutCommonProps,
  direction?: 'row' | 'column',
}

const FlexLayout = ({ tagName, ...rest }: FlexLayoutProps) => {
  return <FlexLayoutTag { ...rest } tagName={ tagName } />;
};

FlexLayout.defaultProps = {
  tagName: 'div',
  gap: 'sm',
  direction: 'row',
  justifyContent: 'start',
  alignContent: 'start',
  alignItems: 'start',
  flexWrap: 'nowrap',
  offestX: 'none',
  offestY: 'none',
  cursor: 'inherit',
  stretch: false,
  grow: false,
  growChildren: false,
};

const Row = (props: FlexLayoutCommonProps) => <FlexLayout { ...props } direction="row" />;

const Column = (props: FlexLayoutCommonProps) => <FlexLayout { ...props } direction="column" />;

export { Row, Column, FlexLayout };
export type { FlexLayoutProps };
