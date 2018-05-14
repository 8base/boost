// @flow

import React, { Component } from 'react';
import find from 'lodash/find';

import { SelectTag, SelectValue, SelectChevron } from './Select.theme';
import { Dropdown } from '../Dropdown';
import { Scrollable } from '../Scrollable';
import { Menu } from '../Menu';
import { Icon } from '../Icon';

type SelectProps = {|
  options: Array<{ content: mixed, value: string }>,
  onChange: (selectedValue: mixed, event?: SyntheticInputEvent<HTMLInputElement>) => void,
  placeholder?: string,
  value?: string,
  stretch?: boolean,
|};

type SelectState = {|
  selectedValue: ?string,
  isOpen: boolean,
|}

class Select extends Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);

    this.state = {
      selectedValue: props.value || null,
      isOpen: false,
    };
  }

  setSelectedValue = (selectedValue: string) => {
    this.setState({ selectedValue });
  }

  closeSelect = () => {
    this.setState({ isOpen: false });
  };

  openSelect = () => {
    this.setState({ isOpen: true });
  };

  onSelectOption = (selectedValue: string) => () => {
    this.setSelectedValue(selectedValue);

    this.props.onChange(selectedValue);

    this.closeSelect();
  };

  getSelectedOption() {
    const { selectedValue } = this.state;
    const { options } = this.props;

    return find(options, { value: selectedValue });
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
      <SelectTag { ...rest } tagName="div">
        <Dropdown.Plate isOpen={ this.state.isOpen } onCloseDropdown={ this.closeSelect } onOpenDropdown={ this.openSelect }>
          <Dropdown.Head stretch={ stretch }>
            <SelectValue isPlaceholder={ !selectedOption }>
              { selectedOption ? selectedOption.content : placeholder }
              <SelectChevron><Icon name="ChevronDown" /></SelectChevron>
            </SelectValue>
          </Dropdown.Head>
          <Dropdown.Body background="none" padding="none" stretch={ stretch }>
            <Menu.Plate>
              <Scrollable>
                {
                  React.Children.toArray(
                    options.map(({ content, value }) => (
                      <Menu.Item
                        key={ value }
                        onClick={ this.onSelectOption(value) }>
                        { content }
                      </Menu.Item>
                    )))
                }
              </Scrollable>
            </Menu.Plate>
          </Dropdown.Body>
        </Dropdown.Plate>
      </SelectTag>
    );
  }
}

export { Select };
