// @flow

import React, { Component } from 'react';
import fp from 'lodash/fp';
import { compose, withStateHandlers, branch, setDisplayName } from 'recompose';
import { Manager } from 'react-popper';

import { DropdownContext } from './DropdownContext';

type DropdownControlledProps = {|
  /** Open state of the dropdown */
  isOpen: boolean,
  /** Callback to close dropdown */
  onCloseDropdown?: () => void,
  /** Callback to open dropdown */
  onOpenDropdown?: () => void,
  children: React$Node,
|}

type DropdownUncontroledProps = {|
  /** Default opened state for the uncontorlled mode */
  defaultOpen?: boolean,
  children: React$Node,
|}

type DropdownContextData = {|
  isOpen: boolean,
  toggleDropdown: () => void,
  closeDropdown?: () => void,
  targetWidth?: number,
  outsideClickIgnoreClass: string,
|}


/** When component has defaultOpen prop then adds hoc with isOpen state */
const dropDownEnhancer: { (any): React$ComponentType<DropdownControlledProps | DropdownUncontroledProps> } = compose(
  setDisplayName('Dropdown.Plate'),
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
  class DropdownPlateBase extends Component<DropdownControlledProps> {
  instanceIndex: number;
  dropdownRef: ?HTMLElement;

  /** needs for the onclickoutside ignore target */
  static instancesCount = 0;

  constructor(props: DropdownControlledProps) {
      super(props);

      this.instanceIndex = DropdownPlateBase.instancesCount++;
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
      const { children, onCloseDropdown, isOpen } = this.props;

      const contextData: DropdownContextData = {
        isOpen,
        toggleDropdown: this.toggleDropdown,
        closeDropdown: onCloseDropdown,
        targetWidth: this.getDropdownWidth(),
        outsideClickIgnoreClass: this.getIgnoreClickOutsideClass(),
      };

      return (
        <DropdownContext.Provider value={ contextData }>
          <div ref={ this.setDropdownRef }>
            <Manager tag={ false }>
              { children }
            </Manager>
          </div>
        </DropdownContext.Provider>
      );
    }
  },
);

export { DropdownPlate };
