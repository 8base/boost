// @flow

import { createStyledTag, createComponentTheme } from '../../../utils';

const name = 'radio';

const themeCircle = createComponentTheme(`${name}Circle`, ({ COLORS }: *): * => ({
  root: {
    background: COLORS.WHITE,
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
  },
  modifiers: {
    hasError: {
      borderColor: COLORS.DANGER,
    },
  },
}));


const themeCircleInner = createComponentTheme(`${name}InnerCircle`, ({ COLORS }: *): * => ({
  modifiers: {
    color: {
      primary: { backgroundColor: COLORS.PRIMARY },
      secondary: { backgroundColor: COLORS.SECONDARY },
    },
    disabled: {
      backgroundColor: COLORS.GRAY4,
    },
  },
}));

const themeText = createComponentTheme(`${name}Text`, ({ COLORS }: *): * => ({
  root: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: COLORS.MAIN_FONT_SIZE,
  },
}));


const theme = {
  ...themeCircle,
  ...themeCircleInner,
  ...themeText,
};


const RadioWrapperTag = createStyledTag(`${name}Wrapper`, {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const RadioCircleTag = createStyledTag(`${name}Circle`, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '2.5rem',
  height: '2.5rem',

  borderRadius: '50%',
  transition: 'opacity .3s ease',
});

const RadioInnerCircleTag = createStyledTag(`${name}InnerCircle`, props => ({
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginLeft: '-.4rem',
  marginTop: '-.4rem',
  width: '.8rem',
  height: '.8rem',

  borderRadius: '50%',
  opacity: props.selected ? 1 : 0,
}));

const RadioTag = createStyledTag(name, {
  display: 'none',
});

const RadioTextTag = createStyledTag(`${name}Text`, {
  cursor: 'pointer',
  paddingLeft: '1.2rem',
});

export { theme, RadioCircleTag, RadioTag, RadioWrapperTag, RadioInnerCircleTag, RadioTextTag };
