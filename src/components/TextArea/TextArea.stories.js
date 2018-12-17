import React from 'react';

export default (asStory) => {
  asStory('Components/TextArea', module, (story, { TextArea }) => {
    story
      .add('without value', () => (
        <TextArea name="input" onChange={ () => null } cols={ 100 } rows={ 5 } />
      ))
      .add('with value', () => (
        <TextArea name="input" value="Affectious vindicably splenopathy demirevetment saffron redeny epitheliosis reacclimatization pistacite obdeltoid Balawu drugman lasher godlet immomentous unguentaria curwhibble dismastment filterable virilist subtrigonal iditol Silybum banshee" onChange={ () => null } cols={ 100 } rows={ 5 } />
      ))
      .add('with placeholder', () => (
        <TextArea name="input" placeholder="placeholder" onChange={ () => null } cols={ 100 } rows={ 5 } />
      ));
  });
};

