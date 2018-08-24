// @flow
import fp from 'lodash/fp';
import React, { PureComponent, Fragment } from 'react';
import { type HOC, compose, setDisplayName, withProps } from 'recompose';
import onClickOutside from 'react-onclickoutside';
import { Popper } from 'react-popper';
import { Portal } from 'react-portal';

import { withDropdownContext } from './DropdownContext';
import { offsetSizes, defaultTheme, DropdownBodyTag } from './DropdownBody.theme';
import type { PropSizes } from '../../types';
import { Z_INDEX } from '../../theme/zIndex';

/**
 * @prop {*} background options for background color
 * @prop {*} padding options for body padding
 * @prop {*} stretch stretch drodpown body width to the target width
 */
type DropdownBodyThemeProps = {|
  background?: 'white' | 'dark' | 'none',
  padding?: PropSizes,
  stretch?: boolean,
|}

/**
 * @prop {*} children takes either react dom element or function
 * @prop {*} placement default content position relative target
 * @prop {*} pin default content align relative target
 * @prop {*} offset set body offset relative target
 * @prop {*} width manual set width
 * @prop {*} preventOverflow popper js option https://popper.js.org/popper-documentation.html#modifiers..preventOverflow
 * @prop {*} forceRender prevent unmount dropdown content on close
 * @prop {*} withPortal replace dropdown body to the dom root by the portal
 */
type DropdownBodyProps = {|
  ...DropdownBodyThemeProps,

  children: React$Node | ({ closeDropdown: () => void }) => React$Node,
  placement?: 'top' | 'left' | 'bottom' | 'right',
  pin?: 'left' | 'right',
  offset?: PropSizes,
  width?: number,
  preventOverflow?: boolean,
  forceRender?: boolean,
  withPortal?: boolean,
  closeOnClickOutside?: boolean,
|}

const setPreventOverflow = (preventOverflow?: boolean) => preventOverflow
  ? fp.merge({ preventOverflow: { enabled: false }, hide: { enabled: false }})
  : fp.identity;

const setOffset = (offset?: PropSizes) => offset && offset !== 'none'
  ? fp.merge({ offset: { enabled: true, offset: offsetSizes[offset] }})
  : fp.identity;

const setFlip = fp.merge({
  flip: { behavior: ['bottom'] },
  boundariesElement: 'window',
});

const dropdownBodyEnhancer: HOC<*, DropdownBodyProps> = compose(
  setDisplayName('Dropdown.Body'),
  withDropdownContext,
  withProps(
    ({ dropdown: { outsideClickIgnoreClass }}) => ({ outsideClickIgnoreClass }),
  ),
  onClickOutside,
);

type DropdownBodyEnhancedProps = HOCBase<typeof dropdownBodyEnhancer>;

class DropdownBodyBase extends PureComponent<DropdownBodyEnhancedProps> {
  static zIndex = Z_INDEX.DROPDOWN;

  static defaultProps = {
    ...defaultTheme,
    placement: 'bottom',
    pin: 'left',
    offset: 'xs',
    isOpen: false,
    forceRender: false,
    withPortal: false,
    closeOnClickOutside: true,
  }

  handleClickOutside = () => {
    const { closeOnClickOutside, dropdown: { closeDropdown }} = this.props;

    closeOnClickOutside && closeDropdown && closeDropdown();
  }

  getPopperPlacement = () => {
    const { pin, placement = '' } = this.props;
    const popperPin = pin === 'left' ? 'start' : 'end';

    return `${placement}-${popperPin}`;
  }

  getPopperModifiers = () => {
    const { preventOverflow, offset } = this.props;

    return fp.pipe(
      setFlip,
      setPreventOverflow(preventOverflow),
      setOffset(offset),
    )({});
  }

  getBodyWidth = () => {
    const { stretch, dropdown: { targetWidth }, width } = this.props;

    return stretch
      ? targetWidth
      : width && `${width}rem`;
  }

  getBodyChildren = () => {
    const { children, dropdown: { closeDropdown }} = this.props;

    return typeof children === 'function'
      ? children({ closeDropdown })
      : children;
  }

  render() {
    const { withPortal, forceRender, dropdown: { isOpen }, ...rest } = this.props;

    const popperPlacement = this.getPopperPlacement();
    const popperModifiers = this.getPopperModifiers();
    const bodyWidth = this.getBodyWidth();
    const renderChildren = this.getBodyChildren();
    const PortalCondComponent = withPortal ? Portal : Fragment;

    return forceRender || isOpen
      ? (
        <PortalCondComponent>
          <Popper
            placement={ popperPlacement }
            modifiers={ popperModifiers }
            style={{
              zIndex: DropdownBodyBase.zIndex,
              width: bodyWidth,
              display: isOpen ? 'block' : 'none',
            }}
          >
            <DropdownBodyTag { ...rest } tagName="div">
              { renderChildren }
            </DropdownBodyTag>
          </Popper>
        </PortalCondComponent>
      )
      : null;
  }
}

const DropdownBody = dropdownBodyEnhancer(DropdownBodyBase);

export { DropdownBody };
export type { DropdownBodyThemeProps };
