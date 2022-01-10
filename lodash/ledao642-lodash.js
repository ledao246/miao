var ledao246 = {
  chunk: function (array, size = 1) {
    let len = array.length;
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

}
