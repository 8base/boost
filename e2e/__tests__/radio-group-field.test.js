import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Radio', 'common'),
  baisy.suite('Components/Radio', 'with custom gap'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

