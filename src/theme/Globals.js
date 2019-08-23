// @flow

import React from 'react';
import { Global } from '@emotion/core';

import { type Theme, resetStyles } from './index';

type GlobalsProps = {
  components: $PropertyType<Theme, 'components'>,
};

class Globals extends React.PureComponent<GlobalsProps> {
  render() {
    const { components } = this.props;

    return (
      <React.Fragment>
        <Global styles={ resetStyles } />

        { Object.keys(components).map(name => {
          const { globals } = components[name];

          return globals ? <Global key={ name } styles={ globals } /> : null;
        }) }
      </React.Fragment>
    );
  }
}

export { Globals };
