import React, { Component } from 'react';
import styled from 'react-emotion';
import find from 'lodash/find';

import { createStyledTag, createTheme } from '../../utils';
import { Dropdown } from '../Dropdown';
import { Scrollable } from '../Scrollable';
import { Menu } from '../Menu';
import { Icon } from '../Icon';

type SelectProps = {|
  name: string,
  onChange: (event?: SyntheticInputEvent) => void,
  placeholder?: string,
  value?: string,
  stretch?: boolean,
  options: Array<Object>,
|};

const name = 'select';

const theme = createTheme(name, () => ({
  modifiers: {
  },
  defaults: {
  },
}));

const SelectTag = createStyledTag(name, {

});

const SelectValue = styled('div')((props) => ({
  border: '1px solid #D0D7DD',
  borderRadius: '5px',
  color: props.theme.COLORS[props.isPlaceholder ? 'DARK_SECONDARY_TEXT_COLOR' : 'DARK_PRIMARY_TEXT_COLOR'],
  fontFamily: 'Poppins',
  fontSize: '14px',
  fontWeight: 400,
  height: '3rem',
  lineHeight: 'normal',
  outline: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0 1rem',
  justifyContent: 'space-between',
  width: '100%',
}));

const SelectChevron = styled('div')({
  paddingLeft: '1rem',
  display: 'inline-flex',
});

class Select extends Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);

    this.state = {
      value: props.value || null,
      isOpen: false,
    };
  }

  closeSelect = () => {
    this.setState({ isOpen: false });
  };

  openSelect = () => {
    this.setState({ isOpen: true });
  };

  onSelectOption = (value) => () => {
    this.setState({ value });

    this.props.onChange(value);

    this.closeSelect();
  };

  getSelectedOption() {
    const { value } = this.state;
    const { options } = this.props;

    return find(options, { value });
  }

  render() {
    const {
      value,
      placeholder,
      options,
      stretch,
      ...rest
    } = this.props;

    const selectedOption = this.getSelectedOption();

    return (
      <SelectTag tagName="div" {...rest}>
        <Dropdown.Plate isOpen={ this.state.isOpen } onCloseDropdown={this.closeSelect} onOpenDropdown={this.openSelect}>
          <Dropdown.Head stretch={stretch}>
            <SelectValue isPlaceholder={!selectedOption}>
              {selectedOption ? selectedOption.content : placeholder}
              <SelectChevron><Icon name="ChevronDown" /></SelectChevron>
            </SelectValue>
          </Dropdown.Head>
          <Dropdown.Body background="none" padding="none" stretch={stretch}>
            <Menu.Plate>
              <Scrollable>
                {
                  React.Children.toArray(
                    options.map(({ content, value }) => <Menu.Item onClick={this.onSelectOption(value)}>{content}</Menu.Item>),
                  )
                }
              </Scrollable>
            </Menu.Plate>
          </Dropdown.Body>
        </Dropdown.Plate>
      </SelectTag>
    );
  }
}

export { Select, theme };
