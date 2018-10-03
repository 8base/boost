// @flow

import { createStyledTag, createTheme } from '../../utils';

const name = 'dropdownHead';

const theme = createTheme(name, {
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

