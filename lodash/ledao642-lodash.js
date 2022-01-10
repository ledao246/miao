var ledao246 = {
  chunk: function (array, size = 1) {
    let len = array == null ? 0 : array.length;
    let a = new Array(Math.trunc(len / size));
    var count = -1;
    for (var i = 0; i < len; i++) {
      if (i % size == 0) {
        count++;
        a[count] = [];
      }
      a[count].push(array[i]);
    }
    return a;
  },
  compact: function (array) {
    let len = array == null ? 0 : array.length;
    let count = 0;
    let result = [];
    for (let i = 0; i < len; i++) {
      if (array[i]) {
        result[count++] = array[i];
      }
    }
    return result;
  },
  difference: function (array, values) {

  },
  differenceBy: function (array, values) {

  },
  drop: function (array, n = 1) {
    let len = array == null ? 0 : array.length;
    if (!len) {
      return [];
    }
    n = (n === undefined) ? 1 : Number(n);
    if (n < 0) { n = 0; }
    let result = [], count = 0;
    for (let i = n; i < len; i++) {
      result[count++] = array[i];
    }
    return result;
  },
  dropRight: function (array, n = 1) {
    let len = array == null ? 0 : array.length;
    if (!len) {
      return [];
    }
    n = (n === undefined) ? 1 : Number(n);
    if (n < 0) { n = 0; }
    let result = [], count = 0;
    for (let i = 0; i < len - n; i++) {
      result[count++] = array[i];
    }
    return result;
  },
  fill: function (array, value, start = 0, end) {
    let len = (array == null) ? 0 : array.length;
    end = (end == undefined) ? len : Number(end);
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  },
  findIndex: function (array, predicate, start = 0) {
    let len = (array == null) ? 0 : array.length;
    for (let i = start; i < len; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  },
  findLastIndex: function (array, predicate, fromIndex = array.length - 1) {
    let len = (array == null) ? 0 : array.length;
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  },

}
