import {parentPort} from "worker_threads";
import {solve} from "./solve";


parentPort.on("message", async ([number]) => {
  const value = await solve(number);
  parentPort.postMessage(value);
});

// can be async lel