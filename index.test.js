const add = require("./connfile.js");

test("Comprobacion de la suma", () => {
  expect(add()).toBe(30);
});