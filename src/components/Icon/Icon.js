// @flow

import React from 'react';

import { IconWrapperTag, IconFontTag, IconSvgTag } from './Icon.theme';
import { IconsConsumer } from './IconsProvider';
import { COLORS } from '../../theme';
import * as glyphs from './glyphs';

export type IconProps = {
  /** icon name */
  name: string,
  /** icon color */
  color?: $Keys<typeof COLORS>,
  /** icon size ('xs' | 'sm' | 'md' | 'lg' | 'xl' | 'stretch' | 'custom') */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'stretch' | 'custom',
  /** custom icon size (it is required if the size set to custom) */
  customSize?: string,
  /** custom icon class */
  className?: string,
  /** title attribute for the icon */
  title?: string,
  /** possible types of the css cursor property */
  cursor?: 'pointer' | 'default' | 'auto',
  //** allow pass props to an Icon */
  children?: (Glyph: React$Component<Object, null>) => React$Node,
};

const Icon = ({ name, className, children, title, ...rest }: IconProps) => {
  return (
    <IconsConsumer>
      { ({ icons = {}}) => {
        const Glyph: any = icons[name] || glyphs[name];

        if (typeof children === 'function') {
          return (
            <IconWrapperTag tagName="span" { ...rest }>
              <IconSvgTag
                tagName="i"
                title={ title }
                modifiers={ rest }
                className={ className }
              >
                { children(Glyph) }
              </IconSvgTag>
            </IconWrapperTag>
          );
        }

        return (
          <IconWrapperTag tagName="span" { ...rest }>
            <Choose>
              <When condition={ !!className && !Glyph }>
                <IconFontTag
                  tagName="i"
                  title={ title }
                  modifiers={ rest }
                />
              </When>
              <When condition={ !!Glyph }>
                <IconSvgTag
                  tagName="i"
                  title={ title }
                  modifiers={ rest }
                  className={ className }
                >
                  <Glyph />
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
