import { createThemeTag } from '../../theme/createThemeTag';


const name = 'logs';

const [LogsContainerTag, themeLogsContainer] = createThemeTag(name, {
  root: {
    overflowX: 'auto',
    backgroundColor: '#1C252E',
  },
  modifiers: {
    stretch: {
      height: '100%',
      width: '100%',
    },
  },
});

const [LogMessageTag, themeLogMessage] = createThemeTag(`${name}Wrapper`, ({ COLORS }) => ({
  root: {
    fontFamily: 'Courier',
    color: COLORS.WHITE,
    fontSize: '1.4rem',
    lineHeight: 2,
    backgroundColor: '#1C252E',
    padding: '0 24px',
    cursor: 'default',

    '&:first-of-type': {
      paddingTop: '24px',
    },

    '&:last-child': {
      paddingBottom: '24px',
    },

    '&:hover': {
      backgroundColor: '#202D3B',
    },
  },
}));

const theme = {
  ...themeLogsContainer,
  ...themeLogMessage,
};

export { LogsContainerTag, LogMessageTag, theme };

