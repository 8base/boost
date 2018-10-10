export const hasError = (meta: Object) => {
  const { submitError, dirtySinceLastSubmit, error, touched } = meta;

  return (!!error || !!submitError) && !!touched && !dirtySinceLastSubmit;
};

export const getError = (meta: Object) => {
  if (hasError(meta)) {
    const { submitError, error } = meta;

    return error || submitError;
  }
};
