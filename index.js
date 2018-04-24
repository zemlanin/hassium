var path = "f8fd710e-05cb-46b9-a711-e3ad7c342064";

function id(v) {
  return v;
}

function compileValue(v) {
  if (v === hs) {
    return id;
  }

  if (v && v[path]) {
    return function(obj) {
      var r = obj;

      while (v[path].length) {
        r = r[v[path].shift()];
      }

      return r;
    };
  }

  return v;
}

function hs(strings) {
  var values = Array.prototype.splice.call(arguments, 1);
  var compiledValues = values.map(compileValue);

  return function(obj) {
    var result = [strings[0]];

    compiledValues.forEach(function(expr, i) {
      var val = expr(obj);
      result.push(
        val === void 0 ? "null" : JSON.stringify(val),
        strings[i + 1]
      );
    });

    return JSON.parse(result.join(""));
  };
}

hs[path] = [];

function proxyGet(obj, prop) {
  if (prop === path) {
    return obj[path];
  }

  var target = {};
  target[path] = obj[path].concat(prop);

  return new Proxy(target, {
    get: proxyGet
  });
}

module.exports = new Proxy(hs, {
  get: proxyGet
});
