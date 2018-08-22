// @flow

import { createStyledTag } from '../../utils';

const name = 'flex-layout';

const paddingSizes = {
  none: '0',
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
};

const gapSizes = {
  none: '0',
  xs: '.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
};

const justifyContentStyles = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
};

const alignContentStyles = {
  ...justifyContentStyles,
  stretch: 'stretch',
};

const alignItemsStyles = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};


const getGapStyle = (direction: 'row' | 'column', gapProp: $Keys<typeof gapSizes>) =>
  direction === 'row'
    ? {
      '& > *': {
        '&:not(:last-child)': {
          marginRight: gapSizes[gapProp],
        },
      },
    }
    : {
      '& > *': {
        '&:not(:last-child)': {
          marginBottom: gapSizes[gapProp],
        },
      },
    };

const getStretchStyles = (stretchProp: boolean) =>
  stretchProp
    ? { width: '100%', height: '100%' }
    : {};

const getGrowChildrenStyles = (growChildren: boolean) =>
  growChildren
    ? {
      '& > *': { flexGrow: '1' },
    }
    : {};

const getGrowStyles = (grow: boolean) =>
  grow
    ? { flexGrow: '1' }
    : {};

const FlexLayoutTag = createStyledTag(name, props => ({
  display: 'flex',

  flexDirection: props.direction,

  justifyContent: justifyContentStyles[props.justifyContent],
  alignContent: alignContentStyles[props.alignContent],
  alignItems: alignItemsStyles[props.alignItems],

  paddingLeft: paddingSizes[props.offsetX] || paddingSizes[props.offsetLeft],
  paddingRight: paddingSizes[props.offsetX] || paddingSizes[props.offsetRight],
  paddingTop: paddingSizes[props.offsetY] || paddingSizes[props.offsetTop],
  paddingBottom: paddingSizes[props.offsetY] || paddingSizes[props.offsetBottom],

  cursor: props.cursor,

  ...getGapStyle(props.direction, props.gap),
  ...getStretchStyles(props.stretch),
  ...getGrowChildrenStyles(props.growChildren),
  ...getGrowStyles(props.grow),
}));

FlexLayoutTag.defaultProps = {
  direction: 'row',
  justifyContent: 'start',
  alignContent: 'start',
  alignItems: 'start',
  gap: 'none',
  offestX: 'none',
  offestY: 'none',
  cursor: 'inherit',
  stretch: false,
  grow: false,
  growChildren: false,
};

export { FlexLayoutTag };
