// @flow

import { DropdownPlate as Plate } from './DropdownPlate';
import { DropdownHead as Head, theme as dropdownHeadTheme } from './DropdownHead';
import { DropdownBody as Body, theme as dropdownBodyTheme } from './DropdownBody';

const Dropdown = {
  Head,
  Body,
  Plate,
};

const theme = {
  ...dropdownHeadTheme,
  ...dropdownBodyTheme,
}

export {
  Dropdown,
  theme,
}
