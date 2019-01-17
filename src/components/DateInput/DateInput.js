// @flow

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { createComponentTheme } from '../../utils';
import { DateInputValue } from './DateInputValue';
import { Dropdown } from '../Dropdown';
import * as utils from './DateInput.utils';

const getGlobalCSS = ({ COLORS }: *) => `
  .react-datepicker {
    border: 1px solid ${COLORS.LIGHT_GRAY1};
    box-shadow: 0 2px 10px 0 rgba(208,215,221,0.5);
    display: flex;
    padding-bottom: 32px;
  }

  .react-datepicker__time-list-item {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .react-datepicker__header,
  .react-datepicker__today-button {
    background-color: ${COLORS.LIGHT_GRAY5};
  }

  .react-datepicker__month-container {
    width: 224px;
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__day-name {
    padding: 0;
    width: 32px;
    height: 32px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: Poppins;
    color: ${COLORS.PRIMARY_TEXT_COLOR};
  }

  .react-datepicker__day {
    padding: 0;
    width: 24px;
    height: 24px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: Poppins;
    color: ${COLORS.PRIMARY_TEXT_COLOR};
    margin-left: 4px;
    margin-right: 4px;
  }

  .react-datepicker__day--selected {
    border-radius: 24px;
    background-color: ${COLORS.LIGHT_BLUE};
    color: ${COLORS.LIGHT_PRIMARY_TEXT_COLOR};
  }

  .react-datepicker__day:hover {
    border-radius: 24px;
  }

  .react-datepicker__time-list-item--selected {
    background-color: ${COLORS.LIGHT_BLUE} !important;
  }

  .react-datepicker__week {
    display: flex;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .react-datepicker__time-list {
    max-height: 224px !important;
    height: auto !important;
  }

  .react-datepicker__time-container {
    position: initial;
    border: none;
    border-left: 1px solid ${COLORS.LIGHT_GRAY1};
    border-radius: 0;
  }

  .react-datepicker__header--time {
    border-bottom: 1px solid ${COLORS.LIGHT_GRAY1};
  }

  .react-datepicker-time__header {
    font-size: 12px;
    font-family: Poppins;
    color: ${COLORS.PRIMARY_TEXT_COLOR};
    font-weight: 600;
  }

  .react-datepicker__day--today {
    font-size: 12px;
    font-family: Poppins;
    color: ${COLORS.PRIMARY_TEXT_COLOR};
    font-weight: 600;
  }

  .react-datepicker__today-button {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 32px;
    font-size: 12px;
    font-family: Poppins;
    color: ${COLORS.PRIMARY_TEXT_COLOR};
    font-weight: 600;
    border-top: 1px solid ${COLORS.LIGHT_GRAY1};
  }

  .react-datepicker__header {
    padding: 0;
    height: 64px;
  }

  .react-datepicker__day-names {
    height: 32px;
    font-size: 12px;
    display: flex;
    border-bottom: 1px solid ${COLORS.LIGHT_GRAY1};
  }

  .react-datepicker__current-month {
    font-size: 13px;
    font-weight: 600;
    font-family: Poppins;
    color: ${COLORS.PRIMARY_TEXT_COLOR};
  }

  .react-datepicker__time-list-item {
    align-items: center;
    display: flex;
    font-size: 12px;
    height: 32px !important;
    justify-content: center;
    padding: 0 !important;
  }

  .react-datepicker__header--time,
  .react-datepicker__current-month {
    align-items: center;
    display: flex;
    height: 32px;
    justify-content: center;
    padding: 0;
  }

  .react-datepicker__navigation--previous {
    border-right-color: ${COLORS.PRIMARY_TEXT_COLOR};
    outline: none;
  }

  .react-datepicker__navigation--next {
    border-left-color: ${COLORS.PRIMARY_TEXT_COLOR};
    outline: none;
  }
`;

const name = 'dateInput';

const theme = createComponentTheme(name, (options: *) => ({
  globals: getGlobalCSS(options),
}));

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

export { DateInput, theme };
