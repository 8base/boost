// @flow

import { createStyledTag, createTheme } from '../../../utils';

const name = 'Switch';

const theme = createTheme(name, {
  modifiers: {},
  defaults: {},
});

const SwitchTag = createStyledTag(name, {
  display: 'flex',
  alignItems: 'center',
  height: '4rem',
  cursor: 'pointer',
});

const SwitchInputTag = createStyledTag(name, {
  display: 'none',
});

const SwitchApperanceTag = createStyledTag(name, props => ({
  display: 'flex',
  height: '2.6rem',
  width: '5.2rem',
  borderRadius: '2.6rem',
  backgroundColor: props.theme.COLORS[props.value ? 'LIGHT_BLUE' : 'LIGHT_GRAY1'],
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

const SwitchLabelTag = createStyledTag(name, props => ({
  fontFamily: 'Poppins',
  fontSize: '1.2rem',
  marginLeft: '1rem',
  userSelect: 'none',
  color: props.theme.COLORS.GRAY1,
}));

export { theme, SwitchTag, SwitchInputTag, SwitchApperanceTag, SwitchLabelTag };
