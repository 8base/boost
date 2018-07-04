// @flow

import { createStyledTag } from 'utils';

const name = 'flex-layout';

const offestSizes = {
  none: '0',
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
};

const gapSizes = {
  none: '0',
  xs: '.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '2.5rem',
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

const FlexLayoutTag = createStyledTag(name, props => ({
  display: 'flex',

  flexDirection: props.direction,

  justifyContent: justifyContentStyles[props.justifyContent],
  alignContent: alignContentStyles[props.alignContent],
  alignItems: alignItemsStyles[props.alignItems],

  paddingLeft: offestSizes[props.offsetX],
  paddingRight: offestSizes[props.offsetX],
  paddingTop: offestSizes[props.offsetY],
  paddingBottom: offestSizes[props.offsetY],

  cursor: props.cursor,
  flexGrow: props.grow && '1',

  ...getGapStyle(props.direction, props.gap),
  ...getStretchStyles(props.stretch),
  ...getGrowChildrenStyles(props.growChildren),
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
