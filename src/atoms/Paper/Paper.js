import { PaperBody as Body, theme as paperBodyTheme } from './PaperBody';
import { PaperHeader as Header, theme as paperHeaderTheme } from './PaperHeader';
import { PaperPlate as Plate, theme as paperPlateTheme } from './PaperPlate';
import { PaperSection as Section, theme as paperSectionTheme } from './PaperSection';

const Paper = {
  Body,
  Header,
  Plate,
  Section,
};

const theme = {
  ...paperBodyTheme,
  ...paperHeaderTheme,
  ...paperPlateTheme,
  ...paperSectionTheme,
};

export {
  Paper,
  theme,
};
