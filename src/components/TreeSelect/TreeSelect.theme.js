// @flow

import { createThemeTag } from '../../theme/createThemeTag';
import 'react-dropdown-tree-select/dist/styles.css';

const CLASS_NAME = 'tree-select';
const CLASS_NAME_FILLED = 'tree-select--filled';

const name = 'treeSelect';


const [TreeSelectWrapperTag, treeSelectWrapperTheme] = createThemeTag(`${name}Wrapper`, {
  root: props => ({
    width: props.stretch ? '100%' : 'auto',
  }),
});

// eslint-disable-next-line
const [_, treeSelectTheme] = createThemeTag(name, ({ COLORS, SIZES }: *) => ({
  globals: theme => ({
    [`.${CLASS_NAME}`]: {
      '.dropdown': {
        width: '100%',
        paddingRight: '0 !important',
      },

      '.dropdown-trigger': {
        width: '100%',
        display: 'flex !important',
        alignItems: 'center',
        padding: '2px 8px !important',
        backgroundColor: COLORS.WHITE,
        minHeight: '36px',
        fontWeight: 400,
        transition: 'all .15s ease-in-out',
        border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR} !important`,
        borderRadius: '5px',

        '&.top': {
          borderColor: `${COLORS.PRIMARY} !important`,
        },

        '&:after': {
          content: '" " !important',
          display: 'inline-block',
          borderRight: '2px solid hsl(0,0%,80%)',
          borderBottom: '2px solid hsl(0,0%,80%)',
          width: '8px',
          height: '8px',
          transform: 'rotate(45deg)',
          marginLeft: '8px',
        },

        '&.top:after': {
          borderColor: 'hsl(0,0%, 20%)',
        },

        '&:after:hover': {
          borderColor: 'hsl(0,0%, 60%)',
        },
      },

      '.tag-list': {
        display: 'flex !important',
        flexWrap: 'wrap',
        width: '100%',

        '.tag-item': {
          margin: '0 !important',

          '& input': {
            height: '26px',
            margin: '2px 2px 2px 4px',
            fontSize: SIZES.BODY_TEXT,
            lineHeight: SIZES.BODY_TEXT_LH,
            borderBottom: 'none !important',

            '&, &::placeholder': {
              color: COLORS.PLACEHOLDER_COLOR,
            },
          },
        },
      },

      '.tag': {
        display: 'inline-flex',
        alignItems: 'center',
        position: 'relative',
        minHeight: '26px',
        margin: '2px',
        borderRadius: '12px',
        padding: '0 24px 0 12px',
        color: COLORS.SECONDARY_TEXT_COLOR,
        border: `1px solid ${COLORS.PRIMARY_BORDER_COLOR}`,
        backgroundColor: '#fff',
        fontSize: '11px',
        fontWeight: 400,
        textOverflow: 'ellipsis',

        '& button': {
          position: 'absolute',
          top: '50%',
          right: '8px',
          padding: 0,
          fontSize: 0,
          height: '10px',
          marginTop: '-5px',
          width: '8px',

          '&:after': {
            content: '"\\2715"',
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: '10px',
            lineHeight: 1,
            fontWeight: 500,
          },
        },
      },

      'input.checkbox-item': {
        position: 'absolute',
        opacity: 0,

        '& + span': {
          position: 'relative',
          cursor: 'pointer',
          padding: '0',
        },

        '& + span:before': {
          content: '\'\'',

          ...theme.components.checkboxSquare.root,

          marginRight: '10px',
          display: 'inline-block',
          verticalAlign: 'text-top',
        },

        '&:disabled + span': {
          ...theme.components.checkboxSquare.modifiers.disabled,
        },

        '&:disabled + span:before': {
          background: COLORS.DISABLED_COLOR,
        },

        '& + span:after': {
          content: '\'\'',
          position: 'absolute',
          left: '6px',
          top: '11px',
          width: '3px',
          height: '3px',
          background: COLORS.PRIMARY,
          boxShadow: `2px 0 0 ${COLORS.PRIMARY}, 4px 0 0 ${COLORS.PRIMARY}, 4px -2px 0 ${COLORS.PRIMARY}, 4px -4px 0 ${COLORS.PRIMARY}, 4px -6px 0 ${COLORS.PRIMARY}, 4px -8px 0 ${COLORS.PRIMARY}`,
          transform: 'rotate(45deg)',
          transition: 'all .15s ease-in-out',
          opacity: 0,
        },

        '&:checked + span:after': {
          opacity: 1,
        },
      },

      '.node': {
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',

        '.node-label': {
          display: 'flex',
          alignItems: 'start',
          color: '#7E828B',
          whiteSpace: 'normal',
        },

        '&:hover': {
          backgroundColor: COLORS.PRIMARY_HOVER_GRAY_COLOR,

          '.node-labe': {
            color: '#323C47',
          },
        },

        '.toggle': {
          position: 'relative',
          color: COLORS.GRAY5,
          border: `2px solid ${COLORS.GRAY5}`,
          borderRadius: '50%',
          width: '16px',
          height: '16px',
          marginLeft: '8px !important',
          opacity: 0,
          flexShrink: 0,

          '&:after': {
            content: '""',
            position: 'absolute',
            top: '5px',
            left: '2px',
            height: '2px',
            width: '8px',
            backgroundColor: COLORS.GRAY5,
          },

          '&.collapsed:before': {
            content: '""',
            position: 'absolute',
            top: '2px',
            left: '5px',
            height: '8px',
            width: '2px',
            backgroundColor: COLORS.GRAY5,
          },
        },

        '&.tree .toggle': {
          opacity: 1,
          cursor: 'pointer',
        },
      },

      '.dropdown-content': {
        display: 'block',
        boxShadow: `${theme.components.paper.root.boxShadow} !important`,
        borderRadius: SIZES.MAIN_BORDER_RADIUS,
        width: '100%',
        marginTop: '8px',
        padding: '4px 0 !important',
      },
    },

    [`.${CLASS_NAME_FILLED}`]: {
      '.tag-item input': {
        display: 'none',
      },
    },
  }),
}));

const theme = {
  ...treeSelectTheme,
  ...treeSelectWrapperTheme,
};

export {
  CLASS_NAME,
  CLASS_NAME_FILLED,
  TreeSelectWrapperTag,
  theme,
};
