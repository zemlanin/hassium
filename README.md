# hassium
ES2015 Template Tag for JSON. Powered by [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

[![Build Status](https://travis-ci.org/zemlanin/hassium.svg?branch=master)](https://travis-ci.org/zemlanin/hassium)

## Usage
```js
import hs from "hassium";

const wrapBooleanInObject = hs`{"x": ${Boolean}}`;
wrapBooleanInObject({});
  // => { "x": true }

const mapInnerValue = hs`{"x": ${hs.lol.length}}`;
mapInnerValue({ lol: ["something"] });
  // => { "x": 1 }
```
