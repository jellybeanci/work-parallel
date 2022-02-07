import {parentPort} from "worker_threads";
import {taskThread} from "./task-thread";

parentPort.on("message", ([name, m]) => {
  const value = taskThread.getWork(name, m)
  parentPort.postMessage(value);
});