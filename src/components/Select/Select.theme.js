// @flow
import { createThemeTag } from '../../theme/createThemeTag';


const name = 'select';

const [SelectTag, themeSelect] = createThemeTag(name, {
  root: {
    width: '100%',
  },
});

const [SelectChevron, themeChevron] = createThemeTag(`${name}Chevron`, {
  root: {
    paddingLeft: '8px',
    display: 'inline-flex',
  },
});


const theme = {
  ...themeSelect,
  ...themeChevron,
};

export { SelectTag, SelectChevron, theme };

