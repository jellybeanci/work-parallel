import {join} from "path";
import {Worker} from "worker_threads";

const taskDir = join(__dirname, "worker.js");

function runOnWorker(worker, callbackId: string, arg: any) {
  return new Promise((resolve, reject) => {
    // const functionString: string = serializeFunction(callback);
    worker.postMessage([callbackId, arg]);
    worker.on('message', resolve);
    worker.on('messageerror', reject);
  });
}

export async function executeWorker(callbackId: string, arg: any): Promise<any> {
  const worker = new Worker(taskDir);
  const value = await runOnWorker(worker, callbackId, arg);
  const term = await worker.terminate();
  return value;
}