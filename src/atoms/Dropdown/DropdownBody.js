// @flow
import fp from 'lodash/fp';
import React, { PureComponent, Fragment } from 'react';
import { type HOC, compose, setDisplayName } from 'recompose';
import onClickOutside from 'react-onclickoutside';
import { Popper } from 'react-popper';
import { Portal } from 'react-portal';

import { withDropdownContext } from './DropdownContext';
import { offsetSizes, defaultTheme, DropdownBodyTag } from './DropdownBody.theme';

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

const dropdownBodyEnhancer: HOC<*, DropdownBodyProps> = compose(
  setDisplayName('DropdownBody'),
  withDropdownContext,
  onClickOutside,
);

type DropdownBodyEnhancedProps = HOCBase<typeof dropdownBodyEnhancer>;

class DropdownBodyBase extends PureComponent<DropdownBodyEnhancedProps> {
  static zIndex = 2000;

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
    const { closeOnClickOutside, onCloseDropdown } = this.props;

    closeOnClickOutside && onCloseDropdown && onCloseDropdown();
  }

  getPopperPlacement = () => {
    const { pin, placement = '' } = this.props;
    const popperPin = pin === 'left' ? 'start' : 'end';

    return `${placement}-${popperPin}`;
  }

  getPopperModifiers = () => {
    const { preventOverflow, offset } = this.props;

    return fp.pipe(
      setPreventOverflow(preventOverflow),
      setOffset(offset),
    )({});
  }

  getBodyWidth = () => {
    const { stretch, targetWidth, width } = this.props;

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
            <DropdownBodyTag tagName="div" { ...rest }>
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
