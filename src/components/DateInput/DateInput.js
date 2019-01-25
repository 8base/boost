// @flow

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { DateInputValue } from './DateInputValue';
import { Dropdown } from '../Dropdown';
import * as utils from './DateInput.utils';


type DateInputProps = {|
  onChange: (value: ?string) => void,
  value: ?string,
  withTime?: boolean,
  stretch?: boolean,
  clearable?: boolean,
|};

type DateInputState = {|
  isOpen: boolean,
  textValue: ?string,
|};

class DateInput extends React.Component<DateInputProps, DateInputState> {
  static defaultProps = {
    stretch: true,
  };

  constructor(props: DateInputProps) {
    super(props);

    this.state = {
      textValue: utils.fromISOToViewFormat(props.value, props.withTime),
      isOpen: false,
    };
  }

  componentDidUpdate(prevProps: DateInputProps) {
    const { value, withTime } = this.props;

    if (value && value !== prevProps.value) {
      this.setState({
        textValue: utils.fromISOToViewFormat(value, withTime),
      });
    }
  }

  onChangeText = ({ target: { value }}: Object) => {
    const { withTime } = this.props;

    this.setState({ textValue: value });

    if (!value) {
      this.props.onChange(null);
      return;
    } else {
      const luxonValue = utils.fromViewFormatToLuxon(value, withTime);

      if (luxonValue && luxonValue.isValid) {
        value = utils.fromLuxonToISO(luxonValue, withTime);

        this.props.onChange(value);
      }
    }
  };

  onBlur = () => {
    const { withTime } = this.props;
    const { textValue } = this.state;

    const luxonValue = utils.fromViewFormatToLuxon(textValue, withTime);

    if (luxonValue && !luxonValue.isValid) {
      this.setState({ textValue: utils.fromISOToViewFormat(this.props.value, withTime) });
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
    const { value, withTime, ...rest } = this.props;

    const dateFormat = withTime ? utils.DATETIME_FORMAT : utils.DATE_FORMAT;

    return {
      selected: utils.fromISOtoJSDate(value),
      dateFormat,
      ...rest,
      showTimeSelect: withTime,
      onChange: this.onChangeDate,
      inline: true,
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

    const { value, withTime, stretch, onChange, clearable, ...rest } = this.props;

    const { textValue, isOpen } = this.state;
    const mask = withTime ? utils.DATETIME_MASK : utils.DATE_MASK;

    return (
      <Dropdown
        isOpen={ isOpen }
        stretch={ stretch }
        onCloseDropdown={ this.close }
        onOpenDropdown={ this.open }
        { ...rest }
      >
        <Dropdown.Head onClick={ this.open }>
          <DateInputValue mask={ mask } value={ textValue } onChange={ this.onChangeText } onBlur={ this.onBlur } clearable={ clearable } />
        </Dropdown.Head>
        <Dropdown.Body withPortal modifiers={{
          preventOverflow: {
            boundariesElement: 'viewport',
          },
        }}>
          <DatePicker { ...collectedProps } todayButton="Today" />
        </Dropdown.Body>
      </Dropdown>
    );
  }
}

export { DateInput };
