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
  asStory('Components/SelectField', module, (story, { SelectField, StateContainer, Column }) => {
    story
      .add('common', () => (
        <Column>
          <StateContainer value={ null } withForm>
            <SelectField label="Stretch = false" name="name" placeholder="Select an option" options={ OPTIONS } stretch={ false } />
          </StateContainer>
          <StateContainer value={ OPTIONS[1].value } withForm>
            <SelectField label="Clearable select" name="name" placeholder="Select an option" options={ OPTIONS } clearable />
          </StateContainer>
          <StateContainer value={ [OPTIONS[1].value, OPTIONS[2].value] } withForm>
            <SelectField label="Multiple select" name="name" placeholder="Select an option" options={ OPTIONS } multiple />
          </StateContainer>
          <StateContainer value={ [OPTIONS[1].value, OPTIONS[2].value] } withForm>
            <SelectField label="Multiple select" name="name" placeholder="Select an option" options={ OPTIONS } disabled />
          </StateContainer>
        </Column>
      ));
  });
};
