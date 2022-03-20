export function serializeFunction(func: Function): string {
  return encodeURI(func.toString());
}