import {parentPort} from "worker_threads";
import {getLenghtOfMap, getWork} from "./work";

parentPort.on("message", ([callbackId, arg]) => {
  // const value = deserializeFunction(callbackString)(arg);

  const value = getWork("solve");
  console.log("getwork", value, getLenghtOfMap());

  //if (!Array.isArray(value)) value = [value];
  parentPort.postMessage(5);
});

// setTimeout(_ => {
//   throw Error("Worker Thread Throw Error");
// }, 3000);