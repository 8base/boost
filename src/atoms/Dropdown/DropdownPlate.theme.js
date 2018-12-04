// @flow

import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'dropdownHead';

const theme = createComponentTheme(name, {
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
  defaults: {},
});

const DropdownPlateTag = createStyledTag(name, {});

export {
  theme,
  DropdownPlateTag,
};

