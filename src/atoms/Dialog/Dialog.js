import { DialogBody as Body, theme as dialogBodyTheme } from './DialogBody';
import { DialogFooter as Footer, theme as dialogFooterTheme } from './DialogFooter';
import { DialogHeader as Header, theme as dialogHeaderTheme } from './DialogHeader';
import { DialogPlate as Plate, theme as dialogPlateTheme } from './DialogPlate';

const Dialog = {
  Body,
  Footer,
  Header,
  Plate,
};

const theme = {
  ...dialogBodyTheme,
  ...dialogFooterTheme,
  ...dialogHeaderTheme,
  ...dialogPlateTheme,
};

export {
  Dialog,
  theme,
};
