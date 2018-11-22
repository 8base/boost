import React from 'react';

export default (asStory) => {
  asStory('ATOMS/DATA ENTRY/DateInputField', module, (story, { DateInputField }) => {
    class DateInputFieldContainer extends React.Component {
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

        return <DateInputField { ...this.props } input={{ value, onChange: this.onChange }} />;
      }
    }

    story
      .add('default', () => (
        <React.Fragment>
          <DateInputFieldContainer label="Date" value={ null } />
          <DateInputFieldContainer label="Date" value="2018-11-07" />
          <DateInputFieldContainer label="Datetime" value={ null } withTime />
        </React.Fragment>
      ));
  });
};

