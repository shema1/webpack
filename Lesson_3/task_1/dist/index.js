"use strict";

require("core-js/modules/es7.promise.finally");

const data = [1, 2, [3, 4, [5, 6]]];
const result = data.flat(2);
console.log(result);
Promise.resolve().finally();