import { createThemeTag } from '../../theme/createThemeTag';


const name = 'textArea';

const [TextAreaTag, theme] = createThemeTag(name, ({ COLORS, SIZES }: *) => ({
  root: (props) => ({
    outline: 'none',
    border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
    borderRadius: SIZES.MAIN_BORDER_RADIUS,
    fontSize: SIZES.BODY_TEXT,
    lineHeight: SIZES.BODY_TEXT_LH,
    color: COLORS.PRIMARY_TEXT_COLOR,
    fontWeight: 400,
    padding: '8px',

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
