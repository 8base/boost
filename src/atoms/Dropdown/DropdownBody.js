// @flow
import fp from 'lodash/fp';
import React, { PureComponent, Fragment } from 'react';
import { type HOC, compose, setDisplayName } from 'recompose';
import onClickOutside from 'react-onclickoutside';
import { Popper } from 'react-popper';
import { Portal } from 'react-portal';

import { createStyledTag, createTheme } from '../../utils'

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
  closeOnClickOutside: boolean,

  /** cloned props */
  isOpen: boolean,
  onCloseDropdown: () => void,
  targetWidth?: number,
|}

const name = 'dropdownBody';

const theme: Theme<DropdownBodyThemeProps> = createTheme(name, {
  modifiers: {
    stretch: {
      width: '100%',
    },

    background: {
      white: {
        backgroundColor: '#fff',
        border: '1px solid #d0d7dd',
        boxShadow: '0 1px 3px 0 rgba(50,50,93,.14), 0 4px 6px 0 rgba(112,157,199,.08)',
      },
      dark: {
        backgroundColor: '#323c47',
        color: '#fff',
      },
      none: {
        backgroundColor: 'transparent',
      },
    },

    padding: {
      none: { padding: '0' },
      xs: { padding: '0.25rem' },
      sm: { padding: '0.5rem' },
      md: { padding: '1rem' },
      lg: { padding: '1.5rem' },
      xl: { padding: '2rem' },
    },
  },
  defaults: {
    background: 'white',
    padding: 'sm',
    borderRadius: 'md',
  },
});

const offsetSizes: { [PropSizes]: string } = {
  none: '0',
  xs: '0, 2.5px',
  sm: '0, 5px',
  md: '0, 7.5px',
  xl: '0, 10px',
  lg: '0, 15px',
};

const DropdownBodyTag = createStyledTag(name, {
  borderRadius: '.25rem',
});

const setPreventOverflow = (preventOverflow?: boolean) => preventOverflow
  ? fp.merge({ preventOverflow: { enabled: false }, hide: { enabled: false }})
  : fp.identity;

const setOffset = (offset?: PropSizes) => offset && offset !== 'none'
  ? fp.merge({ offset: { enabled: true, offset: offsetSizes[offset] }})
  : fp.identity;


class DropdownBodyBase extends PureComponent<DropdownBodyProps> {
  static zIndex = 2000;

  static defaultProps = {
    ...theme[name].defaults,
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
    const { children, onCloseDropdown } = this.props;

    return typeof children === 'function'
      ? children({ closeDropdown: onCloseDropdown })
      : children;
  }

  render() {
    const { isOpen, withPortal, forceRender, ...rest } = this.props;

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
            <DropdownBodyTag tagName="div" {...rest}>
              { renderChildren }
            </DropdownBodyTag>
          </Popper>
        </PortalCondComponent>
      )
      : null
  }
}

const dropdownBodyEnhancer: HOC<DropdownBodyProps, DropdownBodyProps> = compose(
  setDisplayName('DropdownBody'),
  onClickOutside,
);
const DropdownBody = dropdownBodyEnhancer(DropdownBodyBase)

export { DropdownBody, theme }
