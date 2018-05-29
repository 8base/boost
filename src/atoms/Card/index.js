// @flow

import { CardPlate } from './components/CardPlate';
import { CardHeader, cardHeaderTheme } from './components/CardHeader';
import { CardBody, cardBodyTheme } from './components/CardBody';
import { CardFooter, cardFooterTheme } from './components/CardFooter';

const Card = {
  Plate: CardPlate,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
};

const theme = {
  ...cardHeaderTheme,
  ...cardBodyTheme,
  ...cardFooterTheme,
};

export { Card, theme };
