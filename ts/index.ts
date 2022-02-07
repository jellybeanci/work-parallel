import {executeWorker} from "./wrapper";
import {setWork} from "./work";
import {solve} from "./solve";

(async _ => {
  setWork("solve", solve);
  executeWorker("solve", 50_000).then(console.log);
})();