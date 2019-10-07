import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { Paragraph } from '../../';

storiesOf('Components/Paragraph', module)
  .add('common ', () => (
    <Fragment>
      <Paragraph color="PRIMARY_TEXT_COLOR">Primary Paragraph</Paragraph>
      <Paragraph color="SECONDARY_TEXT_COLOR">Secondary Paragraph</Paragraph>
      <Paragraph color="DISABLED_TEXT_COLOR">Disabled Paragraph</Paragraph>
    </Fragment>
  ))
  .add('with text', () => (
    <Paragraph text="Binode carpetbaggism preyouthful salesmanship sinuventricular outskirmish autoepilation frescoer Jebus waneless hyperinsulinize Oxycoccus onlooker upbrought gryllid apopenptic sinuatrial nonresidency villainy planxty gelatinize fructivorous headlock aggrieve" />
  ))
  .add('with children', () => (
    <Paragraph>{ 'Binode carpetbaggism preyouthful salesmanship sinuventricular outskirmish autoepilation frescoer Jebus waneless hyperinsulinize Oxycoccus onlooker upbrought gryllid apopenptic sinuatrial nonresidency villainy planxty gelatinize fructivorous headlock aggrieve</Paragraph' }</Paragraph>
  ));

