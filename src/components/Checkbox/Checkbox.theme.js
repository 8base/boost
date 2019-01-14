// @flow

import { createStyledTag, createComponentTheme } from '../../utils';

const name = 'checkbox';

const themeSquare = createComponentTheme(`${name}Square`, ({ COLORS, SIZES }: *): * => ({
  root: {
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
    },
  },
}));

const themeIcon = createComponentTheme(`${name}Icon`, ({ COLORS }: *): * => ({
  root: {
    color: COLORS.PRIMARY,
  },
}));

const themeText = createComponentTheme(`${name}Text`, ({ COLORS }: *): * => ({
  root: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: COLORS.BODY_TEXT,
  },

  modifiers: {
    nowrap: {
      whiteSpace: 'nowrap',
    },
  },
}));

const theme = {
  ...themeSquare,
  ...themeIcon,
  ...themeText,
};

const CheckboxWrapperTag = createStyledTag(`${name}Wrapper`, {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const CheckboxSquareTag = createStyledTag(`${name}Square`, {
  position: 'relative',
  width: '24px',
  height: '24px',
  transition: 'all .15s ease-in-out',
});

const CheckboxIconTag = createStyledTag(`${name}Icon`, props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  opacity: props.checked ? 1 : 0,
  transition: 'all .15s ease-in-out',
}));

const CheckboxTag = createStyledTag(`${name}Tag`, {
  display: 'none',
});

const CheckboxTextTag = createStyledTag(`${name}Text`, props => ({
  paddingLeft: props.label ? '12px' : '0',
  cursor: 'pointer',
}));

export { theme, CheckboxSquareTag, CheckboxTag, CheckboxWrapperTag, CheckboxTextTag, CheckboxIconTag };

