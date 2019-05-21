// @flow

import { DateTime } from 'luxon';

export const DATE_MASK = '99/99/9999';
export const DATETIME_MASK = '99/99/9999, 99:99 aa';

export const DATE_FORMAT = 'MM/dd/yyyy';
export const DATETIME_FORMAT = 'MM/dd/yyyy, hh:mm a';

export const fromISOToViewFormat = (value: ?string, withTime: ?boolean) => {
  if (value) {
    value = DateTime.fromISO(value);

    if (value.isValid) {
      value = value.toFormat(withTime ? DATETIME_FORMAT : DATE_FORMAT);
    } else {
      value = '';
    }
  } else {
    value = '';
  }

  return value;
};

export const fromISOtoJSDate = (value: ?string) => {
  if (value) {
    value = DateTime.fromISO(value);

    if (value.isValid) {
      value = value.toJSDate();
    } else {
      value = null;
    }
  } else {
    value = null;
  }

  return value;
};

export const fromJSDateToISO = (value: ?Date, withTime: ?boolean) => {
  if (value) {
    value = DateTime.fromJSDate(value);

    value = fromLuxonToISO(value, withTime);
  } else {
    value = null;
  }

  return value;
};

export const fromViewFormatToLuxon = (value: ?string, withTime: ?boolean) => {
  if (value) {
    value = DateTime.fromFormat(value, withTime ? DATETIME_FORMAT : DATE_FORMAT);
  } else {
    value = null;
  }

  return value;
};

export const fromLuxonToISO = (value: ?Object, withTime: ?boolean) => {
  if (value && value.isValid) {
    value = withTime ? value.setZone('utc').toISO() : value.toISODate();
  } else {
    value = null;
  }

  return value;
};
