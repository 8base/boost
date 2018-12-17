import { NavigationItem as Item, theme as navigationItemTheme } from './NavigationItem';
import { NavigationPlate as Plate, theme as navigationPlateTheme } from './NavigationPlate';

const Navigation = {
  Item,
  Plate,
};

const theme = {
  ...navigationItemTheme,
  ...navigationPlateTheme,
};

export {
  Navigation,
  theme,
};
