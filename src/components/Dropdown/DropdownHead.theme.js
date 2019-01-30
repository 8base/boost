// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'dropdownHead';

const [DropdownHeadTag, themeHead] = createThemeTag(name, {
  root: {
    cursor: 'pointer',
    display: 'flex',
    flexWrap: 'nowrap',
    height: 'auto',
    width: 'auto',
    zIndex: 2,

  },
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
});

const [DropdownPopperTarget, themePopperTarget] = createThemeTag(`${name}Target`, {
  root: {
    display: 'flex',
    width: '100%',
    height: ' 100%',
  },
});

const theme = {
  ...themeHead,
  ...themePopperTarget,
};

export {
  theme,
  DropdownHeadTag,
  DropdownPopperTarget,
};
