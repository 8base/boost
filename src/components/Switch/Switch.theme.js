// @flow

import { createStyledTag, createComponentTheme, getThemeColors } from '../../utils';

const name = 'switch';

const themeSwitch = createComponentTheme(name, {
  root: {
    height: '36px',
  },
});

const themeApperance = createComponentTheme(`${name}Appearance`, {
  root: {
    height: '24px',
    width: '48px',
    borderRadius: '24px',
  },
});

const themeLabel = createComponentTheme(`${name}Label`, ({ COLORS }: *) => ({
  root: {
    fontSize: COLORS.OVERLINE,
    color: COLORS.GRAY1,
  },
}));

const theme = {
  ...themeSwitch,
  ...themeApperance,
  ...themeLabel,
};


const SwitchTag = createStyledTag(name, {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const SwitchInputTag = createStyledTag(`${name}Input`, {
  display: 'none',
});

const SwitchApperanceTag = createStyledTag(`${name}Appearance`, props => ({
  display: 'flex',
  backgroundColor: getThemeColors(props)[props.value ? 'PRIMARY' : 'DISABLED_COLOR'],
  position: 'relative',

  '&:before': {
    content: '\'\'',
    position: 'absolute',
    width: '20px',
    height: '20px',
    borderRadius: '20px',
    backgroundColor: '#fff',
    left: `${props.value ? 26 : 2}px`,
    top: '2px',
    zIndex: 1,
    transition: '.4s',
  },
}));

const SwitchLabelTag = createStyledTag(`${name}Label`, {
  marginLeft: '8px',
  userSelect: 'none',
});

export { theme, SwitchTag, SwitchInputTag, SwitchApperanceTag, SwitchLabelTag };
