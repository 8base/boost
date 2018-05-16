// @flow

import { createStyledTag, createTheme } from 'utils';

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

const DropdownHeadTag = createStyledTag(name, {
  cursor: 'pointer',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  height: 'auto',
  width: 'auto',
  zIndex: 2,
});


const DropdownPopperTarget = createStyledTag(name, {
  display: 'inline-flex',
  width: '100%',
  height: ' 100%',
});


export {
  theme,
  DropdownHeadTag,
  DropdownPopperTarget,
};
