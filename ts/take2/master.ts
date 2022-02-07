import {Worker} from "worker_threads";

export abstract class Master {
  protected abstract getTaskDir(): string;

  abstract executeImpl(...args: any[]): Promise<any>;

  protected runOnWorker(worker, ...args: any[]) {
    return new Promise((resolve, reject) => {
      worker.postMessage([...args]);
      worker.on('message', resolve);
      worker.on('messageerror', reject);
    });
  }

  protected async executeWorker(...args: any[]): Promise<any> {
    const worker = new Worker(this.getTaskDir());
    const value = await this.runOnWorker(worker, ...args);
    const term = await worker.terminate();
    return value;
  }
}