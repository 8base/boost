// @flow

import { createStyledTag, createComponentTheme } from '../../utils';

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


const themeCircleInner = createComponentTheme(`${name}CircleInner`, ({ COLORS }: *): * => ({
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
    fontSize: COLORS.BODY_TEXT,
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

  width: '16px',
  height: '16px',

  borderRadius: '50%',
  transition: 'opacity .3s ease',
});

const RadioCircleInnerTag = createStyledTag(`${name}CircleInner`, props => ({
  display: 'block',
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginLeft: '-4px',
  marginTop: '-4px',
  width: '8px',
  height: '8px',

  borderRadius: '50%',
  opacity: props.selected ? 1 : 0,
}));

const RadioTag = createStyledTag(name, {
  display: 'none',
});

const RadioTextTag = createStyledTag(`${name}Text`, {
  cursor: 'pointer',
  paddingLeft: '12px',
});

export { theme, RadioCircleTag, RadioTag, RadioWrapperTag, RadioCircleInnerTag, RadioTextTag };
