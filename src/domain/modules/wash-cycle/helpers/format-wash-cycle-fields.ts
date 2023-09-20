export class FormatField {
  static stringToArray(arr: string, separator: string): string[] {
    return arr.split(",");
  }

  static arrayToString(arr: Array<string>): string {
    return arr.toString();
  }
}
