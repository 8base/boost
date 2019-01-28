import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import DocLayout from '../../components/Layout';

const SCHEMA = {
  components: {
    items: [{
      id: 'button',
      name: 'Button',
    }, {
      id: 'checkbox',
      name: 'Checkbox',
    }]
  }
};

export default () => {
  return (
    <DocLayout>
      <Helmet>
        <title>Components · 8base Boost</title>
      </Helmet>
      <main tabIndex={-1}>
        {
          SCHEMA.components.items.map(({id, name}) => (
            <div>
              <Link to={`/components/${id}`}>{name}</Link>
            </div>
          ))
        }
      </main>
    </DocLayout>
  )
}
