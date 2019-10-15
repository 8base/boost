/* eslint-disable no-alert */

import React, { useState } from 'react';
import { TopBar, Column, Icon, Text, Button } from '../../';

const TopBarWithState = props => {
  const [isOpen, setIsOpen] = useState(true);

  return <TopBar isOpen={ isOpen } onClose={ () => setIsOpen(false) } { ...props } />;
};

export default {
  title: 'Components/TopBar',
  component: TopBar,
};

export const common = () => (
  <Column gap="lg">
    <TopBar color="HOME_SELECTED">
      <Text color="WHITE" weight="semibold">
        You have 7 days until your FREE TRIAL ends.
      </Text>
      <Button color="white" variant="ghost" size="sm">
        Update
      </Button>
    </TopBar>
    <TopBarWithState color="DANGER">
      <Icon color="YELLOW_30" name="Alert" />
      <Text color="WHITE" weight="semibold">
        Oh no! Your FREE TRIAL has ended, please update your payment details.
      </Text>
      <Button color="white" variant="ghost" size="sm">
        Update
      </Button>
    </TopBarWithState>
    <TopBar color="DANGER">
      <Icon color="YELLOW_30" name="Alert" />
      <Text color="WHITE" weight="semibold">
        Oh no! Your FREE TRIAL has ended, please update your payment details.
      </Text>
      <Button color="white" variant="ghost" size="sm">
        Update
      </Button>
    </TopBar>
    <TopBar color="DANGER">
      <Text color="WHITE" weight="semibold">
        Oh no! Your FREE TRIAL has ended,
        <br />
        please update your
        <br />
        payment details.
      </Text>
    </TopBar>
  </Column>
);

common.story = {
  name: 'common',
};
