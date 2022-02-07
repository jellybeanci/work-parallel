import {parentPort} from "worker_threads";
import {sleep} from "@jellybeanci/sleep";

async function printNames(name: string, surname: string, age: number): Promise<number> {
  await sleep(2000);
  console.log("name:", name, "surname:", surname, "age:", age);
  return 42;
}

parentPort.on("message", async ([name, surname, age]: [string, string, number]) => {
  const value = await printNames(name, surname, age);
  parentPort.postMessage(value);
});