import React from 'react';
import { Select, Column, Icon, Row } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';

const OPTIONS = [
  {
    label: 'ovenlike',
    value: 'ovenlike',
  },
  {
    label: 'serjeant',
    value: 'serjeant',
  },
  {
    label: 'wiseheartedly',
    value: 'wiseheartedly',
  },
  {
    label: 'disabled',
    value: 'disabled',
    isDisabled: true,
  },
];

const LONG_OPTIONS = [
  {
    label:
      'GeoglossaceaenontransportationlaemodipodiformgluttonouslyspaeworkankylorrhiniazaincarletironheartednesstopiaantiorthodoxcerebropedalSothiswhisperedbasilicaidealizeroutvaluethwackingunafraidcoiningnakfriskilyrenishlystringsman',
    value: 'ovenlike',
  },
  {
    label:
      'backhander unpersecuted platch antisymmetrical fumaroid chromitite Microthelyphonida epigraphically myope supramechanical pageant ankle camphory nitronaphthalene thieve umquhile mornings gynomonoecism unvulgarize rickmatic saltless sternoglossal pungi pronumber',
    value: 'serjeant',
  },
  {
    label:
      'juju tattlery nonperpetual nonexternal vocabularied umber lichenological repressure unpoled blepharosynechia peragration reduplicature acarid citizenism nongelatinizing splenoptosia unpoisoned tympanic tachogram unhardness dovetail transonic cuinage tributariness',
    value: 'wiseheartedly',
  },
];

const OPTIONS_WITH_DESCRIPTION = [
  {
    description: 'This is the description',
    label: 'This is the value to show',
    value: 'value',
  },
  {
    description: 'Another description',
    label: 'Another Value',
    value: 'value2',
  },
];

export default {
  title: 'Components/Select',
  component: Select,
};

export const common = () => (
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
    <Select name="name" placeholder="With error" options={ OPTIONS } hasError />
    <StateContainer value={ OPTIONS_WITH_DESCRIPTION[0].value }>
      <Select
        name="name"
        placeholder="Select an option"
        components={{ Option: Select.components.OptionWithDescription }}
        options={ OPTIONS_WITH_DESCRIPTION }
      />
    </StateContainer>
  </Column>
);

common.story = {
  name: 'common',
};
