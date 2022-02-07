import {WorkParallel} from "../work-parallel";
import {join} from "path";

class TaskThread extends WorkParallel {
  async execute(name: string, m: number): Promise<string[]> {
    const value = await this.executeWorker(name, m);
    return Promise.resolve(value);
  }

  getWork(name: string, m: number): string[] {
    const result = [];
    for (let i = 0; i < m; i += 0.05) {
      const offset = 70 * Math.sin(i) + 70;
      result.push(`${" ".repeat(offset)}${name}`);
    }
    return result;
  }

  protected getTaskDir(): string {
    return join(__dirname, "work.js");
  }
}

export const taskThread = Object.freeze(new TaskThread());