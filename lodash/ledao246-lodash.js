var ledao246 = function () {
  function shorthand(predicate) {
    let val = predicate;
    if (typeof (val) == "object") {
      if (Array.isArray(val)) {
        let t = {};
        t[val[0]] = val[1];
        val = t;
      }
      predicate = function (it) {
        for (let key in val) {
          var flag = true;
          if (val[key] != it[key]) {
            flag = false;
            break;
          }
        }
        return flag;
      }
    } else {
      predicate = it => it[val];
    }
    return predicate;
  }
  function swap(array, i, j) {
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
    return array;
  }
  function chunk(array, size = 1) {
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
  }
  function compact(array) {
    let len = array == null ? 0 : array.length;
    let count = 0;
    let result = [];
    for (let i = 0; i < len; i++) {
      if (array[i]) {
        result[count++] = array[i];
      }
    }
    return result;
  }
  function difference(array, ...values) {
    let a = [], b = [];
    for (let i = 0; i < values.length; i++) {
      b.push(...values[i])
    }
    array.forEach(element => {
      if (!b.includes(element)) {
        a.push(element);
      }
    })
    return a;
  }
  function differenceBy(array, values) {

  }
  function drop(array, n = 1) {
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
  }
  function dropRight(array, n = 1) {
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
  }
  function fill(array, value, start = 0, end) {
    let len = (array == null) ? 0 : array.length;
    end = (end == undefined) ? len : Number(end);
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }

  function findIndex(array, predicate, start = 0) {
    let len = (array == null) ? 0 : array.length;
    for (let i = start; i < len; i++) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  }
  function findLastIndex(array, predicate, fromIndex = array.length - 1) {
    let len = (array == null) ? 0 : array.length;
    for (let i = fromIndex; i >= 0; i--) {
      if (predicate(array[i], i, array)) {
        return i;
      }
    }
    return -1;
  }
  function flatten(array) {
    let len = (array == null) ? 0 : array.length;
    var result = [];
    for (var i = 0; i < len; i++) {
      if (Array.isArray(array[i])) {
        result.push(...array[i]);
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }
  function flattenDeep(array) {
    let len = (array == null) ? 0 : array.length;
    var result = [];
    for (var i = 0; i < len; i++) {
      if (Array.isArray(array[i])) {
        result.push(...flattenDeep(array[i]));
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }
  function flattenDepth(array, depth = 1) {
    let len = (array == null) ? 0 : array.length;
    var result = [];
    for (var i = 0; i < len; i++) {
      if (Array.isArray(array[i]) && depth > 0) {
        result.push(...flattenDeep(array[i], depth - 1));
      } else {
        result.push(array[i]);
      }
    }
    return result;
  }
  function fromPairs(pairs) {
    let result = {};
    for (let i = 0; i < pairs.length; i++) {
      result[pairs[i][0]] = pairs[i][1];
    }
    return result;
  }
  function head(array) {
    return array[0];
  }
  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (value == array[i]) return i;
    }
    return -1;
  }
  function initial(array) {
    return array.slice(0, array.length - 1);
  }
  function intersection(...arrays) {
    let result = [];
    let comp = arrays[0];
    for (let i = 0; i < comp.length; i++) {
      let isFind = true;
      for (let j = 1; j < arrays.length; j++) {
        if (!arrays[j].includes(comp[i])) {
          isFind = false;
          break;
        }
      }
      if (isFind) {
        result.push(comp[i]);
      }
    }
    return result;
  }
  function join(array, sep = ',') {
    if (array.length == 0) { return ''; }
    let result = String(array[0]);
    for (let i = 1; i < array.length; i++) {
      result = result + sep + array[i];
    }
    return result;
  }
  function last(array) {
    return array[array.length - 1];
  }
  function lastIndexOf(array, value, fromIndex = array.length - 1) {
    for (i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        break;
      }
    }
    return i;
  }
  function pull(array, ...values) {
    let len = array.length;
    for (let i = len - 1; i >= 0; i--) {
      if (values.includes(array[i])) {
        swap(array, i, array.length - 1);
        array.pop();
      }
    }
    return array;
  }
  function pullAll(array, values) {
    let len = array.length;
    for (let i = len - 1; i >= 0; i--) {
      if (values.includes(array[i])) {
        swap(array, i, array.length - 1);
        array.pop();
      }
    }
    return array;
  }
  function swap(array, i, j) {
    let t = array[i];
    array[i] = array[j];
    array[j] = t;
    return array;
  }
  function reverse(array) {
    let mid = Math.floor(array.length / 2);
    end = array.length - 1;
    for (let i = 0; i < mid; i++) {
      swap(array, i, end - i);
    }
    return array;
  }
  function remove(array, predicate = _.identity) {
    let result = [];
    let len = array.length;
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i], i, array)) {
        swap(array, i, array.length - 1);
        result.push(array.pop());
        i--;
      }
    }
    return result;
  }
  function sortedIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > value) {
        break;
      }
    }
    return i;
  }

  /**
   *countBy: countBy,
    groupBy: groupBy,
    keyBy: keyBy,
   *forEach: forEach,
    shuffle: shuffle,
    every: every,
    filter: filter,
    find: find,
    map: map,
    partition: partition,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    some: some,
    initial: initial,


    uniq: uniq,
    uniqBy: uniqBy,
    without: without,
    zip: zip,
    size: size,
    isBoolean: isBoolean,
    ceil: ceil,
    max: max,
    maxBy: maxBy,
    sum: sum,
    sumBy: sumBy,
    repeat: repeat,
    range: range,
    concat: concat,
    toArray: toArray,
    nth: nth,

    pull: pull,
    pullAll: pullAll,
    remove: remove,
    tail: tail,
    take: take,
    takeRight: takeRight,
    mapValues: mapValues,


   */




  return {
    sortedIndex: sortedIndex,
    remove: remove,
    reverse: reverse,
    pull: pull,
    pullAll: pullAll,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    initial: initial,
    intersection: intersection,
    findIndex: findIndex,
    findLastIndex: findLastIndex,

    chunk: chunk,
    compact: compact,
    drop: drop,
    dropRight: dropRight,
    fill: fill,
    flatten: flatten,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,

    difference: difference,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,


  }
}()


