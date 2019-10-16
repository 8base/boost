// @flow
import { COLORS } from './colors';

export type FontConstants = {|
  color: string,
  fontSize: string,
  lineHeight: string,
  fontWeight: string,
  letterSpacing: string,
|}

export const FONTS: { [key: string]: FontConstants } = {
  H1: {
    fontFamily: 'Poppins',
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '32px',
    lineHeight: '48px',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },

  H2: {
    fontFamily: 'Poppins',
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },

  H3: {
    fontFamily: 'Poppins',
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
    letterSpacing: '0.2px',
  },

  H4: {
    fontFamily: 'Poppins',
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },

  SUBTITLE: {
    fontFamily: 'Poppins',
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },

  BODY_1: {
    fontFamily: 'Poppins',
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  BODY_2: {
    fontFamily: 'Poppins',
    color: COLORS.GRAY_50,
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  BODY_3: {
    fontFamily: 'Poppins',
    color: COLORS.GRAY_40,
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  BUTTON: {
    fontFamily: 'Poppins',
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '600',
    letterSpacing: '0.2px',
  },

  LINK: {
    fontFamily: 'Poppins',
    color: COLORS.BLUE_30,
    fontSize: '13px',
    lineHeight: '20px',
    fontWeight: '400',
    letterSpacing: '0.2px',
  },

  OVERLINE_1: {
    fontFamily: 'Poppins',
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },

  OVERLINE_2: {
    fontFamily: 'Poppins',
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },

  SMALL_1: {
    fontFamily: 'Poppins',
    color: COLORS.GRAY_40,
    fontSize: '10px',
    lineHeight: '16px',
    fontWeight: '500',
    letterSpacing: '0.2px',
  },

  SMALL_2: {
    fontFamily: 'Poppins',
    color: COLORS.SECONDARY_TEXT_COLOR,
    fontSize: '10px',
    lineHeight: '16px',
    fontWeight: '500',
    letterSpacing: '0.2px',
    textTransform: 'uppercase',
  },
};

