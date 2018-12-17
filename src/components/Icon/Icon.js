// @flow

import React from 'react';
import fp from 'lodash/fp';

import { IconsConsumer } from './IconsProvider';
import { PALETTE } from '../../theme';
import { SECONDARY_COLORS, MAIN_BRAND_COLORS } from '../../theme/dsmColors';
import { createStyledTag, createComponentTheme } from '../../utils';
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
    size: {
      stretch: {
        height: '100%',
        width: '100%',
      },
    },
  },
});

const themeSvg = createComponentTheme(`${name}Svg`, {
  modifiers: {
    size: {
      xs: {
        width: '12px',
        height: '12px',
      },
      sm: {
        width: '18px',
        height: '18px',
      },
      md: {
        width: '24px',
        height: '24px',
      },
      lg: {
        width: '36px',
        height: '36px',
      },
      xl: {
        width: '48px',
        height: '48px',
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
        fontSize: '12px',
      },
      sm: {
        fontSize: '18px',
      },
      md: {
        fontSize: '24px',
      },
      lg: {
        fontSize: '36px',
      },
      xl: {
        fontSize: '48px',
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

const Icon = ({ name, color, className, size, ...rest }: IconProps) => {

  return (
    <IconsConsumer>
      { ({ icons }) => {
        const Glyph: any = glyphs[name] || icons[name];

        return (
          <IconWrapperTag tagName="span" color={ color } size={ size }>
            <Choose>
              <When condition={ !!className && !Glyph }>
                <IconFontTag
                  tagName="i"
                  size={ size }
                  className={ className }
                  { ...rest }
                />
              </When>
              <When condition={ !className && !!Glyph }>
                <IconSvgTag tagName="i" size={ size } { ...rest }>
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
