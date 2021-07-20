const DELIMITER = '-';

export function overrideClasses(utilities: string, overrides: string): any {
  const tailwindUtilities = utilities
    .trim()
    .replace(/[\r\n\t]/g, '')
    .split(' ');

  const overrideUtilities = overrides
    .trim()
    .replace(/[\r\n\t]/g, '')
    .split(' ');

  tailwindUtilities.map((utility, index) => {
    overrideUtilities.forEach((override) => {
      const uTag = utility.split(DELIMITER)[0];
      const oTag = override.split(DELIMITER)[0];

      if (uTag === oTag) {
        tailwindUtilities[index] = override;
      }
    });
  });

  return tailwindUtilities.filter(Boolean).join(' ');
}
