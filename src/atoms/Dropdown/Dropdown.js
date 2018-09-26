// @flow

import { DropdownPlate as Plate } from './DropdownPlate';
import { DropdownHead as Head } from './DropdownHead';
import { DropdownBody as Body } from './DropdownBody';
import { theme as dropdownHeadTheme } from './DropdownHead.theme';
import { theme as dropdownBodyTheme } from './DropdownBody.theme';

const Dropdown = {
  Head,
  Body,
  Plate,
};

const theme = {
  ...dropdownHeadTheme,
  ...dropdownBodyTheme,
};

export {
  Dropdown,
  theme,
};
