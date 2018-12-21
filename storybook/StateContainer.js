import React from 'react';

export class StateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  onChange = (value) => {
    // eslint-disable-next-line
    console.log(value);
    this.setState({ value });
  };

  render() {
    const { children, withForm } = this.props;
    const { value } = this.state;

    if (withForm) {
      return React.Children.map(children, child =>
        React.cloneElement(child, { input: { value, onChange: this.onChange }, meta: {}}),
      );
    }

    return React.Children.map(children, child =>
      React.cloneElement(child, { value, onChange: this.onChange }),
    );
  }
}
