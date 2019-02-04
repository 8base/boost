// @flow

import React from 'react';

import { IconWrapperTag, IconFontTag, IconSvgTag } from './Icon.theme';
import { IconsConsumer } from './IconsProvider';
import { PALETTE } from '../../theme';
import { SECONDARY_COLORS, MAIN_BRAND_COLORS } from '../../theme/dsmColors';
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
  /** title attribute for the icon */
  title?: string,
};

const Icon = ({ name, className, ...rest }: IconProps) => {

  return (
    <IconsConsumer>
      { ({ icons }) => {
        const Glyph: any = glyphs[name] || icons[name];

        return (
          <IconWrapperTag tagName="span" { ...rest }>
            <Choose>
              <When condition={ !!className && !Glyph }>
                <IconFontTag
                  tagName="i"
                  title={ rest.title }
                  modifiers={ rest }
                />
              </When>
              <When condition={ !className && !!Glyph }>
                <IconSvgTag
                  tagName="i"
                  title={ rest.title }
                  modifiers={ rest }
                >
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

export { Icon };
