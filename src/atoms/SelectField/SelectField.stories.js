import React from 'react';

const OPTIONS = [{
  content: 'ovenlike',
  value: 'ovenlike',
}, {
  content: 'serjeant',
  value: 'serjeant',
}, {
  content: 'wiseheartedly',
  value: 'wiseheartedly',
}];

export default (asStory) => {
  asStory('Atoms/SelectField', module, (story, { SelectField }) => {
    story
      .add('default', () => (
        <SelectField
          label="Select Label"
          name="input"
          placeholder="Select an option"
          onChange={() => null}
          options={OPTIONS}
          value={OPTIONS[0].value}
        />
      ));
  });
};

