// @flow

export type PropSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type PropLayout = 'start' | 'end' | 'between' | 'around' | 'center';

export type PropLayoutStretch = PropLayout | 'stretch';


export type Theme<ThemeProps> = {
  [string]: {
    modifiers: { [$Keys<ThemeProps>]: Object },
    defaults: $Shape<ThemeProps>,
  }
}
