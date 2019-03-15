// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'checkbox';

const [CheckboxSquareTag, themeSquare] = createThemeTag(`${name}Square`, ({ COLORS, SIZES }: *): * => ({
  root: {
    position: 'relative',
    width: '24px',
    height: '24px',
    transition: 'all .15s ease-in-out',
    flexShrink: 0,

    background: COLORS.WHITE,
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
  },
  modifiers: {
    hasError: {
      borderColor: COLORS.DANGER,
    },
    disabled: {
      backgroundColor: COLORS.LIGHT_GRAY4,
      cursor: 'auto',
    },
  },
}));


const [CheckboxIconTag, themeIcon] = createThemeTag(`${name}Icon`, ({ COLORS }: *): * => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    transition: 'all .15s ease-in-out',

    color: COLORS.PRIMARY,
    opacity: 0,
  },
  modifiers: {
    checked: {
      opacity: 1,
    },
  },
}));

const [CheckboxTextTag, themeText] = createThemeTag(`${name}Text`, ({ COLORS }: *): * => ({
  root: {
    paddingLeft: '12px',
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: COLORS.BODY_TEXT,
  },

  modifiers: {
    nowrap: {
      whiteSpace: 'nowrap',
    },
  },
}));


const [CheckboxWrapperTag, themeWrapper] = createThemeTag(`${name}Wrapper`, {
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
  },
});

const [CheckboxTag, themeCheckbox] = createThemeTag(`${name}Tag`, {
  root: {
    display: 'none',
  },
});


const theme = {
  ...themeWrapper,
  ...themeCheckbox,
  ...themeSquare,
  ...themeIcon,
  ...themeText,
};


export { theme, CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag };

