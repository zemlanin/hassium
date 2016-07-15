# hassium
ES2015 Template Tag for JSON

## Usage
```js
import hs from 'hassium'

const wrapBooleanInObject = hs`{"x": ${Boolean}}`
wrapBooleanInObject({})
  // => {"x": true}

const mapInnerValue = hs`{"x": ${'lol.length'}}`
mapInnerValue({lol: []})
  // => {"x": 0}
```
