// @flow
import fp from 'lodash/fp';
import { keyframes } from 'emotion';

import { createThemeTag } from '../../theme/createThemeTag';

const name = 'loader';

const pulse = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  45% {
    opacity: 0.6;
  }
  100% {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

const [LoaderTag, themeLoader] = createThemeTag(name, {
  root: {
    display: 'inline-flex',
    position: 'relative',
  },
  modifiers: {
    size: {
      sm: {
        width: '32px',
        height: '32px',
      },
      md: {
        width: '64px',
        height: '64px',
      },
      lg: {
        width: '80px',
        height: '80px',
      },
    },
  },
});

const [LoaderCircleTag, themeLoaderCircle] = createThemeTag(`${name}Circle`, ({ COLORS }: *) => ({
  root: ({ delay }) => ({
    borderRadius: '100%',
    border: '4px solid #000',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%',
    opacity: '0',

    animation: `${pulse} 1.8s cubic-bezier(0.165, 0.84, 0.44, 1) ${delay}`,
    animationIterationCount: 'infinite',
  }),
  modifiers: {
    size: {
      sm: {
        borderWidth: '1.6px',
      },
      md: {
        borderWidth: '3.2px',
      },
      lg: {
        borderWidth: '4px',
      },
    },
    color: fp.mapValues(color => ({ borderColor: color }), COLORS),
  },
}));

const [LoaderWrapperTag, themeWrappers] = createThemeTag(`${name}Wrapper`, {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

const theme = {
  ...themeLoader,
  ...themeLoaderCircle,
  ...themeWrappers,
};

export { LoaderTag, LoaderWrapperTag, LoaderCircleTag, theme };
