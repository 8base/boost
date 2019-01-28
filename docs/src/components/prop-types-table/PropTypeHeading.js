import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tag, Text, Row, Column } from '@8base/boost';

export default class PropTypeHeading extends PureComponent {
  static propTypes = {
    defaultValue: PropTypes.any,
    name: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.any,
    isArrayOf: PropTypes.string
  }

  render() {
    const { defaultValue, name, required, type, isArrayOf } = this.props

    return (
      <Row alignItems="center">
        <Tag color="LIGHT_GRAY4">{name}</Tag>
        <Text weight="semibold">{type.raw || type.name}</Text>
        { isArrayOf && <Text>{isArrayOf}</Text> }
        { defaultValue ? <Text>= {defaultValue.value}</Text> : null}
        { required ? <Text>required</Text> : null }
      </Row>
    )
  }
}
