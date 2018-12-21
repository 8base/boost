// @flow
import React from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import onClickOutside from 'react-onclickoutside';

import { TooltipTargetTag, TooltipMessageTag } from './Tooltip.theme';


type RenderProps = {
  isOpen: boolean,
  openTooltip: () => void,
  closeTooltip: () => void,
  toggleTooltip: () => void,
}

type TooltipProps = {
  children: React$Node | (RenderProps) => React$Node,
  /** Default content position relative target */
  placement?: 'top' | 'left' | 'bottom' | 'right',
  /** Custom tag of the tooltip target */
  tagName?: string,
  /** Custom style of the cursor */
  cursor?: string,
  /** Tooltip message */
  message: React$Node,
  /** Default state of the opening */
  defaultOpen?: boolean,
  /** Possible tooltip trigger */
  trigger?: 'hover' | 'click',
}

type TooltipState = {
  isOpen: boolean,
}

const Tooltip: React$ComponentType<TooltipProps> = onClickOutside(
  class Tooltip extends React.PureComponent<TooltipProps, TooltipState> {

    static defaultProps = {
      defaultOpen: false,
      trigger: 'hover',
      tagName: 'span',
      cursor: 'default',
    };

    constructor(props: TooltipProps) {
      super(props);

      this.state = {
        isOpen: props.defaultOpen || false,
      };
    }

    openTooltip =() => this.setState({ isOpen: true });
    closeTooltip = () => this.setState({ isOpen: false });
    toggleTooltip = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }));


    handleClickOutside = (event: *) => {
      this.closeTooltip();
      event.stopPropagation();
    };

    renderTooltipMessage = () => {
      const { placement, message } = this.props;
      const { isOpen } = this.state;

      return (
        <Popper placement={ placement }>
          { ({ ref, style, placement }) => (
            <If condition={ isOpen }>
              <TooltipMessageTag
                tagName="div"
                insideRef={ ref }
                data-placement={ placement }
                onClick={ (event: *) => event.stopPropagation() }
                style={{
                  ...style,
                  opacity: 1,
                }}
              >
                { message }
              </TooltipMessageTag>
            </If>
          ) }
        </Popper>
      );
    }

    render() {
      const { children, tagName, cursor, placement, message, trigger, ...rest } = this.props;
      const { isOpen } = this.state;

      const targetTriggerEvents = typeof children === 'function'
        ? {}
        : trigger === 'hover'
          ? {
            onMouseEnter: this.openTooltip,
            onMouseLeave: this.closeTooltip,
          } : {
            onClick: this.toggleTooltip,
          };


      const renderedChildren = typeof children === 'function'
        ? children({
          isOpen,
          openTooltip: this.openTooltip,
          closeTooltip: this.closeTooltip,
          toggleTooltip: this.toggleTooltip,
        })
        : children;

      return (
        <Manager tag={ false }>
          <Reference>
            { ({ ref }) => (
              <TooltipTargetTag
                { ...rest }
                { ...targetTriggerEvents }
                style={{ cursor }}
                tagName={ tagName }
                insideRef={ ref }
              >
                { renderedChildren }
                { this.renderTooltipMessage() }
              </TooltipTargetTag>
            ) }
          </Reference>
        </Manager>
      );
    }
  },
);

export {
  Tooltip,
};
