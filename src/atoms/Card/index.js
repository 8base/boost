// @flow

import { CardPlate } from './CardPlate';
import { CardHeader, cardHeaderTheme } from './CardHeader';
import { CardBody, cardBodyTheme } from './CardBody';
import { CardSection, cardSectionTheme } from './CardSection';
import { CardFooter, cardFooterTheme } from './CardFooter';

const Card = {
  Plate: CardPlate,
  Header: CardHeader,
  Body: CardBody,
  Section: CardSection,
  Footer: CardFooter,
};

const theme = {
  ...cardHeaderTheme,
  ...cardBodyTheme,
  ...cardSectionTheme,
  ...cardFooterTheme,
};

export { Card, theme };
