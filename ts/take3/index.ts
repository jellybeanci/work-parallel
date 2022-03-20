import {taskThread} from "./task/task-thread";
import {fibonacciThread} from "./fibonacci/fibonacci-thread";

// for (let i = 1; i < 9; i++) {
//   solveThread.execute(3000000 * i).then(value => console.log(i, value.length));
// }

// for (let i = 1; i < 10; i++) {
//   taskThread.execute("Göksel Küçükşahin", 10_000 * i).then(value => console.log(i, value.length)).catch(reason => console.error(reason));
// }
for (let i = 0; i < 500; i++) {
  fibonacciThread.execute(i).then(value => console.log(i + 1, value));
}
