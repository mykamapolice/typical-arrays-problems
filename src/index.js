
exports.min = function min (array) {
  if (array !== undefined) {
    if (array.length !== 0 && array.constructor === Array) {
      var m = array[0]
      for (var i = 1; i <= (array.length - 1); i++) {
        if (m > array[i]) {
            m = array[i];
        }
      }
      return m;
    }
    return 0;
  }
  return 0;
}


exports.max = function min (array) {
  if (array !== undefined) {
    if (array.length !== 0 && array.constructor === Array) {
      var m = array[0]
      for (var i = 1; i <= (array.length - 1); i++) {
        if (m < array[i]) {
            m = array[i];
        }
      }
      return m;
    }
    return 0;
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array !== undefined) {
    if (array.length !== 0 && array.constructor === Array) {
      var m = 0;
      for (var i = 0; i < (array.length); i++) {
        m += array[i]
      }
      let ans = (m / (array.length));
      return ans;
    }
    return 0;
  }
  return 0;
}
