import {parentPort} from "worker_threads";
import {fibonacciThread} from "./fibonacci-thread";

parentPort.on("message", ([number]) => {
  const value = fibonacciThread.getWork(number);
  parentPort.postMessage(value);
});