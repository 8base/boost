// @flow

export type InputType = {|
  name?: string,
  onBlur?: (?SyntheticFocusEvent<*>) => void,
  onChange?: (SyntheticInputEvent<*> | any) => void,
  onFocus?: (?SyntheticFocusEvent<*>) => void,
  value?: any,
  checked?: boolean
|};

export type MetaType = {|
  active?: boolean,
  data?: Object,
  dirty?: boolean,
  dirtySinceLastSubmit?: boolean,
  error?: any,
  initial?: any,
  invalid?: boolean,
  pristine?: boolean,
  submitError?: any,
  submitFailed?: boolean,
  submitSucceeded?: boolean,
  touched?: boolean,
  valid?: boolean,
  visited?: boolean
|};

export type PropSizes = 'noSet' | 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type PropLayout = 'start' | 'end' | 'between' | 'around' | 'center';

export type PropLayoutStretch = PropLayout | 'stretch';

export type Theme<ThemeProps> = {
  [string]: {
    modifiers: { [$Keys<ThemeProps>]: Object },
    defaults: $Shape<ThemeProps>,
  }
}
