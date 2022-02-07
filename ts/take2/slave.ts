import {Master} from "./master";
import {join} from "path";

export class Slave extends Master {
  protected getTaskDir(): string {
    return join(__dirname, "job.js");
  }

  async executeImpl([name, surname, age]: [string, string, number]): Promise<number> {
    const value: number = await this.executeWorker([name, surname, age]);
    return Promise.resolve(value);
  }
}