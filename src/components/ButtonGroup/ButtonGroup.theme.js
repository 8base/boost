import { createThemeTag } from '../../theme/createThemeTag';


const name = 'buttonGroup';

const [ButtonGroupTag, theme] = createThemeTag(name, {

  root: props => ({
    display: 'flex',
    flexDirection: props.direction,

    '& > *': {
      '&:not(:last-child)': {
        borderRightColor: 'none',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      '&:not(:first-child)': {
        borderLeftColor: 'none',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        marginLeft: '-1px',
      },
    },
  }),

  modifiers: {
    stretch: {
      width: '100%',
    },
  },
});


export {
  theme,
  ButtonGroupTag,
};
