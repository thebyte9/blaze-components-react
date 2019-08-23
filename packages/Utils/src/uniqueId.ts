class UniqueId {
  private keys: object;

  constructor() {
    this.keys = {};
  }

  public uniqueId = (element: any): string => {
    let key: string = `uid-${this.generateKey(element)}`;

    const allKeys: string[] = Object.keys(this.keys);

    if (allKeys.includes(key)) {
      key = `${key}_${allKeys.length}`;
    }

    this.keys[key] = key;
    return key;
  };

  private generateKey(element: any): string {
    const key: string = unescape(encodeURIComponent(JSON.stringify(element)));

    return typeof btoa === "function"
      ? btoa(key)
      : Buffer.from(key).toString("base64");
  }
}
const uniqId = new UniqueId();

export default uniqId.uniqueId;
