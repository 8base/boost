// @flow

import React, { Component } from 'react';

import { Button } from '../../Button';
import { Link } from '../../typography/Link';
import { Text } from '../../typography/Text';
import { createStyledTag, createTheme, getThemeStyle, getThemeColors } from '../../../utils';

type FileInputProps = {|
|};

const name = 'fileInput';

const theme = createTheme(name, (colors: *, sizes: *): * => ({
  modifiers: {
  },
  defaults: {
  },
}));

class FileInput extends React.Component {
  onChange = (event) => {
    const { multiple, onChange } = this.props;

    const value = multiple ? [...event.target.files] : event.target.files[0];

    onChange(value);
  };

  collectProps() {
    const { multiple } = this.props;

    return {
      multiple,
      onChange: this.onChange
    };
  }

  render() {
    const { value } = this.props;

    if (value) {
      return (
        <div>
          {
            React.Children.toArray((Array.isArray(value) ? value : [value]).map(
              ({ name }, index) => <React.Fragment><Text size="sm">{name}</Text><br /></React.Fragment>
            ))
          }
          <Link size="sm" tagName="label">Choose Other Files<input style={{ display: 'none' }} type="file" {...collectedProps} /></Link>
        </div>
      );
    }

    const collectedProps = this.collectProps();

    return <Button stretch tagName="label" color="neutral">Choose Files<input style={{ display: 'none' }} type="file" {...collectedProps} /></Button>
  }
} 

export { FileInput, theme };
