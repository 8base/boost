const { E2E_URL } = process.env;

let page = null;

beforeAll(async () => {
  page = await __BROWSER_CONTEXT__.newPage();
});

afterAll(async () => {
  await page.close();
});

const testStory = async (kind, story) => {
  await page.goto(`${E2E_URL}/?selectedKind=${encodeURIComponent(kind)}&selectedStory=${encodeURIComponent(story)}`, { waitUntil: 'networkidle2' });

  const iframe = page.frames()[1];

  await iframe.addStyleTag({
    content: `
      *, *:before, *:after {
        -webkit-transition-duration: unset !important;
        transition-duration: unset !important;
        -webkit-animation-duration: unset !important;
        animation-duration: unset !important;
      }
    `,
  });

  const test = await iframe.waitForXPath('//body');

  expect(await test.screenshot()).toMatchImageSnapshot();
};

const STORIES = [
  ['Components/Button', 'common'],
  ['Components/Breadcrumbs', 'common'],
  ['Components/ButtonGroup', 'common'],
  ['Components/Progress', 'common'],
  ['Components/Tag', 'common'],
];

test.each(STORIES)('%s / %s', async (kind, story) => {
  await testStory(kind, story);  
});
