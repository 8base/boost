export const hasError = (meta: Object = {}, showErrorOnTouched: boolean = true) => {
  const { submitError, dirtySinceLastSubmit, error, touched } = meta;

  return (!!error || (!!submitError && !dirtySinceLastSubmit)) && (!!showErrorOnTouched ? !!touched : true);
};

export const getError = (meta: Object, showErrorOnTouched: boolean = true) => {
  if (hasError(meta, showErrorOnTouched)) {
    const { submitError, error } = meta;

    return error || submitError;
  }
};
