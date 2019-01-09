import React, { Fragment } from 'react';

export default (asStory) => {
  asStory('Components/Paragraph', module, (story, { Paragraph }) => {
    story
      .add('common ', () => (
        <Fragment>
          <Paragraph kind="primary">Primary Paragraph</Paragraph>
          <Paragraph kind="secondary">Secondary Paragraph</Paragraph>
          <Paragraph kind="disabled">Disabled Paragraph</Paragraph>
        </Fragment>
      ))
      .add('with text', () => (
        <Paragraph text="Binode carpetbaggism preyouthful salesmanship sinuventricular outskirmish autoepilation frescoer Jebus waneless hyperinsulinize Oxycoccus onlooker upbrought gryllid apopenptic sinuatrial nonresidency villainy planxty gelatinize fructivorous headlock aggrieve" />
      ))
      .add('with children', () => (
        <Paragraph>{ 'Binode carpetbaggism preyouthful salesmanship sinuventricular outskirmish autoepilation frescoer Jebus waneless hyperinsulinize Oxycoccus onlooker upbrought gryllid apopenptic sinuatrial nonresidency villainy planxty gelatinize fructivorous headlock aggrieve</Paragraph' }</Paragraph>
      ));
  });
};
