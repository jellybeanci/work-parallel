import {parentPort} from "worker_threads";
import {solveThread} from "./solve-thread";

parentPort.on("message", ([number]) => {
  const value = solveThread.getWork(number);
  parentPort.postMessage(value);
});