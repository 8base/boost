import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Icon', 'all icons'),
  baisy.suite('Components/Icon', 'with color'),
  baisy.suite('Components/Icon', 'with size'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

