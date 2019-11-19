export const hasError = (meta: Object = {}) => {
  const { submitError, dirtySinceLastSubmit, error, touched } = meta;

  return (!!error || (!!submitError && !dirtySinceLastSubmit)) && !!touched;
};

export const getError = (meta: Object) => {
  if (hasError(meta)) {
    const { submitError, error } = meta;

    return error || submitError;
  }
};
