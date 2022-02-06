import {executeWorker} from "./wrapper";
import {solve} from "./solve";

(_ => {
  for (let i = 1; i < 10; i++) {
    executeWorker(solve, i * 3534567).then(x => console.log(i, x.length));
  }
})();
