// @flow

import React from 'react';
import memoize from 'lodash/memoize';
import { css } from 'emotion';

import { Select } from '../Select';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { theme, PaginationTag, PaginationItemsTag, PaginationItemTag } from './Pagination.theme';

type PaginationProps = {
  page?: number,
  pageSize?: number,
  defaultPage: number,
  defaultPageSize: number,
  total: number,
  showSizeChanger?: boolean,
  pageSizeOptions?: number[],
  onChange?: (page: number, pageSize: number) => any,
};

type PaginationState = {
  page: number,
  pageSize: number,
};

const VISIBLE_RANGE = 2;

const formatter = new Intl.NumberFormat('en-EN', { useGrouping: true, maximumFractionDigits: 0 });

class Pagination extends React.Component<PaginationProps, PaginationState> {
  static defaultProps = {
    defaultPage: 1,
    defaultPageSize: 10,
    total: 0,
    showSizeChanger: false,
    pageSizeOptions: [10, 20, 30, 40],
  };

  constructor(props: PaginationProps) {
    super(props);

    this.state = {
      page: props.defaultPage,
      pageSize: props.defaultPageSize,
    };
  }

  // $FlowFixMe
  createOnChange = memoize((page) => () => {
    const { onChange, pageSize: pageSizeFormProps } = this.props;
    const { pageSize: pageSizeFromState } = this.state;

    const pageSize = pageSizeFormProps || pageSizeFromState;

    this.setState(() => ({ page }));

    if (typeof onChange === 'function') {
      onChange(page, pageSize);
    }
  });

  onChangePageSize = (value: mixed) => {
    const pageSize = parseInt(value, 10);

    const { total, onChange } = this.props;
    const { page } = this.state;

    const nextPage = Math.min(page, Math.round(total / pageSize));

    this.setState(() => ({ pageSize, page: nextPage }));

    if (typeof onChange === 'function') {
      onChange(nextPage, pageSize);
    }
  };

  // $FlowFixMe
  getPageSizeOptions = (pageSizeOptions: number[]) => pageSizeOptions.map((value) => ({ value, label: String(value) }));

  render() {
    const { page: pageFromProps, pageSize: pageSizeFormProps, total, pageSizeOptions = [], showSizeChanger } = this.props;
    const { page: pageFromState, pageSize: pageSizeFromState } = this.state;

    const page = pageFromProps || pageFromState;
    const pageSize = pageSizeFormProps || pageSizeFromState;

    const numberOfPages = Math.ceil(total / pageSize);

    const leftSide = Math.min(page - VISIBLE_RANGE, numberOfPages - VISIBLE_RANGE * 2);
    const rightSide = page + VISIBLE_RANGE;

    const showLeftMore = leftSide > 2;
    const showRightMore = rightSide < numberOfPages - 1;

    const start = leftSide > 1 ? leftSide : 1;

    const pages = [...Array(VISIBLE_RANGE * 2 + 1).keys()].slice(0, numberOfPages);

    const firstRecordIndex = (page - 1) * pageSize + 1;
    const lastRecordIndex = Math.min(total, page * pageSize);

    return (
      <PaginationTag tagName="div">
        <Button size="sm" className={ css`flex-shrink: 0;` } onClick={ this.createOnChange(page - 1) } color="neutral" variant="outlined" squared disabled={ page <= 1 }>
          <Icon name="ChevronLeft" size="xs" />
        </Button>

        <PaginationItemsTag>
          <If condition={ leftSide > 1 }>
            <PaginationItemTag active={ page === 1 } onClick={ this.createOnChange(1) }>1</PaginationItemTag>
          </If>

          <If condition={ showLeftMore }>
            <PaginationItemTag disabled>
              <Icon name="More" />
            </PaginationItemTag>
          </If>

          {
            pages.map((index) => (
              <PaginationItemTag key={ index + start } active={ index + start === page } onClick={ this.createOnChange(index + start) }>
                { index + start }
              </PaginationItemTag>
            ))
          }

          <If condition={ showRightMore }>
            <PaginationItemTag disabled>
              <Icon name="More" />
            </PaginationItemTag>
          </If>

          <If condition={ rightSide < numberOfPages }>
            <PaginationItemTag active={ page === numberOfPages } onClick={ this.createOnChange(numberOfPages) }>{ numberOfPages }</PaginationItemTag>
          </If>
        </PaginationItemsTag>

        <Button size="sm" className={ css`flex-shrink: 0;` } onClick={ this.createOnChange(page + 1) } color="neutral" variant="outlined" squared disabled={ page >= numberOfPages }>
          <Icon name="ChevronRight" size="xs" />
        </Button>

        <If condition={ !!showSizeChanger }>
          <Select
            className={ css`width: 64px; margin-left: 12px;` }
            value={ pageSize }
            options={ this.getPageSizeOptions(pageSizeOptions) }
            onChange={ this.onChangePageSize }
          />
        </If>

        <Text className={ css`margin-left: 12px;` }>
          { formatter.format(firstRecordIndex) } - { formatter.format(lastRecordIndex) } of { formatter.format(total) } records
        </Text>
      </PaginationTag>
    );
  }
}

export { Pagination, theme };
