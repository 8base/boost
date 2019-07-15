// @flow
import React from 'react';
import { Card } from './';

describe('<Card />', () => {
  it('should render Card components', () => {
    const wrapper = mount(
      <Card padding="sm">
        <Card.Header padding="md">Header</Card.Header>
        <Card.Body padding="lg">
          <Card.Section>
            Body
          </Card.Section>
        </Card.Body>
        <Card.Footer padding="xl">Footer</Card.Footer>
      </Card>,
    );

    expect(wrapper.find(Card.Header).text()).toBe('Header');
    expect(wrapper.find(Card.Body).text()).toBe('Body');
    expect(wrapper.find(Card.Footer).text()).toBe('Footer');

    expect(wrapper.find(Card.Header).props().padding).toBe('md');
    expect(wrapper.find(Card.Body).props().padding).toBe('lg');
    expect(wrapper.find(Card.Footer).props().padding).toBe('xl');

    expect(wrapper).toMatchSnapshot();
  });


  it('should render Card components with render prop', () => {
    const wrapper = mount(
      <BoostProvider>
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
      </BoostProvider>,
    );

    expect(wrapper.find(Card.Body).text()).toBe('Body 42');
  });
});

