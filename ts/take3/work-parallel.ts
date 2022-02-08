import {Worker} from "worker_threads";

export abstract class WorkParallel {
  protected abstract getTaskDir(): string;

  abstract execute(...args: any): Promise<any>;

  abstract getWork(...args: any): any;

  protected static runOnWorker(worker: Worker, ...args: any): Promise<any> {
    return new Promise((resolve, reject) => {
      worker.postMessage(args); // change to plain args and test!
      worker.on('message', resolve);
      worker.on('error', reject); // ?? test here
    });
  }

  protected async executeWorker(...args: any): Promise<any> {
    const worker = new Worker(this.getTaskDir());
    const value = await WorkParallel.runOnWorker(worker, ...args);
    const term = await worker.terminate();
    return value;
  }
}