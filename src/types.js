// @flow

export type PropSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Theme<ThemeProps> = {
  [string]: {
    modifiers: { [$Keys<ThemeProps>]: Object },
    defaults: $Shape<ThemeProps>,
  }
}
