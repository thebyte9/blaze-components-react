const generateKey = (element: any): string => {
  const key = unescape(encodeURIComponent(JSON.stringify(element)));

  try {
    return btoa(key);
  } catch {
    return Buffer.from(key).toString("base64");
  }
};

const uniqueId = (element: any) => {
  const keys = {};
  const key = `uid-${generateKey(element)}`;
  keys[key] = key;
  return key;
};

export default uniqueId;
