// @flow

import { createThemeTag } from '../../theme/createThemeTag';
import { paddingSizes, gapSizes, justifyContentStyles, alignContentStyles, alignItemsStyles } from '../../constants';

const name = 'flex-layout';


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
    flexWrap: props.flexWrap,

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


export { FlexLayoutTag, justifyContentStyles, alignContentStyles, alignItemsStyles, theme };
