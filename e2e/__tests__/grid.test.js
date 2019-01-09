import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Grid', 'with gap'),
  baisy.suite('Components/Grid', 'with padding'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

