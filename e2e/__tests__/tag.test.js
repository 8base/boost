import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Tag', 'common'),
  baisy.suite('Components/Tag', 'with large content'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

