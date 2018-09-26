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
});

const SelectValue = styled('div')((props) => ({
  border: '1px solid #D0D7DD',
  borderRadius: '5px',
  color: props.theme.COLORS[props.isPlaceholder ? 'DARK_SECONDARY_TEXT_COLOR' : 'DARK_PRIMARY_TEXT_COLOR'],
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  height: '4rem',
  lineHeight: 'normal',
  outline: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 1rem',
  justifyContent: 'space-between',
  width: '100%',
}));

const SelectChevron = styled('div')({
  paddingLeft: '1rem',
  display: 'inline-flex',
});

export { SelectTag, SelectValue, SelectChevron, theme };

