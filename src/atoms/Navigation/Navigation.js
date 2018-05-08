import { NavigationGroup as Group, theme as navigationGroupTheme } from './NavigationGroup';
import { NavigationItem as Item, theme as navigationItemTheme } from './NavigationItem';
import { NavigationPlate as Plate, theme as navigationPlateTheme } from './NavigationPlate';

const Navigation = {
  Group,
  Item,
  Plate,
};

const theme = {
  ...navigationGroupTheme,
  ...navigationItemTheme,
  ...navigationPlateTheme,
};

export {
  Navigation,
  theme,
};
