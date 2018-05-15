import initStoryshots from '@storybook/addon-storyshots';

jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
}));

initStoryshots({
  configPath: './storybook',
  storyKindRegex: /^((?!.*?\(skip shot\)).)*$/,
});
