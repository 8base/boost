import React from 'react';
import { storiesOf } from '@storybook/react';
import { Column, TreeSelect } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';


const OPTIONS = {
  label: 'Search me',
  value: 'searchme',
  children: [
    {
      label: 'Search me too',
      value: 'searchmetoo',
      children: [
        {
          label: 'No one can get me',
          value: 'anonymous',
        },
      ],
    },
    {
      label: 'Search me too 2',
      value: 'searchmetoo2',
    },
    {
      label: 'Search me too 3',
      value: 'searchmetoo3',
    },
    {
      label: 'Search me too 4',
      value: 'searchmetoo4',
    },
    {
      label: 'Search me too 5',
      value: 'searchmetoo5',
    },
  ],
};


const LONG_OPTIONS = [{
  label: 'Geoglossaceae nontransportation laemodipodiform gluttonously spaework ankylorrhinia zain carlet ironheartedness geoglossaceae nontransportation laemodipodiform gluttonously spaework ankylorrhinia zain carlet ironheartedness topia antiorthodox cerebropedal Sothis whispered basilica idealizer outvalue thwacking unafraid coining nak friskily renishly stringsman',
  value: 'ovenlike',
}, {
  label: 'backhander unpersecuted platch antisymmetrical fumaroid chromitite Microthelyphonida epigraphically myope supramechanical pageant ankle camphory nitronaphthalene thieve umquhile mornings gynomonoecism unvulgarize rickmatic saltless sternoglossal pungi pronumber',
  value: 'serjeant',
}, {
  label: 'juju tattlery nonperpetual nonexternal vocabularied umber lichenological repressure unpoled blepharosynechia peragration reduplicature acarid citizenism nongelatinizing splenoptosia unpoisoned tympanic tachogram unhardness dovetail transonic cuinage tributariness',
  value: 'wiseheartedly',
}];

storiesOf('Components/TreeSelect', module)
  .add('common', () => (
    <Column>
      <StateContainer value={ [] }>
        { ({ value, onChange }) => (
          <TreeSelect
            value={ value }
            options={ OPTIONS }
            onChange={ (_, selectedNodes) => onChange(selectedNodes.map(({ value }) => value)) }
          />
        ) }
      </StateContainer>
      <StateContainer value={ [OPTIONS.children[1].value, OPTIONS.children[2].value, OPTIONS.children[0].children[0].value] }>
        { ({ value, onChange }) => (
          <TreeSelect
            value={ value }
            options={ OPTIONS }
            onChange={ (_, selectedNodes) => onChange(selectedNodes.map(({ value }) => value)) }
          />
        ) }
      </StateContainer>
      <StateContainer value={ [LONG_OPTIONS[0].value, LONG_OPTIONS[2].value] }>
        { ({ value, onChange }) => (
          <TreeSelect
            value={ value }
            options={ LONG_OPTIONS }
            onChange={ (_, selectedNodes) => onChange(selectedNodes.map(({ value }) => value)) }
          />
        ) }
      </StateContainer>
    </Column>
  ));

