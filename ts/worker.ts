import {parentPort} from "worker_threads";
import {deserializeFunction} from "./deserialize-function";


parentPort.on("message", ([callbackString, arg]) => {
  const value = deserializeFunction(callbackString)(arg);
  //if (!Array.isArray(value)) value = [value];
  parentPort.postMessage(value);
});

// setTimeout(_ => {
//   throw Error("Worker Thread Throw Error");
// }, 3000);