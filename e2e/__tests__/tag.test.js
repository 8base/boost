import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Tag', 'common'),
  baisy.suite('Components/Tag', 'with large content'),
  baisy.suite('Components/Tag', 'condensed'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

