import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/FlexLayout', 'with gap'),
  baisy.suite('Components/FlexLayout', 'with offset'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

