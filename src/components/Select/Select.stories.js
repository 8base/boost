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

const LONG_OPTIONS = [{
  label: 'GeoglossaceaenontransportationlaemodipodiformgluttonouslyspaeworkankylorrhiniazaincarletironheartednesstopiaantiorthodoxcerebropedalSothiswhisperedbasilicaidealizeroutvaluethwackingunafraidcoiningnakfriskilyrenishlystringsman',
  value: 'ovenlike',
}, {
  label: 'backhander unpersecuted platch antisymmetrical fumaroid chromitite Microthelyphonida epigraphically myope supramechanical pageant ankle camphory nitronaphthalene thieve umquhile mornings gynomonoecism unvulgarize rickmatic saltless sternoglossal pungi pronumber',
  value: 'serjeant',
}, {
  label: 'juju tattlery nonperpetual nonexternal vocabularied umber lichenological repressure unpoled blepharosynechia peragration reduplicature acarid citizenism nongelatinizing splenoptosia unpoisoned tympanic tachogram unhardness dovetail transonic cuinage tributariness',
  value: 'wiseheartedly',
}];

export default (asStory) => {
  asStory('Components/Select', module, (story, { Select, StateContainer, Column, Icon, Row }) => {
    story
      .add('common', () => (
        <Column>
          <StateContainer value={ null }>
            <Select name="name" placeholder="Select an option" options={ OPTIONS } stretch={ false } />
          </StateContainer>
          <StateContainer value={ OPTIONS[1].value }>
            <Select name="name" placeholder="Select an option" options={ OPTIONS } clearable />
          </StateContainer>
          <StateContainer value={ [OPTIONS[1].value, OPTIONS[2].value] }>
            <Select name="name" placeholder="Select an option" options={ OPTIONS } multiple />
          </StateContainer>
          <StateContainer value={ [LONG_OPTIONS[1].value] }>
            <Select name="name" placeholder="Select an option" options={ LONG_OPTIONS } multiple />
          </StateContainer>
          <StateContainer value={ [OPTIONS[1].value, OPTIONS[2].value] }>
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
          <StateContainer value={ null }>
            <Select name="name" placeholder="Select an option" options={ OPTIONS } disabled />
          </StateContainer>
        </Column>
      ));
  });
};
