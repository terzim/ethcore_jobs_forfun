var merge = function(objects) {
  var out = {};

  for (var i = 0; i < objects.length; i++) {
    for (var p in objects[i]) {
      out[p] = objects[i][p];
    }
  }

  return out;
}

var flatten = function(obj, name, stem) {
  var out = {};
  var newStem = (typeof stem !== 'undefined' && stem !== '') ? stem + ' ' + name : name;

  if (typeof obj !== 'object') {
    out[newStem] = obj;
    return out;
  }

  for (var p in obj) {
    var prop = flatten(obj[p], p, newStem);
    out = merge([out, prop]);
  }

  return out;
};

