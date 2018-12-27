// @flow
import React from 'react';
import { Card } from './';

describe('<Card />', () => {
  it('should render Card components', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Section>
              Body
            </Card.Section>
          </Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.find(Card.Header).text()).toBe('Header');
    expect(wrapper.find(Card.Body).text()).toBe('Body');
    expect(wrapper.find(Card.Footer).text()).toBe('Footer');
  });

  it('should render Card components with render prop', () => {
    const wrapper = mount(
      <EightBaseBoostProvider>
        <Card someArg={ 42 } padding="xl">
          { ({ someArg }: *) => (
            <React.Fragment>
              <Card.Header>Header</Card.Header>
              <Card.Body scrollable>
                Body { someArg }
              </Card.Body>
              <Card.Footer>Footer</Card.Footer>
            </React.Fragment>
          ) }
        </Card>
      </EightBaseBoostProvider>,
    );

    expect(wrapper.find(Card.Body).text()).toBe('Body 42');
  });
});

