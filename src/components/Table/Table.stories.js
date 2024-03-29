/* eslint-disable no-alert */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Table, TableBuilder, Link, Dropdown, Icon, Column, Text, Menu, Button, Row } from '../../';

const TABLE_COLUMNS = [
  {
    name: 'id',
    title: 'Id',
    width: '64px',
  },
  {
    name: 'createdAt',
    title: 'Created At',
  },
  {
    name: 'updatedAt',
    title: 'Updated At',
  },
  {
    name: 'firstName',
    title: 'First Name',
  },
  {
    name: 'lastName',
    title: 'Last Name',
  },
  {
    name: 'email',
    title: 'Email',
  },
];

const TABLE_EXPANDABLE_COLUMNS = [
  {
    name: 'id',
    title: 'Id',
    width: '82px',
  },
  ...TABLE_COLUMNS.slice(1),
];

const TABLE_DATA = [
  {
    id: '1',
    createdAt: '2018-09-03T09:59:43.000Z',
    updatedAt: '2018-09-03T09:59:43.000Z',
    firstName: 'Cecily',
    lastName: 'Oen',
    email: 'parasol@skilfish.co.uk',
  },
  {
    id: '2',
    createdAt: '2018-09-03T09:59:43.000Z',
    updatedAt: '2018-09-03T09:59:43.000Z',
    firstName: 'Dian',
    lastName: 'Wegge',
    email: 'clinanthium@illuminize.com',
  },
  {
    id: '3',
    createdAt: '2018-09-03T09:59:43.000Z',
    updatedAt: '2018-09-03T09:59:43.000Z',
    firstName: 'Preston',
    lastName: 'Bonini',
    email: 'tiza@unlovingness.net',
  },
  {
    id: '4',
    createdAt: '2018-09-03T09:59:43.000Z',
    updatedAt: '2018-09-03T09:59:43.000Z',
    firstName: 'Laveta',
    lastName: 'Unick',
    email: 'farcist@parasyphilosis.com',
  },
  {
    id: '5',
    createdAt: '2018-09-03T09:59:43.000Z',
    updatedAt: '2018-09-03T09:59:43.000Z',
    firstName: 'Lorena',
    lastName: 'Deuman',
    email: 'leucophyllous@lobectomy.co.uk',
  },
  {
    id: '6',
    createdAt: '2018-09-03T09:59:44.000Z',
    updatedAt: '2018-09-03T09:59:44.000Z',
    firstName: 'Marilu',
    lastName: 'Weiderhold',
    email: 'stich@saeume.co.uk',
  },
  {
    id: '7',
    createdAt: '2018-09-03T09:59:44.000Z',
    updatedAt: '2018-09-03T09:59:44.000Z',
    firstName: 'Delphia',
    lastName: 'Valko',
    email: 'formel@osmotherapy.org',
  },
  {
    id: '8',
    createdAt: '2018-09-03T09:59:44.000Z',
    updatedAt: '2018-09-03T09:59:44.000Z',
    firstName: 'Cleo',
    lastName: 'Galstad',
    email: 'metalworker@cuichunchulli.net',
  },
  {
    id: '9',
    createdAt: '2018-09-03T09:59:44.000Z',
    updatedAt: '2018-09-03T09:59:44.000Z',
    firstName: 'Kenyetta',
    lastName: 'Bullington',
    email: 'turbid@trilobed.edu',
  },
  {
    id: '10',
    createdAt: '2018-09-03T09:59:44.000Z',
    updatedAt: '2018-09-03T09:59:44.000Z',
    firstName: 'Carleen',
    lastName: 'Joncas',
    email: 'orthantimonic@kingbird.edu',
  },
  {
    id: '11',
    createdAt: '2018-09-03T09:59:44.000Z',
    updatedAt: '2018-09-03T09:59:44.000Z',
    firstName: 'Providencia',
    lastName: 'Cedano',
    email: 'salsola@unduke.net',
  },
  {
    id: '12',
    createdAt: '2018-09-03T09:59:44.000Z',
    updatedAt: '2018-09-03T09:59:44.000Z',
    firstName: 'Adella',
    lastName: 'Hitchen',
    email: 'calibration@undelightfully.com',
  },
  {
    id: '13',
    createdAt: '2018-09-03T09:59:44.000Z',
    updatedAt: '2018-09-03T09:59:44.000Z',
    firstName: 'Elizabeth',
    lastName: 'Bednarik',
    email: 'thallogenic@titanomachy.edu',
  },
  {
    id: '14',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Georgine',
    lastName: 'Piechowski',
    email: 'quadruplator@racemulose.co.uk',
  },
  {
    id: '15',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Matt',
    lastName: 'Sankoh',
    email: 'browed@headstand.net',
  },
  {
    id: '16',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Jamie',
    lastName: 'Rosenhagen',
    email: 'trichorrhexic@venomousness.org',
  },
  {
    id: '17',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Kristel',
    lastName: 'Pillado',
    email: 'heteroglobulose@venedotian.org',
  },
  {
    id: '18',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Rosario',
    lastName: 'Saracino',
    email: 'overage@homogamic.org',
  },
  {
    id: '19',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Cyndy',
    lastName: 'Leta',
    email: 'deserted@infirmarer.co.uk',
  },
  {
    id: '20',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Dung',
    lastName: 'Turnell',
    email: 'ba@jahve.co.uk',
  },
  {
    id: '21',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Alexia',
    lastName: 'Bosket',
    email: 'presentationism@vuln.net',
  },
  {
    id: '22',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Hyon',
    lastName: 'Caillier',
    email: 'submicroscopic@dugway.net',
  },
  {
    id: '23',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Jeanice',
    lastName: 'Francisco',
    email: 'trinodine@shogi.co.uk',
  },
  {
    id: '24',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Chas',
    lastName: 'Dalrymple',
    email: 'inadaptive@brucine.net',
  },
  {
    id: '25',
    createdAt: '2018-09-03T09:59:46.000Z',
    updatedAt: '2018-09-03T09:59:46.000Z',
    firstName: 'Meghann',
    lastName: 'Akapo',
    email: 'monostromatic@overfavorably.com',
  },
  {
    id: '26',
    createdAt: '2018-09-03T09:59:46.000Z',
    updatedAt: '2018-09-03T09:59:46.000Z',
    firstName: 'Evangelina',
    lastName: 'Korner',
    email: 'maidenliness@semiflexion.co.uk',
  },
  {
    id: '27',
    createdAt: '2018-09-03T09:59:46.000Z',
    updatedAt: '2018-09-03T09:59:46.000Z',
    firstName: 'Kelvin',
    lastName: 'Dumlao',
    email: 'unestranged@fingered.org',
  },
  {
    id: '28',
    createdAt: '2018-09-03T09:59:46.000Z',
    updatedAt: '2018-09-03T09:59:46.000Z',
    firstName: 'Robt',
    lastName: 'Basse',
    email: 'hallway@unimbordered.org',
  },
  {
    id: '29',
    createdAt: '2018-09-03T10:34:15.000Z',
    updatedAt: '2018-09-03T10:34:15.000Z',
    firstName: 'Larry',
    lastName: 'Marwick',
    email: 'lashlite@stabber.edu',
  },
  {
    id: '30',
    createdAt: '2018-09-03T10:55:52.000Z',
    updatedAt: '2018-09-03T10:55:52.000Z',
    firstName: 'sadas',
    lastName: 'dsada',
    email: 'zouxuoz@gmail.com',
  },
];

const GROUPED_TABLE_DATA = [
  {
    id: '1',
    group: 'First',
    createdAt: '2018-09-03T09:59:43.000Z',
    updatedAt: '2018-09-03T09:59:43.000Z',
    firstName: 'Cecily',
    lastName: 'Oen',
    email: 'parasol@skilfish.co.uk',
  },
  {
    id: '2',
    group: 'First',
    createdAt: '2018-09-03T10:34:15.000Z',
    updatedAt: '2018-09-03T10:34:15.000Z',
    firstName: 'Larry',
    lastName: 'Marwick',
    email: 'parasol@skilfish.co.uk',
  },
  {
    id: '3',
    group: 'First',
    createdAt: '2018-09-03T09:59:46.000Z',
    updatedAt: '2018-09-03T09:59:46.000Z',
    firstName: 'Evangelina',
    lastName: 'Korner',
    email: 'maidenliness@semiflexion.co.uk',
  },
  {
    id: '4',
    group: 'Second',
    createdAt: '2018-09-03T09:59:43.000Z',
    updatedAt: '2018-09-03T09:59:43.000Z',
    firstName: 'Dian',
    lastName: 'Wegge',
    email: 'clinanthium@illuminize.com',
  },
  {
    id: '5',
    group: 'Second',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Chas',
    lastName: 'Dalrymple',
    email: 'inadaptive@brucine.net',
  },
  {
    id: '6',
    group: 'Third',
    createdAt: '2018-09-03T09:59:43.000Z',
    updatedAt: '2018-09-03T09:59:43.000Z',
    firstName: 'Preston',
    lastName: 'Bonini',
    email: 'tiza@unlovingness.net',
  },
  {
    id: '7',
    group: 'Third',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Chas',
    lastName: 'Dalrymple',
    email: 'inadaptive@brucine.net',
  },
  {
    id: '8',
    group: 'First',
    createdAt: '2018-09-03T09:59:45.000Z',
    updatedAt: '2018-09-03T09:59:45.000Z',
    firstName: 'Chas',
    lastName: 'Dalrymple',
    email: 'inadaptive@brucine.net',
  },
];

const fetchData = async (page, pageSize) => {
  await (() => new Promise(resolve => setTimeout(resolve, 5000)))();

  return TABLE_DATA.slice((page - 1) * pageSize, page * pageSize);
};

class TableState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableState: {
        pagination: {
          page: 1,
          pageSize: 10,
          total: null,
        },
      },
      loading: props.async || false,
      data: [],
    };
  }

  async componentDidMount() {
    if (this.props.async) {
      const { tableState } = this.state;

      const data = await fetchData(tableState.pagination.page, tableState.pagination.pageSize);

      this.setState(({ tableState }) => ({
        loading: false,
        data,
        tableState: {
          ...tableState,
          pagination: {
            ...tableState.pagination,
            total: TABLE_DATA.length,
          },
        },
      }));
    } else {
      this.setState(() => ({
        data: TABLE_DATA,
      }));
    }
  }

  async componentDidUpdate(prevProps, { tableState }) {
    if (
      this.props.async &&
      (this.state.tableState.pagination.page !== tableState.pagination.page ||
        this.state.tableState.pagination.pageSize !== tableState.pagination.pageSize)
    ) {
      this.setState(() => ({ loading: true }));

      const { tableState } = this.state;

      const data = await fetchData(tableState.pagination.page, tableState.pagination.pageSize);

      this.setState(({ tableState }) => ({
        loading: false,
        data,
        tableState: {
          ...tableState,
          pagination: {
            ...tableState.pagination,
            total: TABLE_DATA.length,
          },
        },
      }));
    }
  }

  setTableState = tableState => {
    this.setState({ tableState });
  };

  render() {
    const { children } = this.props;
    const { tableState, loading, data } = this.state;

    return children({ tableState, setTableState: this.setTableState, loading, data });
  }
}

export default {
  title: 'Components/Table',
  component: Table,
};

export const defaultStory = () => (
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
        { client => (
          <Table.BodyRow columns="repeat(6, 1fr)" key={ client.id }>
            <Table.BodyCell>{ client.id }</Table.BodyCell>
            <Table.BodyCell>
              <Link to="/">{ `${client.firstName} ${client.lastName}` }</Link>
            </Table.BodyCell>
            <Table.BodyCell>{ client.email }</Table.BodyCell>
            <Table.BodyCell>{ client.createdAt }</Table.BodyCell>
            <Table.BodyCell>{ client.updatedAt }</Table.BodyCell>
            <Table.BodyCell>
              <Dropdown defaultOpen={ false }>
                <Dropdown.Head>
                  <Icon name="More" color="GRAY_30" />
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
);

defaultStory.story = {
  name: 'default',
};

export const grouped = () => (
  <div style={{ display: 'flex', height: '600px' }}>
    <TableBuilder
      columns={ TABLE_COLUMNS }
      data={ GROUPED_TABLE_DATA }
      groupBy={ (data) =>
        data.reduce(
          (acc, item) => {
            if (!acc[item.group]) {
              return { ...acc, [item.group]: [item] };
            }
            acc[item.group] = [...acc[item.group], item];
            return acc;
          }, {}) }
    />
  </div>
);

grouped.story = {
  name: 'grouped',
};

export const withLoader = () => (
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
);

withLoader.story = {
  name: 'with loader',
};

export const withoutData = () => (
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
);

withoutData.story = {
  name: 'without data',
};

export const withData = () => (
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

      <Table.Body
        data={ [TABLE_DATA[0], TABLE_DATA[1]] }
        action="Create Client"
        onActionClick={ () => alert('Create') }
      >
        { client => (
          <Table.BodyRow columns="repeat(6, 1fr)" key={ client.id }>
            <Table.BodyCell>{ client.id }</Table.BodyCell>
            <Table.BodyCell>
              <Link to="/">{ `${client.firstName} ${client.lastName}` }</Link>
            </Table.BodyCell>
            <Table.BodyCell>{ client.email }</Table.BodyCell>
            <Table.BodyCell>{ client.createdAt }</Table.BodyCell>
            <Table.BodyCell>{ client.updatedAt }</Table.BodyCell>
            <Table.BodyCell>
              <Dropdown defaultOpen={ false }>
                <Dropdown.Head>
                  <Icon name="More" color="GRAY_30" />
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
);

withData.story = {
  name: 'with data',
};

export const withCustomActionButton = () => (
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
        action={
          <Button color="success" variant="outlined" onClick={ () => alert('Create') }>
            Create Client
          </Button>
        }
      />
    </Table>
  </div>
);

withCustomActionButton.story = {
  name: 'with custom action button',
};

export const withSort = () => (
  <div style={{ display: 'flex', height: '600px' }}>
    <TableState>
      { ({ tableState, setTableState }) => (
        <TableBuilder
          columns={ TABLE_COLUMNS }
          data={ TABLE_DATA }
          action="Create Client"
          onActionClick={ () => alert('Create') }
          onChange={ setTableState }
          tableState={ tableState }
          withMultipleSort
        />
      ) }
    </TableState>
  </div>
);

withSort.story = {
  name: 'with sort',
};

export const withSelectionStory = () => (
  <div style={{ display: 'flex', height: '600px' }}>
    <TableState>
      { ({ tableState, setTableState }) => (
        <TableBuilder
          columns={ TABLE_COLUMNS }
          data={ TABLE_DATA }
          action="Create Client"
          onActionClick={ () => alert('Create') }
          onChange={ setTableState }
          tableState={ tableState }
          withSelection
        />
      ) }
    </TableState>
  </div>
);

withSelectionStory.story = {
  name: 'with selection',
};

export const withPaginationStory = () => (
  <div style={{ display: 'flex', height: '600px' }}>
    <TableState async>
      { ({ tableState, setTableState, loading, data }) => (
        <TableBuilder
          columns={ TABLE_COLUMNS }
          data={ data }
          action="Create Client"
          onActionClick={ () => alert('Create') }
          onChange={ setTableState }
          tableState={ tableState }
          withPagination
          withSelection
          loading={ loading }
        />
      ) }
    </TableState>
  </div>
);

withPaginationStory.story = {
  name: 'with pagination',
};

export const withCondensedModifier = () => (
  <div style={{ display: 'flex', height: '600px' }}>
    <TableState>
      { ({ tableState, setTableState }) => (
        <TableBuilder
          columns={ TABLE_COLUMNS }
          data={ TABLE_DATA }
          action="Create Client"
          onActionClick={ () => alert('Create') }
          onChange={ setTableState }
          tableState={ tableState }
          condensed
        />
      ) }
    </TableState>
  </div>
);

withCondensedModifier.story = {
  name: 'with condensed modifier',
};

export const withBorderedModifier = () => (
  <div style={{ display: 'flex', height: '600px' }}>
    <TableState>
      { ({ tableState, setTableState }) => (
        <TableBuilder
          columns={ TABLE_COLUMNS }
          data={ TABLE_DATA }
          action="Create Client"
          onActionClick={ () => alert('Create') }
          onChange={ setTableState }
          tableState={ tableState }
          bordered
        />
      ) }
    </TableState>
  </div>
);

withBorderedModifier.story = {
  name: 'with bordered modifier',
};

export const withCustomNoDataComponent = () => (
  <div style={{ display: 'flex', height: '600px' }}>
    <TableState>
      { ({ tableState, setTableState }) => (
        <TableBuilder
          columns={ TABLE_COLUMNS }
          data={ [] }
          onChange={ setTableState }
          tableState={ tableState }
          noData={
            <Column gap="none" justifyContent="center" alignItems="center" stretch>
              <Icon name="EightBase" size="xl" color="GRAY_20" />
              <Text color="GRAY_20">Can't find any data</Text>
            </Column>
          }
          bordered
        />
      ) }
    </TableState>
  </div>
);

withCustomNoDataComponent.story = {
  name: 'with custom NoData component',
};

export const WithExpandableRows = () => {
  const renderCell = useCallback(
    ({ name: columnName }, rowData, { expandRow, isExpanded }) => {
      if (columnName === 'id') {
        return (
          <Button data-testid={ `expand-row-${rowData[columnName]}` } variant="link" onClick={ () => expandRow() } withIconAutosize={ false }>
            <Icon name={ isExpanded ? 'ChevronTop' : 'ChevronDown' } size="sm" />
            <span>{ rowData[columnName] }</span>
          </Button>
        );
      }

      return rowData[columnName];
    },
    [],
  );

  return (
    <div style={{ display: 'flex', height: '600px' }}>
      <TableBuilder
        columns={ TABLE_EXPANDABLE_COLUMNS }
        data={ TABLE_DATA }
        expandedRowRender={ ({ rowData }) => (
          // It will be rendered in <TableBodyRow /> that has the same `grid-template-columns` as any other row in the table
          // So in order to occupy the whole width you can use `grid-column` for that
          <Table.BodyCell style={{ gridColumn: '1 / -1' }} bordered={ false }>
            Expanded row with id { rowData.id }
          </Table.BodyCell>
        ) }
        renderCell={ renderCell }
        bordered
      />
    </div>
  );
};

WithExpandableRows.story = {
  name: 'with expandable rows',
};

const LoadableComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? <div>Loading...</div> : <div>Loaded</div>;
};

export const WithControlledExpandableRows = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const ids = useMemo(() => TABLE_DATA.map(({ id }) => id), []);

  const renderCell = useCallback(
    ({ name: columnName }, rowData, { expandRow, isExpanded }) => {
      if (columnName === 'id') {
        return (
          <Button variant="link" onClick={ () => expandRow() } withIconAutosize={ false }>
            <Icon name={ isExpanded ? 'ChevronTop' : 'ChevronDown' } size="sm" />
            <span>{ rowData[columnName] }</span>
          </Button>
        );
      }

      return rowData[columnName];
    },
    [],
  );

  const expandedRowRender = useCallback(({ rowData }) => (
    <React.Fragment>
      <div />
      <Table.BodyCell bordered={ false }>
      Expanded row with id { rowData.id }
      </Table.BodyCell>
      <Table.BodyCell style={{ gridColumn: '3 / -1' }} bordered={ false }>
        <LoadableComponent />
      </Table.BodyCell>
    </React.Fragment>
  ), []);

  return (
    <Column style={{ height: '600px' }} gap="md">
      <Row gap="md">
        <Button onClick={ () => setExpandedRowKeys(ids) }>Expand all</Button>
        <Button onClick={ () => setExpandedRowKeys([]) } variant="outlined">
          Collapse all
        </Button>
      </Row>

      <TableBuilder
        columns={ TABLE_EXPANDABLE_COLUMNS }
        data={ TABLE_DATA }
        expandedRowKeys={ expandedRowKeys }
        expandedRowRender={ expandedRowRender }
        renderCell={ renderCell }
        onExpand={ ({ key, isExpanded }) =>
          setExpandedRowKeys(s =>
            isExpanded ? [...s, key] : s.filter(el => el !== key),
          )
        }
        bordered={ false }
      />
    </Column>
  ); };

WithControlledExpandableRows.story = {
  name: 'with controlled expandable rows',
};
