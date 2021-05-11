function isValidJSON(candidate: any) {
  try {
    return JSON.parse(candidate);
  } catch (e) {
    return false;
  }
}

export default isValidJSON;
