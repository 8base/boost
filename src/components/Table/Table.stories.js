/* eslint-disable no-alert */

import React from 'react';

const TABLE_COLUMNS = [{
  name: 'id',
  title: 'Id',
  width: '300px',
}, {
  name: 'createdAt',
  title: 'Created At',
}, {
  name: 'updatedAt',
  title: 'Updated At',
}, {
  name: 'firstName',
  title: 'First Name',
}, {
  name: 'lastName',
  title: 'Last Name',
}, {
  name: 'email',
  title: 'Email',
}];

const TABLE_DATA = [{
  id: '1',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Cecily',
  lastName: 'Oen',
  email: 'parasol@skilfish.co.uk',
}, {
  id: '2',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Dian',
  lastName: 'Wegge',
  email: 'clinanthium@illuminize.com',
}, {
  id: '3',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Preston',
  lastName: 'Bonini',
  email: 'tiza@unlovingness.net',
}, {
  id: '4',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Laveta',
  lastName: 'Unick',
  email: 'farcist@parasyphilosis.com',
}, {
  id: '5',
  createdAt: '2018-09-03T09:59:43.000Z',
  updatedAt: '2018-09-03T09:59:43.000Z',
  firstName: 'Lorena',
  lastName: 'Deuman',
  email: 'leucophyllous@lobectomy.co.uk',
}, {
  id: '8',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Marilu',
  lastName: 'Weiderhold',
  email: 'stich@saeume.co.uk',
}, {
  id: '9',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Delphia',
  lastName: 'Valko',
  email: 'formel@osmotherapy.org',
}, {
  id: '10',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Cleo',
  lastName: 'Galstad',
  email: 'metalworker@cuichunchulli.net',
}, {
  id: '11',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Kenyetta',
  lastName: 'Bullington',
  email: 'turbid@trilobed.edu',
}, {
  id: '12',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Carleen',
  lastName: 'Joncas',
  email: 'orthantimonic@kingbird.edu',
}, {
  id: '13',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Providencia',
  lastName: 'Cedano',
  email: 'salsola@unduke.net',
}, {
  id: '14',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Adella',
  lastName: 'Hitchen',
  email: 'calibration@undelightfully.com',
}, {
  id: '15',
  createdAt: '2018-09-03T09:59:44.000Z',
  updatedAt: '2018-09-03T09:59:44.000Z',
  firstName: 'Elizabeth',
  lastName: 'Bednarik',
  email: 'thallogenic@titanomachy.edu',
}, {
  id: '16',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Georgine',
  lastName: 'Piechowski',
  email: 'quadruplator@racemulose.co.uk',
}, {
  id: '17',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Matt',
  lastName: 'Sankoh',
  email: 'browed@headstand.net',
}, {
  id: '18',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Jamie',
  lastName: 'Rosenhagen',
  email: 'trichorrhexic@venomousness.org',
}, {
  id: '19',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Kristel',
  lastName: 'Pillado',
  email: 'heteroglobulose@venedotian.org',
}, {
  id: '20',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Rosario',
  lastName: 'Saracino',
  email: 'overage@homogamic.org',
}, {
  id: '21',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Cyndy',
  lastName: 'Leta',
  email: 'deserted@infirmarer.co.uk',
}, {
  id: '22',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Dung',
  lastName: 'Turnell',
  email: 'ba@jahve.co.uk',
}, {
  id: '23',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Alexia',
  lastName: 'Bosket',
  email: 'presentationism@vuln.net',
}, {
  id: '24',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Hyon',
  lastName: 'Caillier',
  email: 'submicroscopic@dugway.net',
}, {
  id: '25',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Jeanice',
  lastName: 'Francisco',
  email: 'trinodine@shogi.co.uk',
}, {
  id: '26',
  createdAt: '2018-09-03T09:59:45.000Z',
  updatedAt: '2018-09-03T09:59:45.000Z',
  firstName: 'Chas',
  lastName: 'Dalrymple',
  email: 'inadaptive@brucine.net',
}, {
  id: '27',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Meghann',
  lastName: 'Akapo',
  email: 'monostromatic@overfavorably.com',
}, {
  id: '28',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Evangelina',
  lastName: 'Korner',
  email: 'maidenliness@semiflexion.co.uk',
}, {
  id: '29',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Kelvin',
  lastName: 'Dumlao',
  email: 'unestranged@fingered.org',
}, {
  id: '30',
  createdAt: '2018-09-03T09:59:46.000Z',
  updatedAt: '2018-09-03T09:59:46.000Z',
  firstName: 'Robt',
  lastName: 'Basse',
  email: 'hallway@unimbordered.org',
}, {
  id: '31',
  createdAt: '2018-09-03T10:34:15.000Z',
  updatedAt: '2018-09-03T10:34:15.000Z',
  firstName: 'Larry',
  lastName: 'Marwick',
  email: 'lashlite@stabber.edu',
}, {
  id: '32',
  createdAt: '2018-09-03T10:55:52.000Z',
  updatedAt: '2018-09-03T10:55:52.000Z',
  firstName: 'sadas',
  lastName: 'dsada',
  email: 'zouxuoz@gmail.com',
}];


class TableState extends React.Component {
  state = {
    tableState: {},
  }

  setTableState = (tableState) => {
    this.setState({ tableState });
  }

  render() {
    const { children } = this.props;
    const { tableState } = this.state;

    return children({ tableState, setTableState: this.setTableState });
  }
}

export default (asStory) => {
  asStory('Components/Table', module, (story, { Table, TableBuilder, Link, Dropdown, Icon, Menu, Button }) => {
    story
      .add('default', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <Table>
            <Table.Header columns="repeat(6, 1fr)">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Updated At</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Header>

            <Table.Body data={ TABLE_DATA } action="Create Client" onActionClick={ () => alert('Create') }>
              { (client) => (
                <Table.BodyRow columns="repeat(6, 1fr)" key={ client.id }>
                  <Table.BodyCell>
                    { client.id }
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Link to="/">{ `${client.firstName} ${client.lastName}` }</Link>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    { client.email }
                  </Table.BodyCell>
                  <Table.BodyCell>
                    { client.createdAt }
                  </Table.BodyCell>
                  <Table.BodyCell>
                    { client.updatedAt }
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Dropdown defaultOpen={ false }>
                      <Dropdown.Head>
                        <Icon name="Dots" color="LIGHT_GRAY2" />
                      </Dropdown.Head>
                      <Dropdown.Body pin="right">
                        <Menu>
                          <Menu.Item onClick={ () => alert('Delete') }>Delete</Menu.Item>
                        </Menu>
                      </Dropdown.Body>
                    </Dropdown>
                  </Table.BodyCell>
                </Table.BodyRow>
              ) }
            </Table.Body>
          </Table>
        </div>
      ))

      .add('with loader', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <Table>
            <Table.Header columns="repeat(6, 1fr)">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Updated At</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Header>
            <Table.Body loading action="Create Client" onActionClick={ () => alert('Create') } />
          </Table>
        </div>
      ))

      .add('without data', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <Table stretch>
            <Table.Header columns="repeat(6, 1fr)">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Updated At</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Header>

            <Table.Body />
          </Table>
        </div>
      ))

      .add('with data', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <Table>
            <Table.Header columns="repeat(6, 1fr)">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Updated At</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Header>

            <Table.Body data={ [TABLE_DATA[0], TABLE_DATA[1]] } action="Create Client" onActionClick={ () => alert('Create') }>
              { (client) => (
                <Table.BodyRow columns="repeat(6, 1fr)" key={ client.id }>
                  <Table.BodyCell>
                    { client.id }
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Link to="/">{ `${client.firstName} ${client.lastName}` }</Link>
                  </Table.BodyCell>
                  <Table.BodyCell>
                    { client.email }
                  </Table.BodyCell>
                  <Table.BodyCell>
                    { client.createdAt }
                  </Table.BodyCell>
                  <Table.BodyCell>
                    { client.updatedAt }
                  </Table.BodyCell>
                  <Table.BodyCell>
                    <Dropdown defaultOpen={ false }>
                      <Dropdown.Head>
                        <Icon name="Dots" color="LIGHT_GRAY2" />
                      </Dropdown.Head>
                      <Dropdown.Body pin="right">
                        <Menu>
                          <Menu.Item onClick={ () => alert('Delete') }>Delete</Menu.Item>
                        </Menu>
                      </Dropdown.Body>
                    </Dropdown>
                  </Table.BodyCell>
                </Table.BodyRow>
              ) }
            </Table.Body>
          </Table>
        </div>
      ))

      .add('with custom action button', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <Table stretch>
            <Table.Header columns="repeat(6, 1fr)">
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Created At</Table.HeaderCell>
              <Table.HeaderCell>Updated At</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Header>

            <Table.Body
              action={ (
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={ () => alert('Create') }
                >
                  Create Client
                </Button>
              ) }
            />
          </Table>
        </div>
      ))

      .add('with sort', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <TableState>
            { ({ tableState, setTableState }) => (
              <TableBuilder
                columns={ TABLE_COLUMNS }
                data={ TABLE_DATA }
                action="Create Client" onActionClick={ () => alert('Create') }
                onChange={ setTableState }
                tableState={ tableState }
              />
            ) }
          </TableState>
        </div>
      ))
      .add('with selection', () => (
        <div style={{ display: 'flex', height: '600px' }}>
          <TableState>
            { ({ tableState, setTableState }) => (
              <TableBuilder
                columns={ TABLE_COLUMNS }
                data={ TABLE_DATA }
                action="Create Client" onActionClick={ () => alert('Create') }
                onChange={ setTableState }
                tableState={ tableState }
                withSelection
              />
            ) }
          </TableState>
        </div>
      ));
  });
};

