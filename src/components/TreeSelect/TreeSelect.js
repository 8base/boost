// @flow
import React from 'react';
import fp from 'lodash/fp';
import DropdownTreeSelect from 'react-dropdown-tree-select';

import { TreeSelectWrapperTag, CLASS_NAME_FILLED, CLASS_NAME } from './TreeSelect.theme';

type TreeData = {
  label: string,
  value: string,
  checked?: boolean,
  children: Array<TreeData>,
}

type TreeNode = {
  label: string,
  value: string,
  checked?: boolean,
  _id?: string,
}


type ToggledNode = {
  label: string,
  value: string,
  expanded: boolean,
  _id: string,
}

type TreeSelectProps = {
  options: TreeData | TreeData[],
  value: string[],
  onChange: (currentNode: TreeNode, selectedNodes: TreeNode[]) => void,
  onNodeToggle?: (ToggledNode) => void,
  stretch: boolean,
  placeholder?: string,
}


const getDeepKeys = (obj: Object) => {
  let keys = [];
  for (const key in obj) {
    keys.push(key);
    if (typeof obj[key] === 'object') {
      const subkeys = getDeepKeys(obj[key]);
      keys = keys.concat(subkeys.map((subkey) => {
        return `${key}.${subkey}`;
      }));
    }
  }
  return keys;
};


const getNodePath = (treeData: TreeData, value: string): null | string[] => {
  const treePaths = getDeepKeys(treeData).map(key => key.split('.'));

  let nodePath = null;

  [[], ...treePaths].forEach(path => {
    const node = fp.equals(path, [])
      ? treeData
      : fp.get(path, treeData);

    if (node && node.value === value) {
      nodePath = path;
    }
  });

  return nodePath;
};

class TreeSelect extends React.PureComponent<TreeSelectProps> {
  toggledNodes: { [string]: ToggledNode } = {};

  static defaultProps = {
    stretch: true,
    value: [],
    placeholder: 'Select...',
  }


  getSelectedData = fp.memoize(
    ({ value, toggledNodes, options }: *) => {

      if (!value) { return options; }

      const selectedData = value
        .reduce(
          (accum, selectedValue: string) => {
            const nodePath = getNodePath(options, selectedValue);

            if (nodePath === null) return accum;

            return fp.pipe(
              fp.set([...nodePath, 'checked'], true),
            )(accum);
          },
          options,
        );

      const expandedData = Object.keys(toggledNodes).reduce(
        (accum, key: string) => {
          const node = toggledNodes[key];
          const nodePath = getNodePath(options, node.value);

          if (nodePath === null) return accum;
          return fp.set([...nodePath, 'expanded'], node.expanded, accum);
        },
        selectedData,
      );

      return expandedData;
    },
  )

  onNodeToggle = (currentNode: ToggledNode) => {
    const { onNodeToggle } = this.props;

    onNodeToggle && onNodeToggle(currentNode);

    this.toggledNodes = {
      ...this.toggledNodes,
      [currentNode._id]: currentNode,
    };
  }

  render () {
    const { stretch, value, options, placeholder, ...rest } = this.props;

    const selectedData = this.getSelectedData({ value, options, toggledNodes: this.toggledNodes });

    const className = value.length > 0
      ? `${CLASS_NAME} ${CLASS_NAME_FILLED}`
      : CLASS_NAME;

    return (
      <TreeSelectWrapperTag tagName="div" stretch={ stretch }>
        <DropdownTreeSelect
          { ...rest }
          data={ selectedData }
          className={ className }
          onNodeToggle={ this.onNodeToggle }
          placeholderText={ placeholder }
        />
      </TreeSelectWrapperTag>
    );
  }
}


export {
  TreeSelect,
};

