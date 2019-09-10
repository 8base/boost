// @flow

import React, { Component } from 'react';
import fp from 'lodash/fp';
import { compose, withStateHandlers, branch } from 'recompose';
import { Manager } from 'react-popper';

import { DropdownContext } from './DropdownContext';
import { DropdownTag } from './Dropdown.theme';
import { DropdownHead } from './DropdownHead';
import { DropdownBody } from './DropdownBody';

type DropdownControlledProps = {|
  /** Open state of the dropdown */
  isOpen: boolean,
  /** When true then  plate */
  stretch?: boolean,
  /** Callback to close dropdown */
  onCloseDropdown?: () => void,
  /** Callback to open dropdown */
  onOpenDropdown?: () => void,
  children: React$Node,
  css?: Object,
|}

type DropdownUncontroledProps = {|
  /** Default opened state for the uncontorlled mode */
  defaultOpen?: boolean,
  /** When true then  plate */
  stretch?: boolean,
  children: React$Node,
  css?: Object,
|}

type DropdownContextData = {|
  isOpen: boolean,
  toggleDropdown: () => void,
  closeDropdown?: () => void,
  openDropdown?: () => void,
  targetWidth?: number,
  outsideClickIgnoreClass: string,
|}


/** When component has defaultOpen prop then adds hoc with isOpen state */
const dropDownEnhancer: any = compose(
  branch(
    (props) => !fp.isNil(props.defaultOpen),
    withStateHandlers(
      (props): { isOpen: boolean } => ({ isOpen: props.defaultOpen }),
      {
        onOpenDropdown: () => () => ({ isOpen: true }),
        onCloseDropdown: () => () => ({ isOpen: false }),
      },
    ),
  ),
);


const DropdownPlate = dropDownEnhancer(
  class DropdownPlate extends Component<DropdownControlledProps> {
  instanceIndex: number;
  dropdownRef: ?HTMLElement;

  /** needs for the onclickoutside ignore target */
  static instancesCount = 0;

  constructor(props: DropdownControlledProps) {
    super(props);

    this.instanceIndex = DropdownPlate.instancesCount++;
  }

  toggleDropdown = () => {
    const { isOpen, onOpenDropdown, onCloseDropdown } = this.props;

    isOpen
      ? onCloseDropdown && onCloseDropdown()
      : onOpenDropdown && onOpenDropdown();
  }

  setDropdownRef = (ref: *) => {
    this.dropdownRef = ref;
  }

  getDropdownWidth = () => {
    return this.dropdownRef ? this.dropdownRef.offsetWidth : undefined;
  }

  getIgnoreClickOutsideClass = () => `ignore-react-onclickoutside-${this.instanceIndex}`;

  render() {
    const { children, onCloseDropdown, onOpenDropdown, isOpen, ...rest } = this.props;

    const contextData: DropdownContextData = {
      isOpen,
      toggleDropdown: this.toggleDropdown,
      closeDropdown: onCloseDropdown,
      openDropdown: onOpenDropdown,
      targetWidth: this.getDropdownWidth(),
      outsideClickIgnoreClass: this.getIgnoreClickOutsideClass(),
    };

    return (
      <DropdownContext.Provider value={ contextData }>
        <DropdownTag { ...rest } tag="div" insideRef={ this.setDropdownRef }>
          <Manager tag={ false }>
            { children }
          </Manager>
        </DropdownTag>
      </DropdownContext.Provider>
    );
  }
  },
);

const Dropdown = (props: DropdownControlledProps | DropdownUncontroledProps) => (
  <DropdownPlate { ...props } />
);

Dropdown.displayName = 'Dropdown';

Dropdown.Head = DropdownHead;
Dropdown.Body = DropdownBody;

export { Dropdown };
