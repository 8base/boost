import { useState } from 'react';

export default function useStepIndex() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return {
    activeStepIndex,
    setActiveStepIndex,
  };
}