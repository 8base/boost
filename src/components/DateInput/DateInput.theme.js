import { css } from '@emotion/core';

import { createThemeTag } from '../../theme/createThemeTag';

// eslint-disable-next-line
const [DateInputTag, themeDateInput] = createThemeTag('dateInput', ({ COLORS }: *) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  modifiers: {
    stretch: {
      width: '100%',
    },
  },
  globals: css`
    .react-datepicker {
      border: 1px solid ${COLORS.PRIMARY_BORDER_COLOR};
      box-shadow: 0 2px 10px 0 rgba(208, 215, 221, 0.5);
      display: flex;
      padding-bottom: 32px;
      font-size: 12px;
      font-family: inherit;
      color: ${COLORS.PRIMARY_TEXT_COLOR};
    }

    .react-datepicker__header,
    .react-datepicker__today-button {
      background-color: ${COLORS.GRAY_10};
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
      color: ${COLORS.PRIMARY_TEXT_COLOR};
      margin-left: 4px;
      margin-right: 4px;
    }

    .react-datepicker__day:hover {
      border-radius: 24px;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item--selected {
      background-color: ${COLORS.BLUE_10};
      font-weight: 600;
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
      border-left: 1px solid ${COLORS.PRIMARY_BORDER_COLOR};
      border-radius: 0;
    }

    .react-datepicker__header--time {
      border-bottom: 1px solid ${COLORS.PRIMARY_BORDER_COLOR};
      height: 32px;
    }

    .react-datepicker-time__header {
      font-size: 12px;
      color: ${COLORS.PRIMARY_TEXT_COLOR};
      font-weight: 600;
    }

    .react-datepicker__day--today {
      color: ${COLORS.PRIMARY_TEXT_COLOR};
      font-weight: 600;
    }

    .react-datepicker__day--selected {
      border-radius: 24px;
      background-color: ${COLORS.BLUE_10};
      color: ${COLORS.LIGHT_PRIMARY_TEXT_COLOR};
    }

    .react-datepicker__today-button {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 32px;
      font-weight: 600;
      border-top: 1px solid ${COLORS.PRIMARY_BORDER_COLOR};
    }

    .react-datepicker__header {
      border-bottom: 1px solid ${COLORS.PRIMARY_BORDER_COLOR};
      padding-top: 6px;
    }

    .react-datepicker__day-names {
      display: flex;
      margin-top: 6px;
    }

    .react-datepicker-year-header {
      padding-bottom: 6px;
    }

    .react-datepicker__current-month,
    .react-datepicker-year-header {
      font-size: 13px;
      font-weight: 600;
      color: ${COLORS.PRIMARY_TEXT_COLOR};
    }

    .react-datepicker__month-wrapper {
      display: flex;
    }

    .react-datepicker__month-text {
      flex: 1;
      padding: 6px 0;
    }

    .react-datepicker__month--selected,
    .react-datepicker__month--in-selecting-range,
    .react-datepicker__month--in-range {
      background-color: ${COLORS.BLUE_10};
      color: ${COLORS.LIGHT_PRIMARY_TEXT_COLOR};
    }

    .react-datepicker__time-list-item {
      align-items: center;
      display: flex;
      height: 32px !important;
      justify-content: center;
      padding: 0 !important;
    }

    .react-datepicker__header--time,
    .react-datepicker__current-month {
      align-items: center;
      display: flex;
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

    .react-datepicker__navigation--next--with-time {
      right: 80px;
    }

    /* Disabled modifier */
    .react-datepicker__day--disabled,
    .react-datepicker__time-list-item--disabled {
      color: ${COLORS.DISABLED_TEXT_COLOR};
    }
  `,
}));

const [DateInputCalendarTag, themeDateInputCalendar] = createThemeTag('dateInputCalendar', ({ COLORS, SIZES }: *) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    maxHeight: 36,
    maxWidth: 36,
    minHeight: 36,
    minWidth: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.PRIMARY_BORDER_COLOR,
    borderTopRightRadius: SIZES.MAIN_BORDER_RADIUS,
    borderBottomRightRadius: SIZES.MAIN_BORDER_RADIUS,
    borderWidth: 1,
    borderStyle: 'solid',
    marginLeft: -1,
  },
}));

const theme = {
  ...themeDateInput,
  ...themeDateInputCalendar,
};

export { theme, DateInputTag, DateInputCalendarTag };
