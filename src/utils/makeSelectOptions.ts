export const makeSelectOptions = (
  options: string[]
): { label: string; value: string }[] => {
  return options.map((value) => ({ label: value, value }));
};
