import React, { Fragment } from 'react';

import { Paragraph } from '../../';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
};

export const common = () => (
  <Fragment>
    <Paragraph color="PRIMARY_TEXT_COLOR">Primary Paragraph</Paragraph>
    <Paragraph color="SECONDARY_TEXT_COLOR">Secondary Paragraph</Paragraph>
    <Paragraph color="DISABLED_TEXT_COLOR">Disabled Paragraph</Paragraph>
  </Fragment>
);

common.story = {
  name: 'common ',
};

export const withText = () => (
  <Paragraph text="Binode carpetbaggism preyouthful salesmanship sinuventricular outskirmish autoepilation frescoer Jebus waneless hyperinsulinize Oxycoccus onlooker upbrought gryllid apopenptic sinuatrial nonresidency villainy planxty gelatinize fructivorous headlock aggrieve" />
);

withText.story = {
  name: 'with text',
};

export const withChildren = () => (
  <Paragraph>
    {
      'Binode carpetbaggism preyouthful salesmanship sinuventricular outskirmish autoepilation frescoer Jebus waneless hyperinsulinize Oxycoccus onlooker upbrought gryllid apopenptic sinuatrial nonresidency villainy planxty gelatinize fructivorous headlock aggrieve</Paragraph'
    }
  </Paragraph>
);

withChildren.story = {
  name: 'with children',
};
