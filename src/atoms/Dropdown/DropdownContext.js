// @flow
import React, { createContext } from 'react';


type DropdownContextType = {|
  targetWidth?: number,
  isOpen: boolean,
  toggleDropdown: () => void,
  closeDropdown:() => void,
  outsideClickIgnoreClass: string,
|}

const DropdownContext = createContext({
  dropdown: {
    outsideClickIgnoreClass: '',
  },
});


const withDropdownContext: HOCProps<{ dropdown: DropdownContextType }> = (Component: React$Element<*>) => (props: *) => {
  return (
    <DropdownContext.Consumer>
      { dropdownData => <Component { ...props } dropdown={ dropdownData } /> }
    </DropdownContext.Consumer>
  );
};


export { DropdownContext, withDropdownContext };
export type { DropdownContextType };
