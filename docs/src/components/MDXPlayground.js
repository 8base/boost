import React from 'react'
import PropTypes from 'prop-types'
import { Playground } from './Playground'

class MDXPlayground extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    collapse: PropTypes.bool,
    static: PropTypes.bool
  }

  render() {
    if (this.props.static) {
      return <pre>{this.props.children}</pre>
    }

    return (
      <Playground
        codeText={this.props.children}
        isOpenByDefault={!this.props.collapse}
      />
    )
  }
}

export { MDXPlayground };