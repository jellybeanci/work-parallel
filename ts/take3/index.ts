import {solveThread} from "./solve/solve-thread";
import {taskThread} from "./task/task-thread";

// for (let i = 1; i < 9; i++) {
//   solveThread.execute(3000000 * i).then(value => console.log(i, value.length));
// }

for (let i = 1; i < 10; i++) {
  taskThread.execute("Göksel Küçükşahin", 10_000 * i).then(value => console.log(i, value.length));
}