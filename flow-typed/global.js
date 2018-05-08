// @flow

// eslint-disable-next-line no-undef
declare type Theme<ThemeProps> = {
  [string]: {
    modifiers: { [$Keys<ThemeProps>]: Object },
    defaults: $Shape<ThemeProps>,
  }
}

// eslint-disable-next-line no-undef
declare type PropSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
