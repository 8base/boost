import React from 'react';

export default (asStory) => {
  asStory('Components/DateInput', module, (story, { DateInput }) => {
    class DateInputContainer extends React.Component {
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
        const { value } = this.state;

        return <DateInput { ...this.props } value={ value } onChange={ this.onChange } />;
      }
    }

    story
      .add('default', () => (
        <React.Fragment>
          <DateInputContainer value={ null } />
          <DateInputContainer value="2018-11-07" />
          <DateInputContainer value={ null } withTime />
        </React.Fragment>
      ));
  });
};

