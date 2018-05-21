// @flow

const PALETTE = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',

  DARK_GRAY1: '#323c47',
  DARK_GRAY2: '#3E4650',
  DARK_GRAY3: '#444D57',

  GRAY1: '#878c93',
  GRAY2: '#5C6268',
  GRAY3: '#737A82',
  GRAY4: '#7e868e',

  LIGHT_GRAY1: '#d0d7dd',
  LIGHT_GRAY2: '#DCE1E6',
  LIGHT_GRAY3: '#E5E9EC',
  LIGHT_GRAY4: '#EDF0F2',
  LIGHT_GRAY5: '#f4f7f9',

  YELLOW: '#ffd012',
  PURPLE: '#9975D0',
  PINK: '#EB518E',

  LIGHT_BLUE: '#4DA1FF',
  BLUE: '#1968cb',

  LIGHT_GREEN: '#a6e50f',
  GREEN: '#00bb6e',

  LIGHT_RED: '#ff6d4a',
  RED: '#eb4235',

  LIGHT_GRAY: '#f4f7f9',
  GRAY: '#7e868e',
  DARK_GRAY: '#323c47',
};

const COLORS = {
  ...PALETTE,

  PRIMARY: PALETTE.LIGHT_BLUE,
  SUCCESS: PALETTE.LIGHT_GREEN,
  DANGER: PALETTE.LIGHT_RED,

  PRIMARY_BORDER_COLOR: PALETTE.LIGHT_GRAY1,
  PRIMARY_BUTTON_BACKGROUND_COLOR: PALETTE.LIGHT_BLUE,
  SECONDARY_BUTTON_BACKGROUND_COLOR: PALETTE.WHITE,
  PRIMARY_LINK_COLOR: PALETTE.LIGHT_BLUE,

  DIVIDER_COLOR: PALETTE.LIGHT_GRAY4,
  DISABLED_TEXT_COLOR: PALETTE.LIGHT_GRAY1,
  PRIMARY_TEXT_COLOR: PALETTE.DARK_GRAY1,
  SECONDARY_TEXT_COLOR: PALETTE.GRAY1,

  LIGHT_DIVIDER_COLOR: 'rgba(255, 255, 255, 0.12)',
  LIGHT_DISABLED_TEXT_COLOR: 'rgba(255, 255, 255, 0.38)',
  LIGHT_PRIMARY_TEXT_COLOR: 'rgba(255, 255, 255, 1)',
  LIGHT_SECONDARY_TEXT_COLOR: 'rgba(255, 255, 255, 0.87)',
};

export { COLORS };