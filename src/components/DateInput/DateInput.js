// @flow

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { DateInputValue } from './DateInputValue';
import { Dropdown } from '../Dropdown';
import * as utils from './DateInput.utils';


type DateInputProps = {
  onChange: (value: ?string) => void,
  value: ?string,
  withTime?: boolean,
  withPortal?: boolean,
  stretch?: boolean,
  clearable?: boolean,
  disabled?: boolean,
  isMonthPicker?: boolean,
  placeholder?: string,
};

type DateInputState = {|
  isOpen: boolean,
  textValue: ?string,
|};

class DateInput extends React.Component<DateInputProps, DateInputState> {
  static defaultProps = {
    stretch: true,
    withPortal: true,
  };

  constructor(props: DateInputProps) {
    super(props);

    const dateFormat = this.getDateFormat();

    this.state = {
      textValue: utils.fromISOToViewFormat(props.value, dateFormat),
      isOpen: false,
    };
  }

  componentDidUpdate(prevProps: DateInputProps) {
    const { value } = this.props;
    const dateFormat = this.getDateFormat();

    if (value !== prevProps.value) {
      this.setState({
        textValue: utils.fromISOToViewFormat(value, dateFormat),
      });
    }
  }

  getDateFormat() {
    const { isMonthPicker, withTime } = this.props;

    return isMonthPicker ? utils.YEAR_MONTH_FORMAT : withTime ? utils.DATETIME_FORMAT : utils.DATE_FORMAT;
  }

  onChangeText = ({ target: { value }}: Object) => {
    const { withTime } = this.props;
    const dateFormat = this.getDateFormat();

    this.setState({ textValue: value });

    if (!value) {
      this.props.onChange(null);
      return;
    } else {
      const luxonValue = utils.fromViewFormatToLuxon(value, dateFormat);

      if (luxonValue && luxonValue.isValid) {
        value = utils.fromLuxonToISO(luxonValue, withTime);

        this.props.onChange(value);
      }
    }
  };

  onBlur = () => {
    const { textValue } = this.state;
    const dateFormat = this.getDateFormat();

    const luxonValue = utils.fromViewFormatToLuxon(textValue, dateFormat);

    if (luxonValue && !luxonValue.isValid) {
      this.setState({ textValue: utils.fromISOToViewFormat(this.props.value, dateFormat) });
    }
  }

  onChangeDate = (selected: Date) => {
    const { withTime, value } = this.props;

    const isoValue = utils.fromJSDateToISO(selected, withTime);

    this.props.onChange(isoValue);

    if (!withTime || Math.abs(selected - (value ? new Date(value) : 0)) <= 24 * 60 * 60 * 1000) {
      this.close();
    }
  };

  collectProps() {
    const { value, withTime, withPortal, isMonthPicker, ...rest } = this.props;

    return {
      selected: utils.fromISOtoJSDate(value),
      dateFormat: this.getDateFormat(),
      ...rest,
      showTimeSelect: withTime,
      showMonthYearPicker: isMonthPicker,
      onChange: this.onChangeDate,
      inline: true,
      todayButton: isMonthPicker ? 'Current' : 'Today',
    };
  }

  open = () => {
    const { isOpen } = this.state;

    if (!isOpen) {
      this.setState({ isOpen: true });
    }
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const collectedProps = this.collectProps();

    const { value, withTime, withPortal, stretch, onChange, clearable, disabled, placeholder, isMonthPicker, ...rest } = this.props;

    const { textValue, isOpen } = this.state;
    const mask = isMonthPicker ? utils.YEAR_MONTH_MASK : withTime ? utils.DATETIME_MASK : utils.DATE_MASK;

    return (
      <Dropdown
        isOpen={ isOpen && !disabled }
        stretch={ stretch }
        onCloseDropdown={ this.close }
        onOpenDropdown={ this.open }
        { ...rest }
      >
        <Dropdown.Head onClick={ this.open }>
          <DateInputValue
            placeholder={ placeholder }
            mask={ mask }
            value={ textValue }
            onChange={ this.onChangeText }
            onBlur={ this.onBlur }
            clearable={ clearable }
            disabled={ disabled }
          />
        </Dropdown.Head>
        <Dropdown.Body withPortal={ withPortal } modifiers={{
          preventOverflow: {
            boundariesElement: 'viewport',
          },
        }}>
          <DatePicker { ...collectedProps } />
        </Dropdown.Body>
      </Dropdown>
    );
  }
}

export { DateInput };
