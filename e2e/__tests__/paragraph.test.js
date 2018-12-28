import { baisy } from '../setup/TestSuiter';


const SUITES = [
  baisy.suite('Components/Paragraph', 'common'),
];


SUITES.map(suite => {
  it(suite.getTestName(), suite.testStory, 20000);
});

