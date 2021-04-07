import React from 'react';
import { Input } from '../../';
import { StateContainer } from '../../../storybook/StateContainer';

export default {
  title: 'Components/Input',
  component: Input,
};

export const defaultStory = () => <Input name="input" onChange={ () => null } />;

defaultStory.story = {
  name: 'default',
};

export const withValue = () => <Input name="input" value="value" onChange={ () => null } />;

withValue.story = {
  name: 'with value',
};

export const withPlaceholder = () => (
  <Input name="input" placeholder="custom placeholder" onChange={ () => null } />
);

withPlaceholder.story = {
  name: 'with placeholder',
};

export const withError = () => <Input name="input" hasError onChange={ () => null } />;

withError.story = {
  name: 'with error',
};

export const withStretchFalse = () => <Input name="input" stretch={ false } onChange={ () => null } />;

withStretchFalse.story = {
  name: 'with stretch=false',
};

export const withCustomWidth = () => <Input name="input" width={ 5 } onChange={ () => null } />;

withCustomWidth.story = {
  name: 'with custom width',
};

export const withLeftIcon = () => <Input name="input" leftIcon="i" />;

withLeftIcon.story = {
  name: 'with left icon',
};

export const withRightIcon = () => <Input name="input" rightIcon="i" />;

withRightIcon.story = {
  name: 'with right icon',
};

export const withRightIconAndError = () => (
  <Input name="input" rightIcon="i" hasError hideErrorIndicator />
);

withRightIconAndError.story = {
  name: 'with right icon and error',
};

export const withHtmlAutoComplete = () => <Input name="input" autoComplete />;

withHtmlAutoComplete.story = {
  name: 'with html auto-complete',
};

export const withCenterAlign = () => <Input name="input" align="center" />;

withCenterAlign.story = {
  name: 'with center align',
};

export const withClearButton = () => (
  <StateContainer value="Text">
    <Input name="input" clearable />
  </StateContainer>
);

withClearButton.story = {
  name: 'with clear button',
};

export const withTypeNumber = () => (
  <StateContainer value="0">
    <Input name="input" type="number" stretch={ false } />
  </StateContainer>
);

withTypeNumber.story = {
  name: 'with type number',
};

export const withKindUnderline = () => (
  <Input name="input" kind="underline" placeholder="custom placeholder" onChange={ () => null } />
);

withKindUnderline.story = {
  name: 'with kind="underline"',
};

export const disabledStory = () => <Input value="hello@8base.com" name="input" onChange={ () => null } disabled />;

disabledStory.story = {
  name: 'with disabled=true',
};
