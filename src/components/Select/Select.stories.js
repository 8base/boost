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
  asStory('Components/Select', module, (story, { Select, StateContainer, Column, Icon, Row }) => {
    story
      .add('common', () => (
        <Column>
          <StateContainer value={ null }>
            <Select name="name" placeholder="Select an option" options={ OPTIONS } />
          </StateContainer>
          <StateContainer value={ OPTIONS[1] }>
            <Select name="name" placeholder="Select an option" options={ OPTIONS } clearable />
          </StateContainer>
          <StateContainer value={ [OPTIONS[1], OPTIONS[2]] }>
            <Select name="name" placeholder="Select an option" options={ OPTIONS } multiple />
          </StateContainer>
          <StateContainer value={ [OPTIONS[1], OPTIONS[2]] }>
            <Select
              name="name"
              placeholder="Select an option"
              options={ OPTIONS }
              components={{
                MultiValueLabel: ({ children, ...props }) => (
                  <Select.components.MultiValueLabel { ...props }>
                    <Row>
                      <Icon name="Table" size="sm" />
                      <span>{ children }</span>
                    </Row>
                  </Select.components.MultiValueLabel>
                ),
              }}
              multiple
            />
          </StateContainer>
        </Column>
      ));
  });
};
