export function deserializeFunction(func: string): Function {
  return new Function(`{ return ${decodeURI(func)} };`).call(null);
}