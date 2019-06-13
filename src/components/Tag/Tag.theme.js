import fp from 'lodash/fp';

import { createThemeTag } from '../../theme/createThemeTag';

import { hexToRGBA } from './Tag.utils';

const name = 'tag';

const [TagOuter, themeOuter] = createThemeTag(name, ({ COLORS }: *): * => ({
  root: {
    margin: 0,
    minHeight: '24px',
    padding: '0 12px',
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    border: '1px solid',
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: '0.5px',
  },

  modifiers: {
    color: fp.mapValues(
      (color) => (typeof color === 'string' ? {
        backgroundColor: hexToRGBA(color, 10),
        borderColor: hexToRGBA(color, 40),
        color,
      } : null)
      , COLORS),
  },
}));


const [TagInner, themeInner] = createThemeTag(`${name}Inner`, (): * => ({
  root: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

const theme = {
  ...themeOuter,
  ...themeInner,
};

export {
  TagOuter,
  TagInner,
  theme,
};

