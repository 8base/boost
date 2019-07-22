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

    '&:hover': {
      boxShadow: '0 1px 3px 0 rgba(50,50,93,0.14), 0 4px 6px 0 rgba(112,157,199,0.08)',
    },

    'input:focus + &': {
      boxShadow: 'inset 0 1px 3px 0 rgba(50,50,93,0.14), inset 0 4px 6px 0 rgba(112,157,199,0.08)',
    },

    'input:active + &': {
      boxShadow: 'inset 0 1px 3px 0 rgba(50,50,93,0.14), inset 0 4px 6px 0 rgba(112,157,199,0.08)',
    },
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
    isShown: {
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
  },
});

const [CheckboxTag, themeCheckbox] = createThemeTag(`${name}Tag`, {
  root: {
    opacity: 0,
    position: 'absolute',
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

