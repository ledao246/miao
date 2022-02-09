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
  function tail(array) {
    return array.slice(1);
  }
  function take(array, n = 1) {
    return array.slice(0, n);
  }
  function takeRight(array, n = 1) {
    start = array.length > n ? array.length - n : 0;
    return array.slice(start, array.length);
  }
  function uniq(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let p = array[i];
      if (!(result.includes(p))) {
        result.push(p);
      }
    }
    return result;
  }
  function uniqBy(array, iteratee) {
    if (typeof (iteratee) !== "function") {
      iteratee = shorthand(iteratee);
    }
    let result = [];
    let temp = [];
    for (let i = 0; i < array.length; i++) {
      let it = iteratee(array[i]);
      if (!(temp.includes(it))) {
        temp.push(it);
        result.push(array[i]);
      }
    }
    return result;
  }
  function without(array, ...values) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let p = array[i];
      if (!values.includes(p)) {
        result.push(p);
      }
    }
    return result;
  }
  function zip() {
    let n = arguments.length;
    let m = arguments[0].length;
    let result = Array(m);
    for (let i = 0; i < m; i++) {
      let inner = [];
      for (let j = 0; j < n; j++) {
        inner[j] = arguments[j][i];
      }
      result[i] = inner;
    }
    return result;
  }
  function sample(collection) {
    let random = Infinity;
    while (random > collection.length - 1) {
      random = Math.floor(collection.length * Math.random())
    }
    return collection[random];
  }
  function sampleSize(collection, n = 1) {
    let result = [];
    let len = collection.length;
    let x = len < n ? len : n;
    for (let i = 0; i < x; i++) {
      let random = Infinity;
      while (random > len - 1) {
        random = Math.floor(len * Math.random())
      }
      swap(collention, random, len - 1);
      result.push(collection.pop());
    }
    return result;
  }
  function size(collection) {
    if (typeof (collection) == "boolean") {
      return 0;
    }
    if (typeof (collection) == "number") {
      return 0;
    }
    if (typeof (collection) == "string") {
      let i = 0;
      while (collection[i]) {
        i++;
      }
      return i;
    }
    if (Array.isArray(collection)) {
      return collection.length;
    }
    if (typeof (collection) == "object") {
      let count = 0;
      for (let i in collection) {
        count++;
      }
      return count;
    }
  }
  function isBoolean(value) {
    return value === true || value === false;
  }
  function ceil(number, precision = 0) {
    let x = 10 ** (-precision);
    let remain = number % x;
    if (!remain) {
      return number;
    }
    return number - remain + x;
  }
  function max(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }
  function maxBy(array, iteratee) {
    if (typeof (iteratee) != "function") {
      iteratee = shorthand(iteratee);
    }
    let max = iteratee(array[0]);
    let maxItem = array[0];
    for (let i = 1; i < array.length; i++) {
      let it = iteratee(array[i]);
      if (it > max) {
        max = it;
        maxItem = array[i];
      }
    }
    return maxItem;
  }
  function min(array) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]
      }
    }
    return min
  }
  function sum(array) {
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  function sumBy(array, iteratee) {
    if (typeof (iteratee) != "function") {
      iteratee = shorthand(iteratee);
    }
    let sum = iteratee(array[0]);
    for (let i = 1; i < array.length; i++) {
      let it = iteratee(array[i]);
      sum += it;
    }
    return sum;
  }
  function repeat(string = '', n = 1) {
    if (!n) {
      return '';
    }
    let result = string;
    for (let i = 1; i < n; i++) {
      result += string;
    }
    return result;
  }
  function range(start = 0, end, step = 1) {
    let result = [];
    let len = 0;
    if (arguments.length == 1) {
      end = start;
      start = 0;
      if (end < 0) {
        start = -1;
      }
    }
    if (step) {
      len = (end - start) / step;
    } else {
      len = end - start;
    }
    for (let count = 0, i = start; count < len; count++, i += step) {
      result.push(i);
    }
    return result;
  }
  function toArray(value) {
    if (value === null) {
      return [];
    }
    if (value.length) {
      var array = Array(value.length);
      for (let i = 0; i < value.length; i++) {
        array[i] = value[i];
      }
      return array;
    }
    if (typeof (value) == 'object') {
      var array = [];
      for (let item in value) {
        array.push(value[item]);
      }
      return array;
    }
    return [];
  }
  function concat(array, ...values) {
    for (let i = 0; i < values.length; i++) {
      if (Array.isArray(values[i])) {
        for (let j = 0; j < values[i].length; j++) {
          array.push(values[i][j]);
        }
      } else {
        array.push(values[i]);
      }
    }
    return array;
  }
  function nth(array) {
    if (n < 0) {
      n = array.length + n;
    }
    return array[i];
  }
  function map(collection, iteratee) {
    if (typeof (iteratee) != "function") {
      iteratee = shorthand(iteratee);
    }
    let res = [];
    for (let key in collection) {
      res.push(iteratee(collection[key]))
    }
    return res;
  }
  function keyBy(array, iteratee) {
    if (typeof (iteratee) != "function") {
      iteratee = shorthand(iteratee)
    }
    let result = {};
    for (let i in array) {
      let it = iteratee(array[i]);
      result[it] = array[i];
    }
    return result;
  }
  function negate(f) {
    return function (...args) {
      return !f(...args);
    }
  }
  function partition(colection, predicate) {
    if (typeof (predicate) != "function") {
      predicate = shorthand(predicate);
    }
    let t = [];
    let f = [];
    for (let key in collection) {
      let item = collection[key];
      predicate(item, key, collection) ? t.push(item) : f.push(item);
    }
    let res = [t, f];
    return res;
  }
  function reduce(collection, iteratee, accumulator) {
    let result = accumulator ?? 0;
    for (let key in collection) {
      let(key in collection){
        let it = collection[key];
        result = iteratee(result, it, key);
      }
      return result;
    }
  }
  function reduceRight(collection, iteratee, accumulator) {
    //仅考虑collection为数组的情况
    if (collection.length) {
      let result = accumulator;
      let len = collection.length;
      for (let i = len - 1; i >= 0; i--) {
        let it = collection[i];
        result = iteratee(result, it, i);
      }
      return result;
    }
  }
  function reject(collection, predicate) {
    if (typeof (predicate) != "function") {
      predicate = shorthand(predicate);
    }
    let res = [];
    for (let key in collection) {
      let it = collection[key];
      if (!predicate(it, key, collection)) {
        res.push(it);
      }
    }
    return res;
  }
  function some(collection, predicate) {
    if (typeof (predicate) != "function") {
      predicate = shorthand(predicate);
    }
    for (let key in collection) {
      let it = collection[key];
      if (predicate(it, key, collection)) {
        return true;
      }
    }
    return false;
  }
  function every(collection, predicate) {
    if (typeof (predicate) != "function") {
      predicate = shorthand(predicate)
    }
    for (let key in collection) {
      let it = collection[key]
      if (!predicate(it, key, collection)) {
        return false
      }
    }
    return true
  }
  function filter(collection, predicate) {
    if (typeof (predicate) != "function") {
      predicate = shorthand(predicate);
    }
    let res = [];
    for (let key in collection) {
      let item = collection[key];
      if (predicate(item, key, collection)) {
        res.push(item);
      }
    }
    return res;
  }
  function find(collection, predicate, fromIndex = 0) {
    if (typeof (predicate) != "function") {
      predicate = shorthand(predicate);
    }
    if (collection.length) {
      let len = collection.length;
      if (fromIdex < 0) {
        fromIndex = len + fromIndex;
      }
      for (let i = fromIndex; i < len; i++) {
        let item = collection[i];
        if (predicate(item, i, collection)) {
          return item;
        }
      }
    }
  }
  function forEach(colection, iteratee) {
    if (collection.length) {
      for (let i = 0; i < collection.length; i++) {
        let it = collection[i];
        iteratee(it, i, collection);
      }
    } else {
      for (let key in collection) {
        let it = collection[key];
        iteratee(it, key, collection);
      }
    }
    return collection;
  }
  function shuffle(collection) {
    let len = collection.length - 1;
    while (len > 1) {
      i = len;
      let j = Math.round(Math.random() * len);
      swap(collection, i, j);
      i--, len--;
    }
    return collection;
  }
  function countBy(collection, iteratee) {
    if (typeof (iteratee) != "function") {
      iteratee = shorthand(iteratee);
    }
    let result = {};
    for (let key in collection) {
      let it = iteratee(collection[key]);
      if (!(it in result)) {
        result[it] = 0;
      }
      result[it]++;
    }
    return result;
  }
  function groupBy(collection, iteratee) {
    if (typeod(iteratee) != "function") {
      iteratee = shorthand(iteratee);
    }
    let result = {};
    for (let key in collection) {
      let it = iteratee(collection[key]);
      if (!(it in result)) {
        result[it] = [];
      }
      result[it].push(collection[key]);
    }
    return result;
  }
  /**
   *
   */
  return {
    initial: initial,
    countBy: countBy,
    groupBy: groupBy,
    forEach: forEach,
    shuffle: shuffle,
    filter: filter,
    find: find,
    partition: partition,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    every: every,
    some: some,
    keyBy: keyBy,
    map: map,
    nth: nth,
    pull: pull,
    pullAll: pullAll,
    concat: concat,
    toArray: toArray,
    sum: sum,
    sumBy: sumBy,
    repeat: repeat,
    range: range,
    min: min,
    ceil: ceil,
    max: max,
    maxBy: maxBy,
    isBoolean: isBoolean,
    sampleSize: sampleSize,
    size: size,
    remove: remove,
    sample: sample,
    zip: zip,
    without: without,
    uniq: uniq,
    uniqBy: uniqBy,
    tail: tail,
    take: take,
    takeRight: takeRight,
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
