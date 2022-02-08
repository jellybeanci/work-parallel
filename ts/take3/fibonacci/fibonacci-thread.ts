import {WorkParallel} from "../work-parallel";
import {join} from "path";

class FibonacciThread extends WorkParallel {
  async execute(n: number): Promise<bigint> {
    const value: bigint = await this.executeWorker(n);
    return Promise.resolve(value);
  }

  protected getTaskDir(): string {
    return join(__dirname, "work.js");
  }

  private static memo = new Map<number, bigint>();

  getWork(n: number): bigint {
    if (n < 2) return 1n;
    const memoResult = FibonacciThread.memo.get(n);
    if (!!memoResult) return memoResult;
    const calc = this.getWork(n - 2) + this.getWork(n - 1);
    FibonacciThread.memo.set(n, calc);
    return calc;
  }
}

export const fibonacciThread = Object.freeze(new FibonacciThread());