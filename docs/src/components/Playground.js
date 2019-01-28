import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import * as components from '@8base/boost'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import Component from '@reach/component-component';

class Playground extends React.Component {
  static propTypes = {
    codeText: PropTypes.string.isRequired,
    scope: PropTypes.object,
    isOpenByDefault: PropTypes.bool
  }

  constructor(props) {
    super(props)

    this.state = {
      isCodeCollapsed: !props.isOpenByDefault,
      hasError: false,
      codeText: props.codeText
    }
  }

  componentDidCatch() {
    // Display fallback UI
    this.setState({ hasError: true })
  }

  handleToggle = () => {
    this.setState(({ isCodeCollapsed }) => ({
      isCodeCollapsed: !isCodeCollapsed
    }))
  }

  renderError = () => {
    return (
      <div className="Playground-error">
        <p>
          Oops, something went wrong in with this live preview.
          <br /> Please reload the page and try again.
        </p>
      </div>
    )
  }

  handleChange = codeText => {
    this.setState({
      codeText
    })
  }

  renderComponentNotice = () => {
    return (
      <div className="Playground-notice">
        The `Component` component is not part of Boost. It is only used in
        examples to create state.{' '}
        <a
          href="https://github.com/reactions/component"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
        .
      </div>
    )
  }

  renderProfilesNotice = () => {
    return (
      <div className="Playground-notice">
        The `profiles` variable is not part of Boost. It’s example data
        existing out of an array of user profiles.
      </div>
    )
  }

  render() {
    const { scope } = this.props
    const { codeText, hasError, isCodeCollapsed, uniqueId } = this.state

    if (hasError) return this.renderError()
    return (
      <LiveProvider
        scope={{ ReactDOM, Component, ...components, ...scope }}
        code={codeText}
        mountStylesheet={false}
      >
        <div className="Playground" data-iscodecollapsed={isCodeCollapsed}>
          <div>
            <LiveError />
            <div
              id={`code-playground-${uniqueId}`}
              className="Playground-preview"
            >
              <LivePreview />
            </div>
            {!isCodeCollapsed && (
              <div>
                {this.renderComponentNotice()}
                {this.renderProfilesNotice()}
                <LiveEditor onChange={this.handleChange} />
              </div>
            )}
          </div>
          <div
            aria-expanded={!isCodeCollapsed}
            role="button"
            className="Playground-header"
            onClick={this.handleToggle}
          >
            <components.Button color="neutral" variant="outlined" stretch>
            {isCodeCollapsed ? 'Show code' : 'Hide code'}
            </components.Button>
          </div>
        </div>
      </LiveProvider>
    )
  }
}

export { Playground };