// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'switch';

const [SwitchTag, themeSwitch] = createThemeTag(name, {
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    height: '36px',
  },
});

const [SwitchInputTag, themeInput] = createThemeTag(`${name}Input`, {
  root: {
    display: 'none',
  },
});

const [SwitchApperanceTag, themeApperance] = createThemeTag(`${name}Appearance`, ({ COLORS }: *) => ({
  root: props => ({
    display: 'flex',
    backgroundColor: COLORS[props.value ? 'PRIMARY' : 'GRAY_30'],
    position: 'relative',

    height: '24px',
    width: '48px',
    borderRadius: '24px',

    '&:before': {
      content: '\'\'',
      position: 'absolute',
      width: '20px',
      height: '20px',
      borderRadius: '20px',
      backgroundColor: COLORS.WHITE,
      left: `${props.value ? 26 : 2}px`,
      top: '2px',
      zIndex: 1,
      transition: '.4s',
    },
  }),
}));

const [SwitchLabelTag, themeLabel] = createThemeTag(`${name}Label`, ({ COLORS }: *) => ({
  root: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    marginLeft: '8px',
    userSelect: 'none',
  },
}));

const theme = {
  ...themeInput,
  ...themeSwitch,
  ...themeApperance,
  ...themeLabel,
};


export {
  theme,
  SwitchTag,
  SwitchInputTag,
  SwitchApperanceTag,
  SwitchLabelTag,
};
