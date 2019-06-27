import React, { PureComponent } from 'react';
import pickBy from 'lodash/pickBy';

type TagProps = {|
  activeClassName?: string,
  children?: React$Node,
  className?: string,
  cols?: number | string,
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
  onKeyUp?: (event?: SyntheticKeyboardEvent) => void,
  onKeyDown?: (event?: SyntheticKeyboardEvent) => void,
  onSubmit?: () => void,
  onScroll?: () => void,
  options?: Array<Object>,
  placeholder?: string,
  rows?: number | string,
  src?: string,
  style?: Object,
  tagName: string | React$Component<*>,
  to?: string,
  type?: string,
  value?: number | string | boolean,
|};

const COLLECTED_PROPS = [
  'aria-busy',
  'autoComplete',
  'autoFocus',
  'checked',
  'children',
  'className',
  'cols',
  'for',
  'label',
  'name',
  'onBlur',
  'onChange',
  'onClick',
  'onDoubleClick',
  'onFocus',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOut',
  'onMouseOver',
  'onMouseUp',
  'onKeyUp',
  'onKeyDown',
  'onSubmit',
  'onScroll',
  'options',
  'placeholder',
  'rows',
  'role',
  'src',
  'style',
  'to',
  'type',
  'title',
  'value',
  'disabled',
  'readOnly',
  'href',
  'target',
  'rel',
  'step',
  'min',
  'max',
];

const HTML_TAGS = [
  'div',
  'span',
  'button',
  'a',
  'p',
  'input',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'label',
  'nav',
  'img',
  'pre',
];

const collectProps = (props) => pickBy(props, (value, name) => COLLECTED_PROPS.indexOf(name) !== -1 || /^data-/.test(name));

class Tag extends PureComponent<TagProps> {
  static defaultProps = {
    tagName: 'div',
  };

  render() {
    const { tagName: TagComponent, modifiers, ...props } = this.props;

    const collectedProps = HTML_TAGS.indexOf(TagComponent) === -1 ? props : collectProps(props);

    if (HTML_TAGS.indexOf(TagComponent) !== -1) {
      collectedProps.ref = props.insideRef;
    }

    return <TagComponent { ...collectedProps } />;
  }
}

export { Tag };
