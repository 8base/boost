import React from 'react';
import pick from 'lodash/pick';

type TagProps = {|
  activeClassName?: string,
  children?: React$Node,
  className?: string,
  cols?: number,
  component?: string | React$Component<*>,
  exact?: boolean,
  stretch?: boolean,
  for?: string,
  label?: string,
  name?: string,
  onChange?: (event?: SyntheticInputEvent) => void,
  onClick?: (event?: SyntheticMouseEvent) => void,
  onDoubleClick?: (event?: SyntheticMouseEvent) => void,
  onMouseDown?: (event?: SyntheticMouseEvent) => void,
  onMouseEnter?: (event?: SyntheticMouseEvent) => void,
  onMouseLeave?: (event?: SyntheticMouseEvent) => void,
  onMouseMove?: (event?: SyntheticMouseEvent) => void,
  onMouseOut?: (event?: SyntheticMouseEvent) => void,
  onMouseOver?: (event?: SyntheticMouseEvent) => void,
  onMouseUp?: (event?: SyntheticMouseEvent) => void,
  onSubmit?: () => void,
  options?: Array<Object>,
  placeholder?: string,
  rows?: number,
  src?: string,
  style?: Object,
  tagName: string | React$Component<*>,
  to?: string,
  type?: string,
  value?: string,
|};

const COLLECTED_PROPS = [
  'children',
  'className',
  'cols',
  'for',
  'label',
  'name',
  'onChange',
  'onClick',
  'onDoubleClick',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onSubmit',
  'options',
  'placeholder',
  'rows',
  'src',
  'style',
  'tagName',
  'to',
  'type',
  'value',
];

function Tag({ tagName, ...props }: TagProps) {
  const TagComponent = tagName;
  const collectedProps = pick(props, COLLECTED_PROPS);

  return <TagComponent { ...collectedProps } />;
}

export { Tag };
