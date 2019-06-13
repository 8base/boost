// @flow

import { createThemeTag } from '../../theme/createThemeTag';


const [DialogBodyTag, themeBody] = createThemeTag('dialogBody', {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    flexGrow: 1,
    maxHeight: '100%',
  },
});


const [HeaderCloseTag, themeHeaderClose] = createThemeTag('dialogHeaderClose', {
  root: {
    cursor: 'pointer',
    userSelect: 'none',
    position: 'absolute',
    right: '20px',
    display: 'flex',

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
    stretch: {
      height: '100%',
    },
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
      xxl: {
        width: '1000px',
      },
    },
  },
});


const [DialogInnerTag, themeDialogInner] = createThemeTag('dialogInner', {
  root: {
    '&, & > form': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  },
  modifiers: {
    stretch: {
      height: '100%',
    },
  },
});


const theme = {
  ...themeDialog,
  ...themeDialogInner,
  ...themeBody,
  ...themeHeaderClose,
};


export {
  theme,
  DialogTag,
  HeaderCloseTag,
  DialogBodyTag,
  DialogInnerTag,
};

