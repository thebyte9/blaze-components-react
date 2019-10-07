function removeExtraSpaces(value: string): string {
  return value.replace(/  +/g, " ").trim();
}

export default removeExtraSpaces;
