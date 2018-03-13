function pathCountV1(rowCount, columnCount) {
  var pathCount = 0;
  function recurse(i, j) {
    if (i === rowCount - 1 && j === columnCount - 1) pathCount++;
    else {
      if (i < rowCount - 1) recurse(i + 1, j);
      if (j < columnCount - 1) recurse(i, j + 1);
    }
  }
  recurse(0, 0);
  return pathCount;
}

console.log(pathCountV1(3, 4));
