// @flow

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { injectGlobal } from 'emotion';
import 'react-datepicker/dist/react-datepicker.css';

import { Input } from '../Input';
import { createStyledTag, createTheme, getThemeStyle, getThemeColors } from '../../../utils';

injectGlobal(`
  .react-datepicker-wrapper, .react-datepicker__input-container {
    display: block;
  }
`);

type DateInputProps = {|
|};

const name = 'dateInput';

const theme = createTheme(name, (colors: *, sizes: *): * => ({
  modifiers: {
  },
  defaults: {
  },
}));

const DateInputValue = ({ value, onChange, ...props }) => <Input onChange={(val) => onChange({ target: { value: val }})} value={value} {...props} />;

const DateInputTag = createStyledTag(name, (props: *) => ({
  display: 'flex',
  width: '100%',
  '> div': {
    flex: '1',
  }
}));

class DateInput extends React.Component {
  onChange = (value) => {
    this.props.onChange(value ? value.format('YYYY-MM-DD') : null);
  };

  collectProps() {
    const { value } = this.props;

    return {
      selected: value ? moment(value) : null,
      onChange: this.onChange,
      customInput: <DateInputValue />,
    };
  }

  render() {
    const collectedProps = this.collectProps();

    return <DateInputTag><DatePicker {...collectedProps} /></DateInputTag>;
  }
} 

export { DateInput, theme };
