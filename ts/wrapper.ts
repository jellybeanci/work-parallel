import {join} from "path";
import {serializeFunction} from "./serialize-function";
import {Worker} from "worker_threads";

const taskDir = join(__dirname, "worker.js");

function runOnWorker(worker, callback: Function, arg: any) {
  return new Promise((resolve, reject) => {
    const functionString: string = serializeFunction(callback);
    worker.postMessage([functionString, arg]);
    worker.on('message', resolve);
    worker.on('messageerror', reject);
  });
}

export async function executeWorker(callback: Function, arg: any): Promise<any> {
  const worker = new Worker(taskDir);
  const value = await runOnWorker(worker, callback, arg);
  const term = await worker.terminate();
  return value;
}