// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const [DialogBodyTag, themeBody] = createThemeTag('dialogBody', {
  flexShrink: 1,
});


const [HeaderCloseTag, themeHeaderClose] = createThemeTag('dialogHeaderClose', {
  root: {
    cursor: 'pointer',
    userSelect: 'none',
    position: 'absolute',
    right: '20px',

    '&:hover': {
      color: '#8698a7',
    },
  },
});


const [DialogTag, themeDialog] = createThemeTag('dialog', {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: '90%',
    flex: '0 1 90%',
  },
  modifiers: {
    size: {
      xs: {
        width: '300px',
      },
      sm: {
        width: '400px',
      },
      md: {
        width: '500px',
      },
      lg: {
        width: '600px',
      },
      xl: {
        width: '800px',
      },
    },
  },
});


const theme = {
  ...themeDialog,
  ...themeBody,
  ...themeHeaderClose,
};


export {
  theme,
  DialogTag,
  HeaderCloseTag,
  DialogBodyTag,
};

