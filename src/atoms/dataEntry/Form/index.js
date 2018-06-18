import { FormField as Field, theme as formFieldTheme } from './FormField';
import { FormPlate as Plate, theme as formPlateTheme } from './FormPlate';
import { FormSection as Section } from './FormSection';
import { FormSectionTitle as SectionTitle, theme as formSectionTitleTheme } from './FormSectionTitle';

const Form = {
  Field,
  Plate,
  Section,
  SectionTitle,
};

const theme = {
  ...formFieldTheme,
  ...formPlateTheme,
  ...formSectionTitleTheme,
};

export {
  Form,
  theme,
};
