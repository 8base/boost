// @flow
import * as __enzume from 'enzume';

/** jsx-control-statements declaration */
declare var If: React$ComponentType<$Exact<{ condition: boolean, children: React$Node }>>;
declare var Choose: React$ComponentType<$Exact<{ children: React$Node }>>;
declare var When: React$ComponentType<$Exact<{ condition: boolean, children: React$Node }>>;
declare var Otherwise: React$ComponentType<$Exact<{ children: React$Node }>>;

/** test utils declarations */
declare var render: typeof __enzume.render;
declare var mount: typeof __enzume.mount;
declare var shallow: typeof __enzume.shallow;
declare var enzumeToJson: (any) => string;
declare var EightBaseBoostProvider: React$ComponentType<*>;

/** hocs helpers */
type UnaryFn<A, R> = (a: A) => R

declare type HOC<Base, Enhanced> = UnaryFn<
  React$ComponentType<Base>,
  React$ComponentType<Enhanced>
>;

declare type HOCProps<BaseAdd, T: Object = *> = HOC<{| ...$Exact<BaseAdd>, ...$Exact<T> |}, T>
declare type HOCPropsInOut<BaseAdd, Enhanced: Object = *> = HOC<{ ...$Exact<Enhanced>, ...BaseAdd }, Enhanced>;

// eslint-disable-next-line no-unused-vars
type HOCBase_<A, B, C: HOC<A, B>> = A;
declare type HOCBase<C> = HOCBase_<*, *, C>;
