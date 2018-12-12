// @flow

import { createStyledTag, createComponentTheme } from '../../../utils';

const name = 'switch';

const themeSwitch = createComponentTheme(name, {
  root: {
    height: '4rem',
  },
});

const themeApperance = createComponentTheme(`${name}Appearance`, {
  root: {
    height: '2.6rem',
    width: '5.2rem',
    borderRadius: '2.6rem',
  },
});

const themeLabel = createComponentTheme(`${name}Label`, ({ COLORS }: *) => ({
  root: {
    fontSize: COLORS.SMALL_FONT_SIZE,
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
  backgroundColor: props.theme.COLORS[props.value ? 'PRIMARY' : 'DISABLED_COLOR'],
  position: 'relative',

  '&:before': {
    content: '\'\'',
    position: 'absolute',
    width: '2rem',
    height: '2rem',
    borderRadius: '2rem',
    backgroundColor: '#fff',
    left: `${props.value ? 29 : 3}px`,
    top: '3px',
    zIndex: 1,
    transition: '.4s',
  },
}));

const SwitchLabelTag = createStyledTag(`${name}Label`, {
  marginLeft: '1rem',
  userSelect: 'none',
});

export { theme, SwitchTag, SwitchInputTag, SwitchApperanceTag, SwitchLabelTag };
