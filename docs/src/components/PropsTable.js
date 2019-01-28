import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Heading, Text, Column, Row, Tag } from '@8base/boost';

import PropTypeHeading from './prop-types-table/PropTypeHeading'

const QUERY = graphql`
  {
    allComponentMetadata {
      edges {
        node {
          displayName
          composes
          description {
            id
          }
          props {
            name
            docblock
            defaultValue {
              value
              computed
            }
            type {
              name
              value
              raw
            }
            required
            flowType
          }
        }
      }
    }
  }
`;

export default class PropsTable extends PureComponent {
  static propTypes = {
    of: PropTypes.string.isRequired,
    rename: PropTypes.string
  }

  isArrayOf = prop => {
    if (
      prop.type &&
      prop.type.name === 'arrayOf' &&
      typeof prop.type.value === 'object' &&
      typeof prop.type.value.raw === 'string'
    ) {
      return prop.type.value.raw
    }
  }

  getDocsForComponent = data => {
    const result = data.allComponentMetadata.edges.find(({ node }) => {
      return node.displayName === this.props.of
    })

    if (result) return result.node
    return null
  }

  renderContent = (data) => {
    const componentDocs = this.getDocsForComponent(data)

    if (!componentDocs) {
      return (
        <div>
          <p>
            The properties table for this component can’t be rendered at
            the moment, due to a bug.
          </p>
        </div>
      )
    }

    return (
      <React.Fragment>
        <Heading type="h4">
          {this.props.rename || componentDocs.displayName} Props
        </Heading>

        <Column>
          {componentDocs.props.map(prop => {
            const isArrayOf = this.isArrayOf(prop)
            const name= prop.name;
            const required= prop.required;
            const defaultValue= prop.defaultValue;
            const type= prop.flowType || {};

            return (
              <React.Fragment>
                <Row alignItems="center">
                  <Tag color="LIGHT_GRAY4">{name}</Tag>
                  <Text weight="semibold">{type.raw || type.name}</Text>
                  { isArrayOf && <Text>{isArrayOf}</Text> }
                  { defaultValue ? <Text>= {defaultValue.value}</Text> : null }
                  { required ? <Text color="LIGHT_RED">required</Text> : null }
                </Row>
                { prop.docblock ? <Text color="GRAY1">{prop.docblock}</Text> : null }
              </React.Fragment>
            )
          })}
        </Column>
      </React.Fragment>
    );
  };

  render() {
    return <StaticQuery query={QUERY} render={this.renderContent} />
  }
}
