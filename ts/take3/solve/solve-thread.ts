import {WorkParallel} from "../work-parallel";
import {join} from "path";

class SolveThread extends WorkParallel {
  async execute(limit: number): Promise<string> {
    return await this.executeWorker(limit);
  }

  protected getTaskDir(): string {
    return join(__dirname, "work.js");
  }

  getWork(limit: number): string {
    let str = "";
    for (let i = 0; i < limit; i++) str += i.toString();
    return str;
  }
}

export const solveThread = Object.freeze(new SolveThread());