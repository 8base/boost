import { createThemeTag } from '../../theme/createThemeTag';


const name = 'textArea';

const [TextAreaTag, theme] = createThemeTag(name, ({ COLORS, SIZES, FONTS }: *) => ({
  root: (props) => ({
    outline: 'none',
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    padding: '8px',
    ...FONTS.BODY_1,

    backgroundColor: (props.disabled || props.readOnly)
      ? COLORS.DISABLED_COLOR
      : COLORS.WHITE,

    '&::placeholder': {
      color: COLORS.PLACEHOLDER_COLOR,
    },
  }),
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
    hasError: {
      borderColor: `${COLORS.DANGER}`,
    },
  },
}));

export {
  theme,
  TextAreaTag,
};
