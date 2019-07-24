import { baisy } from '../setup/TestSuiter';

const SUITES = [
  baisy.suite('Components/Divider', 'without title'),
  baisy.suite('Components/Divider', 'with title'),
];

SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

