// @flow

import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { injectGlobal } from 'emotion';
import 'react-datepicker/dist/react-datepicker.css';

import { createStyledTag, createTheme } from '../../../utils';
import { DateInputValue } from './DateInputValue';

injectGlobal(`
  .react-datepicker-wrapper, .react-datepicker__input-container {
    display: block;
  }
`);

type DateInputProps = {|
  onChange: (value: ?string) => void,
  value: string,
|};

const name = 'dateInput';

const theme = createTheme(name, {});

const DateInputTag = createStyledTag(name, {
  display: 'flex',
  width: '100%',
  '> div': {
    flex: '1',
  },
});

class DateInput extends React.Component<DateInputProps> {
  onChange = (value: any) => {
    this.props.onChange(value ? value.format('YYYY-MM-DD') : null);
  };

  collectProps() {
    const { value } = this.props;

    return {
      selected: value ? moment(value) : null,
      onChange: this.onChange,
      // $FlowFixMe
      customInput: <DateInputValue />,
    };
  }

  render() {
    const collectedProps = this.collectProps();

    return <DateInputTag><DatePicker { ...collectedProps } /></DateInputTag>;
  }
}

export { DateInput, theme };
