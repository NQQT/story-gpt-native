/**
 * Just a simple method to get the selected value from the option listing
 */
export const getSelectedValue = ({ value, options }: { value: number; options: string[] }) => {
  return options[value];
};
