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
  initial?: boolean,
  invalid?: boolean,
  pristine?: boolean,
  submitError?: any,
  submitFailed?: boolean,
  submitSucceeded?: boolean,
  touched?: boolean,
  valid?: boolean,
  visited?: boolean
|};
