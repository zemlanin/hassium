var expressions = require('angular-expressions')

// hs`{"x": ${'lol.length'}}`({lol: []})
//   => {"x": 0}

// hs`{"x": ${'y'}}`({})
//   => {"x": null}

// hs`{"x": ${Boolean}}`({})
//   => {"x": true}

// hs`{"x": ${'x'}}`()
//   => {"x": null}

function compileValue (v) { return typeof v === 'function' ? v : expressions.compile(v) }

module.exports = function hs (strings) {
  var values = Array.prototype.splice.call(arguments, 1)
  var compiledValues = values.map(compileValue)

  return function (obj) {
    var result = [strings[0]]

    compiledValues.forEach(function (expr, i) {
      var val = expr(obj)
      result.push(
        val === void 0 ? 'null' : JSON.stringify(val),
        strings[i + 1]
      )
    })

    return JSON.parse(result.join(''))
  }
}
