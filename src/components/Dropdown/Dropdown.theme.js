// @flow

import { createStyledTag, createComponentTheme } from '../../utils';
import { theme as dropdownHeadTheme } from './DropdownHead.theme';
import { theme as dropdownBodyTheme } from './DropdownBody.theme';

const name = 'dropdown';

const dropdownTheme = createComponentTheme(name, {
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
  defaults: {},
});

const DropdownTag = createStyledTag(name, {});

const theme = {
  ...dropdownTheme,
  ...dropdownHeadTheme,
  ...dropdownBodyTheme,
};


export {
  theme,
  DropdownTag,
};

