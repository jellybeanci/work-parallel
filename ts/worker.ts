const {parentPort} = require("worker_threads");

parentPort.on("message", (callback: Function, ...args: any[]) => {
  let value = callback(...args);
  if (!Array.isArray(value)) value = [value];
  parentPort.postMessage([...value])
});
