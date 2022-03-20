import {Worker} from "worker_threads";
import {join} from "path";

const taskDir = join(__dirname, "worker.js");

function runOnWorker(worker, ...arg: any[]) {
  return new Promise((resolve, reject) => {
    worker.postMessage([...arg]);
    worker.on('message', resolve);
    worker.on('messageerror', reject);
  });
}

export async function executeWorker(...arg: any[]): Promise<any> {
  const worker = new Worker(taskDir);
  const value = await runOnWorker(worker, ...arg);
  const term = await worker.terminate();
  return value;
}