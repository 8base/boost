// @flow

import React from 'react';
import fp from 'lodash/fp';

import { IconsConsumer } from './IconsProvider';
import { PALETTE } from '../../../theme';
import { SECONDARY_COLORS, MAIN_BRAND_COLORS } from '../../../theme/dsmColors';
import { createStyledTag, createComponentTheme } from '../../../utils';

import * as glyphs from './glyphs';

type IconProps = {
  /** icon name */
  name: string,
  /** icon color */
  color?: $Keys<typeof PALETTE>
    | $Keys<typeof SECONDARY_COLORS>
    | $Keys<typeof MAIN_BRAND_COLORS>,
  /** icon size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'stretch',
  /** custom icon class */
  className?: string,
};

const name = 'icon';

const themeWrapper = createComponentTheme(`${name}Wrapper`, {
  modifiers: {
    color: {
      ...fp.mapValues(
        (color) => ({ color }),
        {
          ...PALETTE,
          ...SECONDARY_COLORS,
          ...MAIN_BRAND_COLORS,
        },
      ),
    },
  },
});


const themeSvg = createComponentTheme(`${name}Svg`, {
  modifiers: {
    size: {
      xs: {
        height: '1rem',
        width: '1rem',
      },
      sm: {
        height: '1.4rem',
        width: '1.4rem',
      },
      md: {
        height: '1.8rem',
        width: '1.8rem',
      },
      lg: {
        height: '2.4rem',
        width: '2.4rem',
      },
      xl: {
        height: '3.6rem',
        width: '3.6rem',
      },
      stretch: {
        height: '100%',
        width: '100%',
      },
    },
  },
});

const themeFonts = createComponentTheme(`${name}Font`, {
  modifiers: {
    size: {
      xs: {
        fontSize: '1rem',
      },
      sm: {
        fontSize: '1.4rem',
      },
      md: {
        fontSize: '1.8rem',
      },
      lg: {
        fontSize: '2.4rem',
      },
      xl: {
        fontSize: '3.6rem',
      },
    },
  },
});

const theme = {
  ...themeWrapper,
  ...themeFonts,
  ...themeSvg,
};

const IconWrapperTag = createStyledTag(`${name}Wrapper`, {
  display: 'inline-flex',
});


const IconSvgTag = createStyledTag(`${name}Svg`, {});
const IconFontTag = createStyledTag(`${name}Font`, {});

const Icon = ({ name, color, className, ...rest }: IconProps) => {

  return (
    <IconsConsumer>
      { ({ icons }) => {
        const Glyph: any = glyphs[name] || icons[name];

        return (
          <IconWrapperTag tagName="span" color={ color }>
            <Choose>
              <When condition={ !!className && !Glyph }>
                <IconFontTag tagName="i" className={ className } { ...rest } />
              </When>
              <When condition={ !className && !!Glyph }>
                <IconSvgTag tagName="i" { ...rest }>
                  <Glyph width="100%" height="100%" />
                </IconSvgTag>
              </When>
            </Choose>
          </IconWrapperTag>
        ); } }
    </IconsConsumer>
  );
};

Icon.defaultProps = {
  size: 'md',
};

export { Icon, theme };
