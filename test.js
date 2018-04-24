const assert = require("assert");
const hs = require("./index.js");

assert.deepEqual(hs`{"x": ${hs}}`(1), { x: 1 });
assert.deepEqual(hs`{"x": ${hs}}`(10), { x: 10 });
assert.deepEqual(hs`{"x": ${hs.y}}`({ y: 3 }), { x: 3 });
assert.deepEqual(hs`{"x": ${hs.lol.length}}`({ lol: ["something"] }), { x: 1 });
assert.deepEqual(hs`{"x": ${hs.y}}`({}), { x: null });
assert.deepEqual(hs`{"x": ${Boolean}}`({}), { x: true });
assert.deepEqual(hs`{"d": ${Boolean}}`(null), { d: false });
