// @flow
import { COLORS } from './colors';

export type FontConstants = {|
  color: string,
  fontSize: string,
  lineHeight: string,
  fontWeight: string,
  letterSpacing: string,
  textTransform?: string,
|}

export const FONTS: { [key: string]: FontConstants } = {
  H1: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '3.2rem',
    lineHeight: '4.8rem',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },

  H2: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '1.8rem',
    lineHeight: '2.8rem',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },

  H3: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    fontWeight: '600',
    letterSpacing: '0.2px',
  },

  H4: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '1.4rem',
    lineHeight: '2rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },

  H5: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    fontWeight: '600',
    letterSpacing: '0.2px',
  },

  SUBTITLE: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '1.4rem',
    lineHeight: '2rem',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },

  BODY_1: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '1.3rem',
    lineHeight: '1.7',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  BODY_2: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: '1.3rem',
    lineHeight: '1.7',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  BODY_3: {
    color: COLORS.LIGHT_TEXT_COLOR,
    fontSize: '1.3rem',
    lineHeight: '1.7',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  BUTTON: {
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '1.4rem',
    lineHeight: '2rem',
    fontWeight: '600',
    letterSpacing: '0.2px',
  },

  LINK: {
    color: COLORS.BLUE_30,
    fontSize: '1.3rem',
    lineHeight: '2rem',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  OVERLINE_1: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  OVERLINE_2: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },

  SMALL_1: {
    color: COLORS.LIGHT_TEXT_COLOR,
    fontSize: '1rem',
    lineHeight: '1.6rem',
    fontWeight: '500',
    letterSpacing: '0.2px',
  },

  SMALL_2: {
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: '1rem',
    lineHeight: '1.6rem',
    fontWeight: '500',
    letterSpacing: '0.2px',
    textTransform: 'uppercase',
  },
};

