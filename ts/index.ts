import {executeWorker} from "./wrapper";
import {sleep} from "@jellybeanci/sleep";
import {serializeFunction} from "./serialize-function";
import {deserializeFunction} from "./deserialize-function";
import {getWork, setWork} from "./work";

// (_ => {
//   for (let i = 1; i < 10; i++) {
//     setCallback(solve);
//     executeWorker(() => {
//     }, i * 3534567).then(x => console.log(i, x.length));
//   }
// })();

// async function myAsyncFunc(): Promise<void> {
//   return new Promise(resolve => setTimeout(_ =>{
//     console.log("hi async");
//     resolve();
//   }, 1000));
// }

// (async _ => {
//   const str = serializeFunction(myAsyncFunc);
//   console.log(str);
//   const afun = deserializeFunction(str);
//   await afun();
// })();

async function myAsync(): Promise<void> {
  await sleep(1000);
  console.log("hello, world🌏");
  return Promise.resolve();
}

function solve(number) {
  let str = "";
  for (let i = 0; i < number; i++) str += i.toString();
  return str;
}
setWork("solve", solve);

(async _ => {
  executeWorker("solve", 50000).then(console.log);
})();