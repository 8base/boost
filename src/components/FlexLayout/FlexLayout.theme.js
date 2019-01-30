// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const name = 'flex-layout';

const paddingSizes = {
  none: '0',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

const gapSizes = {
  none: '0',
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
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
      '&:not(:last-child)': {
        marginRight: gapSizes[gapProp],
      },
    }
    : {
      '&:not(:last-child)': {
        marginBottom: gapSizes[gapProp],
      },
    };

const getGrowChildrenStyles = (growChildren: boolean) =>
  growChildren
    ? { flexGrow: '1' }
    : {};


const [FlexLayoutTag, theme] = createThemeTag(name, {
  root: props => ({
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

    '& > *': {
      ...getGapStyle(props.direction, props.gap),
      ...getGrowChildrenStyles(props.growChildren),
    },
  }),
  modifiers: {
    stretch: {
      width: '100%',
      height: '100%',
    },
    grow: {
      flexGrow: '1',
    },
  },
});


export { FlexLayoutTag, theme };
