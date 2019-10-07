import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Paper', 'default story'),
  baisy.suite('Components/Paper', 'with padding'),
  baisy.suite('Components/Paper', 'with borderRadius'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

