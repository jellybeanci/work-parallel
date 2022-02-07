import {executeWorker} from "./wrapper";

(_ => {
  for (let i = 1; i < 10; i++) {
    executeWorker(i * 1234, new Date()).then(x => console.log(i, x.length));
  }
})();
