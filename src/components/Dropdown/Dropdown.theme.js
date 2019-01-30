// @flow

import { createThemeTag } from '../../theme/createThemeTag';

import { theme as dropdownHeadTheme } from './DropdownHead.theme';
import { theme as dropdownBodyTheme } from './DropdownBody.theme';

const name = 'dropdown';

const [DropdownTag, dropdownTheme] = createThemeTag(name, {
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
  defaults: {},
});

const theme = {
  ...dropdownTheme,
  ...dropdownHeadTheme,
  ...dropdownBodyTheme,
};


export {
  theme,
  DropdownTag,
};

