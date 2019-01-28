 /* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/tag';
import { MDXPlayground } from './MDXPlayground';
import { Heading, Tag } from '@8base/boost';

/**
 * Use explicit class names for all the components being rendered.
 */
const Components = {}

Components.code = MDXPlayground;
Components.inlineCode = props => <Tag color="LIGHT_GRAY4" {...props} />
Components.wrapper = props => <React.Fragment {...props} />
Components.h1 = props => <Heading type="h1" {...props} />
Components.h2 = props => <Heading type="h2" {...props} />
Components.h3 = props => <Heading type="h3" {...props} />
Components.h4 = props => <Heading type="h4" {...props} />
Components.h5 = props => <Heading type="h5" {...props} />
Components.h6 = props => <Heading type="h6" {...props} />
Components.p = props => <p className="paragraph" {...props} />
Components.ul = props => <ul className="ul" {...props} />
Components.ol = props => <ol className="ol" {...props} />
Components.li = props => <li className="li" {...props} />
Components.a = props => <a className="link" {...props} />
Components.blockquote = props => (
  <blockquote className="blockquote" {...props} />
)
Components.strong = props => <strong className="strong" {...props} />

class DocsMDXProvider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <MDXProvider components={Components}>{this.props.children}</MDXProvider>
    )
  }
}

export { DocsMDXProvider };
