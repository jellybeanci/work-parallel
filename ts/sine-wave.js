const {sleep} = require("@jellybeanci/sleep");

(async _ => {
  const name = "Göksel Küçükşahin";
  for (let i = 0; i < 10_000; i += 0.05) {
    const offset = 70 * Math.sin(i) + 70;
    console.log(" ".repeat(offset), name);
    await sleep(20);
  }
})();