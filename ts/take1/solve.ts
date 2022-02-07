import {sleep} from "@jellybeanci/sleep";

export async function solve(number) {
  let str = "";
  for (let i = 0; i < number; i++) str += i.toString();
  await sleep(500); // artificial i/o task
  return Promise.resolve(str);
}