const DELIMITER = '-';

export function overrideClasses(utilities: string[], overrides: string[]): any {
  if (!Array.isArray(utilities) || !Array.isArray(overrides)) {
    return '';
  }

  utilities.map((utility, index) => {
    overrides.forEach((override) => {
      const uTag = utility.split(DELIMITER)[0];
      const oTag = override.split(DELIMITER)[0];

      if (uTag === oTag) {
        utilities[index] = override;
      }
    });
  });

  return utilities.filter(Boolean).join(' ');
}
