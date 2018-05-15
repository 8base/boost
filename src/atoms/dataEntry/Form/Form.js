import { FormField as Field, theme as navigationFieldTheme } from './FormField';
import { FormPlate as Plate, theme as navigationPlateTheme } from './FormPlate';

const Form = {
  Field,
  Plate,
};

const theme = {
  ...navigationFieldTheme,
  ...navigationPlateTheme,
};

export {
  Form,
  theme,
};
