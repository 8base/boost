import { MenuPlate as Plate, theme as menuPlateTheme } from './MenuPlate';
import { MenuItem as Item, theme as menuItemTheme } from './MenuItem';

const Menu = {
  Plate,
  Item,
};

const theme = {
  ...menuPlateTheme,
  ...menuItemTheme,
};

export {
  Menu,
  theme,
};
