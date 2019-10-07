import React from 'react';
import { Logs, Dialog } from '../../';

const MESSAGES = [
  `START RequestId: 9ddb9717-1570-433e-bb06-9e0c3c4fefac Version: $LATEST
,2019-03-12T15:08:49.840Z    9ddb9717-1570-433e-bb06-9e0c3c4fefac    {"errorMessage":"Cannot find module 'nodemailer'","errorType":"Error","stackTrace":["Function.Module._resolveFilename (module.js:547:15)","Function.Module._load (module.js:474:25)","Module.require (module.js:596:17)","require (internal/module.js:11:18)","Object.<anonymous> (/var/task/src/mailer/index.js:37:18)","Module._compile (module.js:652:30)","Object.Module._extensions..js (module.js:663:10)","Module.load (module.js:565:32)","tryModuleLoad (module.js:505:12)","Function.Module._load (module.js:497:3)"]}
,END RequestId: 9ddb9717-1570-433e-bb06-9e0c3c4fefac
,REPORT RequestId: 9ddb9717-1570-433e-bb06-9e0c3c4fefac    Duration: 1.23 ms    Billed Duration: 100 ms     Memory Size: 1536 MB    Max Memory Used: 77 MB    
`,
  `START RequestId: 60594137-ec13-4470-a85d-61e29cc184e2 Version: $LATEST
,2019-03-12T15:09:39.835Z    60594137-ec13-4470-a85d-61e29cc184e2    entered function
,END RequestId: 60594137-ec13-4470-a85d-61e29cc184e2
,REPORT RequestId: 60594137-ec13-4470-a85d-61e29cc184e2    Duration: 21.12 ms    Billed Duration: 100 ms     Memory Size: 1536 MB    Max Memory Used: 77 MB    
`,
  `START RequestId: ff316ab5-4c16-47b4-be44-079ce5968761 Version: $LATEST
,2019-03-12T15:09:45.644Z    ff316ab5-4c16-47b4-be44-079ce5968761    entered function
,END RequestId: ff316ab5-4c16-47b4-be44-079ce5968761
,REPORT RequestId: ff316ab5-4c16-47b4-be44-079ce5968761    Duration: 0.64 ms    Billed Duration: 100 ms     Memory Size: 1536 MB    Max Memory Used: 77 MB    
`,
  `START RequestId: 5c65450e-1558-4550-ba12-d8f1d879f0cb Version: $LATEST
,2019-03-12T15:09:46.068Z    5c65450e-1558-4550-ba12-d8f1d879f0cb    entered function
,END RequestId: 5c65450e-1558-4550-ba12-d8f1d879f0cb
,REPORT RequestId: 5c65450e-1558-4550-ba12-d8f1d879f0cb    Duration: 0.50 ms    Billed Duration: 100 ms     Memory Size: 1536 MB    Max Memory Used: 77 MB    
`,
  `START RequestId: 9ddb9717-1570-433e-bb06-9e0c3c4fefac Version: $LATEST
`,
  `START RequestId: 9ddb9717-1570-433e-bb06-9e0c3c4fefac Version: $LATEST
,2019-03-12T15:08:49.840Z    9ddb9717-1570-433e-bb06-9e0c3c4fefac    {"errorMessage":"Cannot find module 'nodemailer'","errorType":"Error","stackTrace":["Function.Module._resolveFilename (module.js:547:15)","Function.Module._load (module.js:474:25)","Module.require (module.js:596:17)","require (internal/module.js:11:18)","Object.<anonymous> (/var/task/src/mailer/index.js:37:18)","Module._compile (module.js:652:30)","Object.Module._extensions..js (module.js:663:10)","Module.load (module.js:565:32)","tryModuleLoad (module.js:505:12)","Function.Module._load (module.js:497:3)"]}
,END RequestId: 9ddb9717-1570-433e-bb06-9e0c3c4fefac
,REPORT RequestId: 9ddb9717-1570-433e-bb06-9e0c3c4fefac    Duration: 1.23 ms    Billed Duration: 100 ms     Memory Size: 1536 MB    Max Memory Used: 77 MB    
`,
  `START RequestId: 60594137-ec13-4470-a85d-61e29cc184e2 Version: $LATEST
,2019-03-12T15:09:39.835Z    60594137-ec13-4470-a85d-61e29cc184e2    entered function
,END RequestId: 60594137-ec13-4470-a85d-61e29cc184e2
,REPORT RequestId: 60594137-ec13-4470-a85d-61e29cc184e2    Duration: 21.12 ms    Billed Duration: 100 ms     Memory Size: 1536 MB    Max Memory Used: 77 MB    
`,
  `START RequestId: ff316ab5-4c16-47b4-be44-079ce5968761 Version: $LATEST
,2019-03-12T15:09:45.644Z    ff316ab5-4c16-47b4-be44-079ce5968761    entered function
,END RequestId: ff316ab5-4c16-47b4-be44-079ce5968761
,REPORT RequestId: ff316ab5-4c16-47b4-be44-079ce5968761    Duration: 0.64 ms    Billed Duration: 100 ms     Memory Size: 1536 MB    Max Memory Used: 77 MB    
`,
  `START RequestId: 5c65450e-1558-4550-ba12-d8f1d879f0cb Version: $LATEST
,2019-03-12T15:09:46.068Z    5c65450e-1558-4550-ba12-d8f1d879f0cb    entered function
,END RequestId: 5c65450e-1558-4550-ba12-d8f1d879f0cb
,REPORT RequestId: 5c65450e-1558-4550-ba12-d8f1d879f0cb    Duration: 0.50 ms    Billed Duration: 100 ms     Memory Size: 1536 MB    Max Memory Used: 77 MB    
`,
  `START RequestId: 9ddb9717-1570-433e-bb06-9e0c3c4fefac Version: $LATEST
`,
];

export default {
  title: 'Components/Logs',
  component: Logs,
};

export const defaultStory = () => (
  <Logs messages={ [MESSAGES[0], MESSAGES[1], MESSAGES[2], MESSAGES[3]] } />
);

defaultStory.story = {
  name: 'default',
};

export const withDialog = () => (
  <Dialog isOpen size="xxl" data-e2e-id="logs-dialog">
    <Dialog.Header title="Logs" />
    <Dialog.Body scrollable padding="none">
      <Logs messages={ [...MESSAGES, ...MESSAGES] } />
    </Dialog.Body>
  </Dialog>
);

withDialog.story = {
  name: 'with dialog',
};

export const withStretch = () => (
  <Dialog stretch isOpen size="xxl" data-e2e-id="logs-dialog">
    <Dialog.Header title="Logs" />
    <Dialog.Body scrollable padding="none">
      <Logs stretch messages={ [MESSAGES[0]] } />
    </Dialog.Body>
  </Dialog>
);

withStretch.story = {
  name: 'with stretch',
};
