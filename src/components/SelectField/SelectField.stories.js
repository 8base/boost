import React from 'react';

const OPTIONS = [{
  label: 'ovenlike',
  value: 'ovenlike',
}, {
  label: 'serjeant',
  value: 'serjeant',
}, {
  label: 'wiseheartedly',
  value: 'wiseheartedly',
}];

export default (asStory) => {
  asStory('Components/SelectField', module, (story, { SelectField }) => {
    story
      .add('default', () => (
        <SelectField
          label="Select Label"
          input={{ name: 'input', onChange: () => null, value: OPTIONS[0].value }}
          meta={{}}
          placeholder="Select an option"
          options={ OPTIONS }
          stretch
        />
      ));
  });
};

