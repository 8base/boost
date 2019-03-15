import React from 'react';

export class StateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  onChange = (value) => {
    this.setState({ value });
  };

  renderContent = (passedProps) => {
    const { children } = this.props;

    if (typeof children === 'function') {
      return children(passedProps);
    } else {
      return React.Children.map(children, child =>
        React.cloneElement(child, passedProps),
      );
    }
  }

  render() {
    const { withForm } = this.props;
    const { value } = this.state;

    if (withForm) {
      return this.renderContent({ input: { value, onChange: this.onChange }, meta: {}});
    }

    return this.renderContent({ value, onChange: this.onChange });
  }
}
