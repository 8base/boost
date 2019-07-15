// @flow
import React from 'react';
import { Table } from './';
import { TableAction } from './TableAction';

describe('<Table />', () => {
  const TABLE_DATA = [{
    id: '1',
    firstName: 'Cecily',
  }, {
    id: '2',
    firstName: 'Dian',
  }, {
    id: '3',
    firstName: 'Preston',
  }, {
    id: '4',
    firstName: 'Laveta',
  }];

  const renderTableBody = (client) => (
    <Table.BodyRow columns="repeat(6, 1fr)" key={ client.id }>
      <Table.BodyCell>
        { client.id }
      </Table.BodyCell>
      <Table.BodyCell>
        { client.firstName }
      </Table.BodyCell>
    </Table.BodyRow>
  );

  it('should render table', () => {
    const wrapper = mount(
      <BoostProvider>
        <Table>
          <Table.Header columns="repeat(6, 1fr)">
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Header>
          <Table.Body data={ TABLE_DATA }>
            { renderTableBody }
          </Table.Body>
          <Table.Footer>Footer</Table.Footer>
        </Table>
      </BoostProvider>,
    );

    expect(wrapper.find(Table.Header).at(0).find(Table.HeaderCell).at(0).text()).toBe('Id');
    expect(wrapper.find(Table.Header).at(0).find(Table.HeaderCell).at(1).text()).toBe('Name');

    expect(wrapper.find(Table.BodyRow).at(0).find(Table.BodyCell).at(0).text()).toBe('1');
    expect(wrapper.find(Table.BodyRow).at(0).find(Table.BodyCell).at(1).text()).toBe('Cecily');

    expect(wrapper.find(Table.BodyRow).at(3).find(Table.BodyCell).at(0).text()).toBe('4');
    expect(wrapper.find(Table.BodyRow).at(3).find(Table.BodyCell).at(1).text()).toBe('Laveta');
  });


  it('should call action callback', () => {
    const onActionClick = jest.fn();

    const wrapper = mount(
      <Table>
        <Table.Header columns="repeat(6, 1fr)" >
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
        </Table.Header>
        <Table.Body data={ TABLE_DATA } action="Create Client" onActionClick={ onActionClick }>
          { renderTableBody }
        </Table.Body>
      </Table>,
    );

    expect(wrapper.find(TableAction).text()).toBe('Create Client');

    wrapper.find(TableAction).find('button').simulate('click');
    expect(onActionClick).toHaveBeenCalled();
  });


  it('should render with custom action button', () => {
    const wrapper = mount(
      <Table>
        <Table.Header columns="repeat(6, 1fr)" >
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
        </Table.Header>
        <Table.Body data={ TABLE_DATA } action={ <button>Create Client</button> }>
          { renderTableBody }
        </Table.Body>
      </Table>,
    );

    expect(wrapper.find(TableAction).text()).toBe('Create Client');
  });

  it('should render without data', () => {
    const wrapper = mount(
      <Table>
        <Table.Header columns="repeat(6, 1fr)" >
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
        </Table.Header>
        <Table.Body data={ [] } action={ <button>Create Client</button> }>
          { renderTableBody }
        </Table.Body>
      </Table>,
    );

    expect(wrapper.find(Table.BodyRow)).toHaveLength(0);
    expect(wrapper.find(Table.Body).find('Icon')).toHaveLength(1);

  });
});
