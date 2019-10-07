import React from 'react';

import { TextArea } from '../../';

export default {
  title: 'Components/TextArea',
  component: TextArea,
};

export const defaultStory = () => (
  <TextArea
    name="input"
    value="Affectious vindicably splenopathy demirevetment saffron redeny epitheliosis reacclimatization pistacite obdeltoid Balawu drugman lasher godlet immomentous unguentaria curwhibble dismastment filterable virilist subtrigonal iditol Silybum banshee"
    onChange={ () => null }
    cols={ 100 }
    rows={ 5 }
  />
);

defaultStory.story = {
  name: 'default',
};

export const withoutValue = () => (
  <TextArea name="input" onChange={ () => null } cols={ 100 } rows={ 5 } />
);

withoutValue.story = {
  name: 'without value',
};

export const withPlaceholder = () => (
  <TextArea name="input" placeholder="placeholder" onChange={ () => null } cols={ 100 } rows={ 5 } />
);

withPlaceholder.story = {
  name: 'with placeholder',
};

export const withDisabled = () => (
  <TextArea
    name="input"
    placeholder="placeholder"
    onChange={ () => null }
    cols={ 100 }
    rows={ 5 }
    disabled
  />
);

withDisabled.story = {
  name: 'with disabled',
};

export const withError = () => (
  <TextArea
    name="input"
    placeholder="placeholder"
    onChange={ () => null }
    cols={ 100 }
    rows={ 5 }
    hasError
  />
);

withError.story = {
  name: 'with error',
};
