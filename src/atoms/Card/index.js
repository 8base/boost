// @flow

import { CardPlate } from './CardPlate';
import { CardHeader, cardHeaderTheme } from './CardHeader';
import { CardBody, cardBodyTheme } from './CardBody';
import { CardFooter, cardFooterTheme } from './CardFooter';

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
