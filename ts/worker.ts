import {parentPort} from "worker_threads";
import {getWork} from "./work";

parentPort.on("message", ([callbackId, arg]) => {
  const value = getWork(callbackId)(arg); // :( Not working as expected...
  parentPort.postMessage(value);
});