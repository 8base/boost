import React from 'react';
import { InputField, Column, Grid, Icon } from '../../';

const onChange = () => null;

export default {
  title: 'Components/InputField',
  component: InputField,
};

export const common = () => (
  <Grid.Layout gap="lg" columns="auto auto auto">
    <Grid.Box>
      <Column gap="md">
        <InputField label="Default" input={{ name: 'input', onChange }} stretch={ false } />
        <InputField
          label="with placeholder"
          placeholder="placeholder"
          input={{ name: 'input', onChange }}
          stretch={ false }
        />
        <InputField
          label="With align center"
          input={{ name: 'input', value: 'value', onChange }}
          align="center"
          stretch={ false }
        />
        <InputField
          label="With clearable"
          clearable
          input={{ name: 'input', value: 'value', onChange }}
          stretch={ false }
        />
        <InputField
          label="With left icon"
          leftIcon={ <Icon name="Search" size="xs" /> }
          input={{ name: 'input', value: 'value', onChange }}
          stretch={ false }
        />
        <InputField
          label="With right icon"
          rightIcon={ <Icon name="Alert" color="DANGER" size="xs" /> }
          input={{ name: 'input', value: 'value', onChange }}
          stretch={ false }
        />
        <InputField
          label="With type number"
          type="number"
          input={{ name: 'input', value: 0, onChange }}
          stretch={ false }
        />
        <InputField label="With stretch" input={{ name: 'input', onChange }} />
      </Column>
    </Grid.Box>
    <Grid.Box>
      <Column gap="md">
        <InputField
          label="With note"
          input={{ name: 'input', onChange }}
          note="Note"
          stretch={ false }
        />
        <InputField
          label="With error"
          input={{ name: 'input', onChange }}
          meta={{ error: 'Required', touched: true }}
          stretch={ false }
        />
        <InputField
          label="With big error"
          input={{ name: 'input', onChange }}
          meta={{
            error:
              'Sadie objectation bainie painkiller archae Clinton Slavian Pinkerton echinus bearishly',
            touched: true,
          }}
          stretch={ false }
        />
        <InputField
          label="Without error label"
          hideErrorLabel
          hideErrorIndicator
          input={{ name: 'input', onChange }}
          meta={{ error: 'Required', touched: true }}
          stretch={ false }
        />
        <InputField
          label="With note and error"
          input={{ name: 'input', onChange }}
          note="Note"
          meta={{ error: 'Required', touched: true }}
          stretch={ false }
        />
        <InputField
          label="With mask"
          input={{ name: 'input', value: '12', onChange }}
          mask="999-999"
          stretch={ false }
        />
      </Column>
    </Grid.Box>
    <Grid.Box>
      <Column gap="md">
        <InputField
          label="With row direction"
          direction="row"
          input={{ name: 'input', onChange }}
          stretch={ false }
        />
        <InputField
          label="With custom width"
          direction="row"
          width={ 7 }
          input={{ name: 'input', onChange }}
        />
        <InputField
          label="With stretch and row direction"
          direction="row"
          input={{ name: 'input', onChange }}
        />
      </Column>
    </Grid.Box>
  </Grid.Layout>
);

common.story = {
  name: 'common',
};
