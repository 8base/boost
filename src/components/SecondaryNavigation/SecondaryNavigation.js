import {
  SecondaryNavigationPlate as Plate,
  theme as secondaryNavigationPlateTheme,
} from './SecondaryNavigationPlate';
import {
  SecondaryNavigationItem as Item,
  theme as secondaryNavigationItemTheme,
} from './SecondaryNavigationItem';

export const SecondaryNavigation = {
  Item,
  Plate,
};

export const theme = {
  ...secondaryNavigationPlateTheme,
  ...secondaryNavigationItemTheme,
};

