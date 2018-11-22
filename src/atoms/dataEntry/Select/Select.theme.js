// @flow
import styled from 'react-emotion';

import { createStyledTag, createTheme } from '../../../utils';

const name = 'select';

const theme = createTheme(name, {
  modifiers: {
  },
  defaults: {
  },
});

const SelectTag = createStyledTag(name, {
  width: '100%',
  lineHeight: 'normal',
});

const SelectChevron = styled('div')({
  paddingLeft: '1rem',
  display: 'inline-flex',
});

export { SelectTag, SelectChevron, theme };

