// @flow

/* eslint-disable no-undef */
declare type Theme<ThemeProps> = {
  [string]: {
    modifiers: { [$Keys<ThemeProps>]: Object },
    defaults: $Shape<ThemeProps>,
  }
}

declare type PropSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** jsx-control-statements declaration */
declare var If: React$ComponentType<$Exact<{ condition: boolean, children: React$Node }>>;
declare var Choose: React$ComponentType<$Exact<{ children: React$Node }>>;
declare var When: React$ComponentType<$Exact<{ condition: boolean, children: React$Node }>>;
declare var Otherwise: React$ComponentType<$Exact<{ children: React$Node }>>;

/** hocs helpers */
type UnaryFn<A, R> = (a: A) => R

declare type HOC<Base, Enhanced> = UnaryFn<
  React$ComponentType<Base>,
  React$ComponentType<Enhanced>
>;

declare type HOCProps<BaseAdd, T: Object = *> = HOC<{| ...$Exact<BaseAdd>, ...$Exact<T> |}, T>
declare type HOCPropsInOut<BaseAdd, Enhanced: Object = *> =  HOC<{ ...$Exact<Enhanced>, ...BaseAdd }, Enhanced>;

// eslint-disable-next-line no-unused-vars
type HOCBase_<A, B, C: HOC<A, B>> = A;
declare type HOCBase<C> = HOCBase_<*, *, C>;
