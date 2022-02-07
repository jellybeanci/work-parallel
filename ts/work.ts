const worksMap = new Map<string, Function>();

export function getLenghtOfMap(): number {
  return worksMap.size;
}

export function setWork(name: string, func: Function): number {
  worksMap.set(name, func);
  return getLenghtOfMap();
}

export function deteleWork(name: string): number {
  worksMap.delete(name);
  return getLenghtOfMap();
}

export function getWork(name: string): Function {
  return worksMap.get(name);
}